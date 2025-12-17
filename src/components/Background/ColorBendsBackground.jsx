import { memo } from 'react';
import ColorBends from '../ColorBends';

/**
 * Background component - Memoized for performance
 */
const ColorBendsBackground = memo(() => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <ColorBends
        rotation={-160}
        speed={0.2}
        colors={[
          '#040404',
          '#0b0b0b',
          '#14111a',
          '#10141c',
          '#1a1410',
          '#150f12', 
          '#0c0c0c',
        ]}
        transparent={true}
        autoRotate={0}
        scale={0.7}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={1}
        noise={0.1}
      />
    </div>
  );
});

ColorBendsBackground.displayName = 'ColorBendsBackground';

export default ColorBendsBackground;
