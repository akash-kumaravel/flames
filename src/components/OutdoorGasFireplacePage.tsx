import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface OutdoorGasProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function OutdoorGasFireplacePage({ onNavigate }: OutdoorGasProps) {
  const svc = SERVICES.find(s => s.id === 'outdoor-gas-fireplace');
  return (
    <ProductPage
      productId="outdoor-gas-fireplace"
      title="Outdoor Gas Fire Place"
      tagline="Automated gas burners with remote and keyed controls"
      description="High-performance outdoor gas fireplaces with automation, remote ignition and multiple safety interlocks. Suitable for terraces and poolside installs."
      detailedDescription="Engineered outdoor gas burners offering instant ignition, adjustable flame heights, remote operation and multiple safety interlocks (push-&-turn, keyed valve). Perfect for home automation integration and outdoor entertaining."
      imageUrl={svc?.image || "/assets/OutdoorGasFireplac.jpeg"}

      features={[
        "Home automated on &off fire place",
        "High and low flame fire Place",
        "On and Off remote operated fire place",
        "Push & turn fire place",
        "Key valve Fire place"
      ]}
      benefits={[
        "Full automation and remote convenience",
        "Precise flame control for ambiance or heat",
        "Industry-standard safety interlocks"
      ]}
      howItWorks={[
        "Connect to certified gas supply and commission by licensed installer.",
        "Configure remote or home-automation controller during setup.",
        "Use push-&-turn or keyed valve for secure ignition and shutdown."
      ]}
      faqs={[{ question: "Can these be automated?", answer: "Yes — on/off automation and remote control are supported with proper installation." }]}
      bgGradient="from-amber-100 to-orange-100"
      onNavigate={onNavigate}
    />
  );
}
