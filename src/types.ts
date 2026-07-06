export type ActiveSection =
  | 'home'
  | 'about'
  | 'services'           // Services, Advisory, and Installation
  | 'portfolio'          // Portfolio of works
  | 'why-choose'
  | 'faq'
  | 'contact'
  | 'blog'
  | 'bio-ethanol-fireplace'
  | 'water-vapor-fireplace'
  | 'outdoor-fireplace'
  | 'indoor-fireplace'
  | 'fire-pit'
  | 'fire-table'
  | 'outdoor-kitchen'
  | 'built-in-bbq'
  | 'fireplace-dubai'
  | 'ethanol-burner';

export interface FAQItem {
  question: string;
  answer: string;
  category?: 'ethanol' | 'general';
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductDetails {
  id: string;
  name: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  features: string[];
  benefits: string[];
  howItWorks: string[];
  faqs: FAQItem[];
  imageUrl: string;
  bgGradient: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  targetKeyword: string;
  schema: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
    faq?: FAQItem;
    category: string;
    readTime: string;
    date: string;
  };
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'indoor' | 'fire-pit';
  categoryLabel: string;
  location: string;
  description: string;
  image: string;
  specs: string[];
  waMessage: string;
}
