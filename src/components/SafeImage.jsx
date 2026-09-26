import { useState } from 'react';

// Image that degrades gracefully: if the file is missing we render
// an initials monogram instead of a broken-image icon.
export default function SafeImage({ src, alt, name, className }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    const initials = (name || alt || '?')
      .split(/[\s.]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase();
    return (
      <span className={className} role="img" aria-label={alt}>
        <span aria-hidden="true">{initials}</span>
      </span>
    );
  }
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
