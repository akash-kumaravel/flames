import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface BuiltInBbqProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function BuiltInBbqPage({ onNavigate }: BuiltInBbqProps) {
  const svc = SERVICES.find(s => s.id === 'built-in-bbq');
  return (
    <ProductPage
      productId="built-in-bbq"
      title="Built-In BBQs"
      tagline="Outdoor Cooking Spaces Designed for Hosting"
      description="Create a refined outdoor entertaining area with a custom built-in BBQ tailored for Dubai homes and hospitality projects."
      detailedDescription="Built-in BBQs bring together performance, durability, and design in one seamless outdoor feature. We create cooking stations with premium materials, weather-resistant finishes, and practical layouts that suit everyday use as well as weekend entertaining."
      imageUrl={svc?.image || "/assets/Built-In BBQ _ Flames Close-up.png"}
      features={[
        "Custom layouts built for your patio, garden, or terrace",
        "Weather-resistant materials suitable for UAE climates",
        "Integrated storage, prep areas, and seating-friendly design",
        "Flexible finishes for a polished indoor-outdoor look"
      ]}
      benefits={[
        "Elevates outdoor entertaining and everyday living",
        "Adds long-term value to residential and hospitality spaces",
        "Creates a sleek, permanent focal point for gatherings",
        "Built for durability, comfort, and easy maintenance"
      ]}
      howItWorks={[
        "Discuss your ideal cooking layout and hosting style",
        "Review the site, utilities, and preferred materials",
        "Install the BBQ with integrated finishes and accessories",
        "Receive a complete handover with care guidance"
      ]}
      faqs={[
        {
          question: "Can built-in BBQs be customized for small spaces?",
          answer: "Yes. We tailor the layout to suit compact terraces, large gardens, and everything in between."
        },
        {
          question: "Are they suitable for Dubai’s climate?",
          answer: "Absolutely. We use durable materials and finishes designed to hold up well in heat, sun, and coastal conditions."
        }
      ]}
      bgGradient="from-amber-50 to-orange-50"
      onNavigate={onNavigate}
    />
  );
}
