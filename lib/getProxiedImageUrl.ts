export function getProxiedImageUrl(url: string) {
  return `/api/image-proxy?url=${encodeURIComponent(url)}`
}