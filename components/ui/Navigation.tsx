
import React, { useState, useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import { useSnapScroll } from '../../hooks/useSnapScroll';
import type { Slide } from '../../types';

interface NavigationProps {
  slides: Slide[];
}

export const Navigation: React.FC<NavigationProps> = ({ slides }) => {
  const { snapTo } = useSnapScroll();
  const [activeSlide, setActiveSlide] = useState(slides[0]?.id || '');

  useLenis(({ scroll }) => {
    let currentSlide = '';
    let minDistance = Infinity;

    slides.forEach(slide => {
      const element = document.getElementById(slide.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          currentSlide = slide.id;
        }
      }
    });
    
    if (currentSlide !== activeSlide) {
      setActiveSlide(currentSlide);
    }
  }, [slides, activeSlide]);

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <ul className="flex flex-col gap-3">
        {slides.map(slide => (
          <li key={slide.id}>
            <button
              onClick={() => snapTo(`#${slide.id}`)}
              className="group flex items-center gap-3"
              aria-label={`Go to ${slide.id} section`}
            >
              <span className="text-right text-sm text-transparent group-hover:text-neutral-400 transition-colors duration-300 capitalize pr-2">
                {slide.id.replace('-', ' ')}
              </span>
              <div
                className={`w-2.5 h-2.5 rounded-full border-2 border-neutral-500 transition-all duration-300 ${
                  activeSlide === slide.id ? 'bg-white scale-125 border-white' : 'bg-transparent group-hover:border-white'
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
