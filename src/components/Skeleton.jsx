import { memo } from 'react';

const SkeletonCard = memo(() => {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border backdrop-blur-sm"
      style={{
        background: 'rgba(0, 0, 0, 0.4)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        minHeight: '200px'
      }}
    >
      <div className="p-6 w-full">
        <div
          className="h-6 w-3/4 mb-4 rounded animate-pulse"
          style={{ background: 'rgba(255, 255, 255, 0.1)' }}
        />
        <div
          className="h-4 w-full mb-2 rounded animate-pulse"
          style={{ background: 'rgba(255, 255, 255, 0.08)' }}
        />
        <div
          className="h-4 w-5/6 rounded animate-pulse"
          style={{ background: 'rgba(255, 255, 255, 0.08)' }}
        />
      </div>
    </div>
  );
});

SkeletonCard.displayName = 'SkeletonCard';

const SkeletonImage = memo(({ width = '100%', height = '200px', rounded = 'rounded-lg' }) => {
  return (
    <div
      className={`${rounded} animate-pulse`}
      style={{
        width,
        height,
        background: 'rgba(255, 255, 255, 0.1)'
      }}
    />
  );
});

SkeletonImage.displayName = 'SkeletonImage';

const SkeletonText = memo(({ lines = 3, className = '' }) => {
  return (
    <div className={className}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 mb-2 rounded animate-pulse ${index === lines - 1 ? 'w-3/4' : 'w-full'}`}
          style={{ background: 'rgba(255, 255, 255, 0.08)' }}
        />
      ))}
    </div>
  );
});

SkeletonText.displayName = 'SkeletonText';

const SkeletonProjectCard = memo(() => {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border backdrop-blur-sm"
      style={{
        background: 'rgba(0, 0, 0, 0.4)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
      }}
    >
      <SkeletonImage height="200px" rounded="rounded-t-2xl" />
      <div className="p-6">
        <div
          className="h-6 w-2/3 mb-4 rounded animate-pulse"
          style={{ background: 'rgba(255, 255, 255, 0.1)' }}
        />
        <SkeletonText lines={2} />
        <div className="flex gap-2 mt-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-6 w-16 rounded animate-pulse"
              style={{ background: 'rgba(255, 255, 255, 0.08)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

SkeletonProjectCard.displayName = 'SkeletonProjectCard';

export { SkeletonCard, SkeletonImage, SkeletonText, SkeletonProjectCard };
