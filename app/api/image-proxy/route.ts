import { NextRequest } from 'next/server'

// ✅ In-memory cache (URL -> Buffer)
const imageCache = new Map<string, Buffer>()
const MAX_CACHE_SIZE = 100 // ปรับตามหน่วยความจำที่คุณมี

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url')

  if (!url) {
    return new Response('Missing `url` query parameter', { status: 400 })
  }

  // 🔐 Validate URL format
  let parsedUrl: URL
  try {
    parsedUrl = new URL(url)
  } catch {
    return new Response('Invalid URL format', { status: 400 })
  }

  // ✅ HIT: serve from cache
  if (imageCache.has(url)) {
    return new Response(imageCache.get(url), {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=86400',
        'X-Image-Proxy': 'HIT',
      },
    })
  }

  // 🕒 Timeout fetch after 5s
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000)

    const imageRes = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'NextImageProxy',
        Accept: 'image/avif,image/webp,image/*,*/*',
      },
    })

    clearTimeout(timeout)

    if (!imageRes.ok) {
      return new Response(`Failed to fetch image: ${imageRes.statusText}`, {
        status: imageRes.status,
      })
    }

    const contentType = imageRes.headers.get('content-type') || 'image/jpeg'
    const arrayBuffer = await imageRes.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // ✅ Save to cache (limit size)
    if (imageCache.size >= MAX_CACHE_SIZE) {
      const firstKey = imageCache.keys().next().value
      if (typeof firstKey === 'string') {
        imageCache.delete(firstKey)
      }
    }
    imageCache.set(url, buffer)

    return new Response(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
        'X-Image-Proxy': 'MISS',
      },
    })
  } catch (err: any) {
    return new Response(`Image Proxy Error: ${err.message}`, { status: 500 })
  }
}
