import { ActiveSection } from '../types';

interface Props { onNavigate: (section: ActiveSection) => void }

export default function BestFireplaceLanding({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-neutral-800 pt-28 pb-16">
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-4">Best Fireplace in Dubai — Flames Fireplace</h1>
        <p className="text-neutral-600 mb-6">Flames Fireplace designs and installs premium bio-ethanol fireplaces, fire pits, and outdoor kitchens across Dubai and the UAE. We combine safety-first engineering with sculptural finishes to deliver the best fireplace solutions for villas, penthouses and luxury hospitality.</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-neutral-900">Why choose Flames Fireplace?</h2>
            <ul className="list-disc pl-5 text-neutral-700 space-y-2">
              <li>Specialist installers with deep compliance knowledge for UAE climates.</li>
              <li>Wide product range: bio-ethanol, water vapor, gas, and built-in BBQs.</li>
              <li>End-to-end service: design, site inspection, and certified handover.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick links</h3>
            <div className="mt-4 flex flex-col gap-3">
              <button onClick={() => onNavigate('bio-ethanol-fireplace')} className="text-left hover:text-orange-600">Bio-Ethanol Fireplaces</button>
              <button onClick={() => onNavigate('water-vapor-fireplace')} className="text-left hover:text-orange-600">3D Water Vapor Fireplaces</button>
              <button onClick={() => onNavigate('fire-pit')} className="text-left hover:text-orange-600">Fire Pits & Tables</button>
              <button onClick={() => onNavigate('built-in-bbq')} className="text-left hover:text-orange-600">Built-In BBQs</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-neutral-200">
          <h3 className="font-semibold text-neutral-900 mb-3">Featured FAQs</h3>
          <div className="space-y-3 text-neutral-700">
            <div>
              <strong>Are your fireplaces safe for apartments?</strong>
              <p className="text-sm">Yes — our ventless bio-ethanol and water-vapor units are designed for enclosed living spaces when installed per our guidance.</p>
            </div>
            <div>
              <strong>Do you provide on-site measurements and 3D casing diagrams?</strong>
              <p className="text-sm">Yes — we offer site surveys and CAD-friendly casing diagrams as part of our installation service.</p>
            </div>
          </div>

          <div className="mt-6">
            <button onClick={() => onNavigate('contact')} className="px-6 py-3 rounded-full bg-orange-600 text-white">Speak to an Expert</button>
          </div>
        </div>
      </section>
    </div>
  );
}
