import { useMemo } from 'react';

const ShinyText = ({ text, disabled = false, speed = 2, className = '' }) => {
  const animationDuration = `${speed}s`;
  const uniqueId = useMemo(() => `shiny-${Math.random().toString(36).substr(2, 9)}`, []);
  const isBlock = className.includes('block');

  if (disabled) {
    return <span className={className}>{text}</span>;
  }

  // Escape text for CSS content
  const escapedText = text
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\A');

  return (
    <>
      <style>{`
        .${uniqueId}::before {
          content: '${escapedText}';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(120deg, transparent 40%, rgba(0,0,0, 0.7) 50%, transparent 60%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine ${animationDuration} linear infinite;
          pointer-events: none;
          mix-blend-mode: screen;
          z-index: 1000;
          white-space: ${isBlock ? 'pre-wrap' : 'pre'};
          word-wrap: break-word;
        }
      `}</style>
      <span className={`${isBlock ? 'block' : 'inline-block'} relative ${uniqueId} ${className}`}>
        {text}
      </span>
    </>
  );
};

export default ShinyText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };
