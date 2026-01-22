
export enum SlideType {
  HERO = 'HERO',
  STANDARD = 'STANDARD',
  ZOOM = 'ZOOM',
  FEATURE = 'FEATURE'
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface Slide {
  id: string;
  type: SlideType;
  title?: string;
  subtitle?: string;
  content?: string;
  image?: string;
  features?: FeatureItem[];
}
