export type ActiveSection =
  | 'home'
  | 'about'
  | 'products'
  | 'product-watercolor' // 3D Water Vapor
  | 'product-indoor'     // Indoor Bio Ethanol
  | 'product-outdoor'    // Outdoor Bio Ethanol
  | 'why-choose'
  | 'faq'
  | 'contact'
  | 'blog';

export interface FAQItem {
  question: string;
  answer: string;
  category?: 'vapor' | 'ethanol' | 'general';
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
  priceEstimate: string;
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
