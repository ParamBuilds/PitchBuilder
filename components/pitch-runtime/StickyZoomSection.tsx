
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import type { Slide } from '../../types';

export function StickyZoomSection({ id, image }: Slide) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Start scaling earlier and finish scaling before the end
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 5]);
  
  // Start fading out when scaling is almost done
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section id={id} ref={ref} className="h-[250vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
            className="w-full h-full flex items-center justify-center"
            style={{ 
                scale,
                opacity
            }}
        >
          <img
            src={image}
            alt="Product Reveal"
            className="w-[80vw] h-auto md:w-[60vw] object-contain rounded-2xl shadow-2xl shadow-black/50"
          />
        </motion.div>
      </div>
    </section>
  );
}
