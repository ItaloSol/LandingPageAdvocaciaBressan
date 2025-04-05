export default function customImageLoader({ src, width, quality }) {
  if (src.startsWith('https://images.unsplash.com')) {
    const params = new URLSearchParams({
      auto: 'format',
      w: width.toString(),
      q: (quality || 75).toString(),
    });
    return `${src}?${params.toString()}`;
  }
  return src;
}