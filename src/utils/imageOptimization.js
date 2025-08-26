// Image optimization utilities
export const createImageSrcSet = (baseName, sizes = ['sm', 'md', 'lg']) => {
  return sizes.map(size => `/src/assets/${baseName}-${size}.webp`).join(', ');
};

export const getOptimalImageSize = (containerWidth) => {
  if (containerWidth <= 400) return 'sm';
  if (containerWidth <= 768) return 'md';
  return 'lg';
};

export const preloadCriticalImages = (images) => {
  images.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.type = 'image/webp';
    document.head.appendChild(link);
  });
};

export const lazyLoadImage = (img, src) => {
  return new Promise((resolve) => {
    img.onload = resolve;
    img.src = src;
  });
};