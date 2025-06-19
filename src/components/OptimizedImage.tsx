import { FC, memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

const OptimizedImage: FC<OptimizedImageProps> = memo(({
  src,
  alt,
  width,
  height,
  className,
  style,
  priority = false
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={(e) => {
        // Fallback for failed images
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
      }}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';
export default OptimizedImage; 