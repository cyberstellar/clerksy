export default function getAssetUrl(src) {
  return new URL(`../assets/${src}`, import.meta.url)
}
