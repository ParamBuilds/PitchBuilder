
import React from 'react';
import type { Slide as SlideProps } from '../../types';
import { SlideType } from '../../types';
import { HeroSlide, StandardSlide, FeatureSlide } from './Slide';
import { StickyZoomSection } from './StickyZoomSection';

interface PitchRendererProps {
  slides: SlideProps[];
}

export const PitchRenderer: React.FC<PitchRendererProps> = ({ slides }) => {
  return (
    <div>
      {slides.map((slide) => {
        switch (slide.type) {
          case SlideType.HERO:
            return <HeroSlide key={slide.id} {...slide} />;
          case SlideType.STANDARD:
            return <StandardSlide key={slide.id} {...slide} />;
          case SlideType.ZOOM:
            return <StickyZoomSection key={slide.id} {...slide} />;
          case SlideType.FEATURE:
            return <FeatureSlide key={slide.id} {...slide} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
