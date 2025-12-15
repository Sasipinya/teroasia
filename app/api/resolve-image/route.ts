import { NextResponse } from "next/server";

const IMG_EXT = /\.(png|jpe?g|webp|gif|avif|svg)(\?.*)?$/i;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  if (!url) {
    return NextResponse.json({ message: "Missing url" }, { status: 400 });
  }

  try {
    // 1) ถ้าเป็น URL ไฟล์รูปตรง ๆ → เช็ค HEAD/GET
    if (IMG_EXT.test(url)) {
      const ok = await exists(url);
      if (ok) return jsonNoStore({ src: url });
      return NextResponse.json({ message: "image not found" }, { status: 404 });
    }

    // 2) ลอง fetch เป็น HTML (หน้าเว็บหรือ directory listing)
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) {
      return NextResponse.json({ message: "fetch failed" }, { status: 404 });
    }

    const contentType = res.headers.get("content-type") || "";
    const html = await res.text();

    if (/text\/html/i.test(contentType) || looksLikeHtml(html)) {
      // 2.1) หา og:image
      const og = matchOgImage(html);
      if (og) {
        const absolute = toAbsolute(og, url);
        const ok = await exists(absolute);
        if (ok) return jsonNoStore({ src: absolute });
      }

      // 2.2) หา <img ... src="...">
      const firstImg = matchFirstImg(html, url);
      if (firstImg) {
        const ok = await exists(firstImg);
        if (ok) return jsonNoStore({ src: firstImg });
      }

      // 2.3) กรณี directory listing (ลิงก์ไฟล์ภาพในหน้า)
      const firstLinkImg = matchFirstLinkToImage(html, url);
      if (firstLinkImg) {
        const ok = await exists(firstLinkImg);
        if (ok) return jsonNoStore({ src: firstLinkImg });
      }

      return NextResponse.json({ message: "no image found in html" }, { status: 404 });
    }

    // 3) ไม่ใช่ HTML: เผื่อเป็นไฟล์/รีไดเร็กต์ — ลอง HEAD ตรง ๆ
    const ok = await exists(url);
    if (ok) return jsonNoStore({ src: url });

    return NextResponse.json({ message: "unhandled content" }, { status: 404 });
  } catch {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

// ===== Helpers =====
function jsonNoStore(data: any) {
  const r = NextResponse.json(data);
  r.headers.set("Cache-Control", "no-store");
  return r;
}

async function exists(u: string) {
  try {
    let r = await fetch(u, { method: "HEAD", redirect: "follow" });
    if (!r.ok || Number(r.status) >= 400) {
      // fallback GET บางเซิร์ฟเวอร์ไม่รองรับ HEAD
      r = await fetch(u, { method: "GET", redirect: "follow" });
    }
    if (!r.ok) return false;
    const ct = r.headers.get("content-type") || "";
    // ยอมรับเป็น image/* หรืออย่างน้อยไฟล์ที่โหลดได้
    return ct.startsWith("image/") || IMG_EXT.test(new URL(r.url).pathname);
  } catch {
    return false;
  }
}

function looksLikeHtml(s: string) {
  return /<html|<!doctype html|<head|<body/i.test(s);
}

function toAbsolute(maybeRelative: string, baseUrl: string) {
  try {
    return new URL(maybeRelative, baseUrl).toString();
  } catch {
    return maybeRelative;
  }
}

function matchOgImage(html: string) {
  // <meta property="og:image" content="...">
  const re =
    /<meta\s+(?:property|name)=["']og:image["'][^>]*?\scontent=["']([^"']+)["'][^>]*>/i;
  const m = html.match(re);
  return m?.[1] || null;
}

function matchFirstImg(html: string, base: string) {
  // <img ... src="...">
  const re = /<img[^>]*\ssrc=["']([^"']+)["'][^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const src = toAbsolute(m[1], base);
    if (IMG_EXT.test(src)) return src;
  }
  return null;
}

function matchFirstLinkToImage(html: string, base: string) {
  // <a href="...jpg"> ในหน้า listing
  const re = /<a[^>]*\shref=["']([^"']+)["'][^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const href = toAbsolute(m[1], base);
    if (IMG_EXT.test(href)) return href;
  }
  return null;
}
