
import React, { useRef } from 'react';
import type { Slide as SlideProps, FeatureItem } from '../../types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LucideIcon } from '../ui/LucideIcon';

const SlideContainer: React.FC<{ id: string, children: React.ReactNode }> = ({ id, children }) => (
  <section id={id} className="min-h-screen w-full flex items-center justify-center p-8 relative overflow-hidden">
    <div className="max-w-4xl w-full mx-auto text-center">
      {children}
    </div>
  </section>
);

const AnimatedText: React.FC<{ children: React.ReactNode, className?: string, delay?: number }> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.5"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
};

export const HeroSlide: React.FC<SlideProps> = ({ id, title, subtitle }) => (
  <section id={id} className="min-h-screen w-full flex flex-col items-center justify-center p-8 relative overflow-hidden text-center bg-grid-white/[0.05]">
     <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="max-w-5xl mx-auto z-10">
      <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 animate-fade-in">
        {title}
      </h1>
      <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto animate-fade-in-up [animation-delay:0.5s]">
        {subtitle}
      </p>
    </div>
    <div className="absolute bottom-10 animate-fade-in [animation-delay:1s] flex flex-col items-center gap-2 text-neutral-400">
      <p>Scroll to begin</p>
      <div className="w-px h-8 bg-neutral-600"></div>
    </div>
  </section>
);

export const StandardSlide: React.FC<SlideProps> = ({ id, title, content }) => (
  <SlideContainer id={id}>
    <div>
      <AnimatedText>
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          {title}
        </h2>
      </AnimatedText>
      <AnimatedText>
        <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
          {content}
        </p>
      </AnimatedText>
    </div>
  </SlideContainer>
);

export const FeatureSlide: React.FC<SlideProps> = ({ id, title, features = [] }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={ref} id={id} className="min-h-screen w-full py-24 px-8">
            <div className="max-w-5xl mx-auto">
                <AnimatedText>
                    <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-16">
                        {title}
                    </h2>
                </AnimatedText>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} scrollYProgress={scrollYProgress} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureCard: React.FC<{ feature: FeatureItem, scrollYProgress: any, index: number }> = ({ feature, scrollYProgress, index }) => {
    const start = 0.1 + index * 0.1;
    const end = 0.3 + index * 0.1;

    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
    const y = useTransform(scrollYProgress, [start, end], [50, 0]);

    return (
        <motion.div style={{ opacity, y }} className="flex gap-6 items-start">
            <div className="p-3 bg-white/10 rounded-lg">
                <LucideIcon name={feature.icon as any} className="w-6 h-6 text-neutral-300" />
            </div>
            <div>
                <h3 className="text-xl font-semibold text-neutral-100">{feature.title}</h3>
                <p className="mt-2 text-neutral-400">{feature.description}</p>
            </div>
        </motion.div>
    );
}
