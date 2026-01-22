
import type { Slide } from './types';
import { SlideType } from './types';

export const PITCH_DECK: Slide[] = [
  {
    id: 'intro',
    type: SlideType.HERO,
    title: 'Not Slides. Cinematic Pitch Experiences.',
    subtitle: 'Guide investors through a story — with motion, pacing, and polish that feels like a product launch, not a document.',
  },
  {
    id: 'product-reveal',
    type: SlideType.ZOOM,
    image: 'https://picsum.photos/seed/product/1600/900',
  },
  {
    id: 'problem',
    type: SlideType.STANDARD,
    title: 'The Problem: Static Decks Fail to Impress',
    content: 'Traditional pitch decks are flat, boring, and easily forgotten. They fail to capture the dynamism of your vision, leaving investors uninspired and disconnected. In a competitive funding landscape, a PDF is no longer enough.',
  },
  {
    id: 'features',
    type: SlideType.FEATURE,
    title: 'A New Dimension of Storytelling',
    features: [
      {
        icon: 'Zap',
        title: 'Inertial, Apple-Grade Scrolling',
        description: 'Replace jarring page jumps with a fluid, momentum-based experience that feels premium and controlled.',
      },
      {
        icon: 'Film',
        title: 'Scroll-Directed Storytelling',
        description: 'Use the scrollbar as a timeline, guiding your audience through a narrative that unfolds at their pace.',
      },
      {
        icon: 'Smartphone',
        title: 'Investor-Perfect on All Devices',
        description: 'From iPhone to boardroom display, your pitch maintains its cinematic quality and professional polish.',
      },
      {
        icon: 'Rocket',
        title: 'Product-Reveal Zoom Sequences',
        description: 'Create dramatic, memorable moments by transforming a simple scroll into a captivating product reveal.',
      },
    ]
  },
  {
    id: 'outro',
    type: SlideType.STANDARD,
    title: "Your pitch shouldn't scroll. It should move.",
    content: "We provide the tools to build confidence, clarity, and momentum. It's time to elevate your story beyond the slide.",
  },
];
