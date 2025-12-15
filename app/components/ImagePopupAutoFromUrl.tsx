"use client";
import { useEffect, useState } from "react";
import PopupImageModal from "./PopupImageModal";

export default function ImagePopupAutoFromUrl({ pageUrl }: { pageUrl: string }) {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/api/resolve-image?url=${encodeURIComponent(pageUrl)}`, { cache: "no-store" });
        if (!res.ok) return;
        const json = await res.json();
        if (!cancelled && json?.src) {
          // double-check โหลดได้จริง (กันเคส hotlink)
          const probe = new Image();
          probe.onload = () => { if (!cancelled) { setSrc(json.src); setOpen(true); } };
          probe.onerror = () => {}; // ไม่เด้ง
          probe.src = json.src;
        }
      } catch {}
    })();
    return () => { cancelled = true; };
  }, [pageUrl]);

  if (!open || !src) return null;
  return <PopupImageModal src={src} onClose={() => setOpen(false)} />;
}
