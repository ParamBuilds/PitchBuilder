
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import React from 'react';

interface PitchRuntimeProps {
  children: React.ReactNode;
}

export function PitchRuntime({ children }: PitchRuntimeProps) {
  useLenis(({ scroll, velocity }) => {
    // Reserved for future use:
    // - Engagement analytics
    // - Adaptive animation intensity
    // - Scroll-based storytelling logic
  });

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.5,
        smoothTouch: true,
        wheelMultiplier: 1.1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
