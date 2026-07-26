import React, { useState } from 'react';
import { Feather, Sparkles, Sun, Droplets, Compass, Layers, ArrowRight } from 'lucide-react';
import { CRAFT_DETAILS } from '../data/crafts';

interface CraftStorySectionProps {
  onLearnMoreClick?: () => void;
}

export const CraftStorySection: React.FC<CraftStorySectionProps> = ({ onLearnMoreClick }) => {
  const [selectedCraft, setSelectedCraft] = useState<'Bagru' | 'Sanganeri' | 'Ajrakh'>('Bagru');

  const activeCraft = CRAFT_DETAILS[selectedCraft];

  return (
    <section className="bg-[#FAF4F8] py-16 border-b border-[#E8D4E5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2E5F2] text-[#6B4168] text-xs font-bold uppercase tracking-widest mb-3">
            <Feather className="w-3.5 h-3.5" />
            Heritage Rajasthani Craftsmanship
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1A2A]">
            The Art of Handblock Printing
          </h2>
          <p className="text-sm text-[#7D5E7B] mt-3 leading-relaxed">
            Every motif stamped on saritaa.in textiles carries centuries of Rajasthan and Gujarat artisan mastery. Discover the intricate journey from raw carved woodblocks to finished organic drapes.
          </p>

          {/* Craft Selector Tabs */}
          <div className="mt-8 flex justify-center gap-2 sm:gap-4 border-b border-[#E8D4E5] pb-2">
            {(['Bagru', 'Sanganeri', 'Ajrakh'] as const).map((craftKey) => (
              <button
                key={craftKey}
                onClick={() => setSelectedCraft(craftKey)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition ${
                  selectedCraft === craftKey
                    ? 'bg-[#5C385A] text-white shadow-sm'
                    : 'bg-[#F5EBF3] text-[#2B1A2A] hover:bg-[#F2E5F2]'
                }`}
              >
                {craftKey} Handblock
              </button>
            ))}
          </div>
        </div>

        {/* Selected Craft Banner */}
        <div className="bg-[#F5EBF3] rounded-2xl p-6 sm:p-8 border border-[#E2CDDF] mb-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#6B4168] uppercase tracking-wider">
              <Compass className="w-4 h-4" /> Origin: {activeCraft.origin}
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#2B1A2A]">
              {activeCraft.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C455B] leading-relaxed">
              {activeCraft.fullDesc}
            </p>
            <div className="p-3 bg-white rounded-lg border border-[#E8D4E5] text-xs text-[#2B1A2A] flex items-center gap-2">
              <Droplets className="w-4 h-4 text-[#6B4168] shrink-0" />
              <span><strong>Natural Color Formulation:</strong> {activeCraft.dyeType}</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-xl overflow-hidden aspect-[4/3] border-2 border-white shadow-md">
            <img 
              src={activeCraft.heroImage} 
              alt={activeCraft.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.tried) {
                  target.dataset.tried = '1';
                  target.src = '/products/origin_main.jpg';
                } else if (target.dataset.tried === '1') {
                  target.dataset.tried = '2';
                  target.src = '/products/product-32.jpeg';
                }
              }}
            />
          </div>
        </div>

        {/* 4-Step Process Breakdown Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeCraft.processSteps.map((step) => (
            <div 
              key={step.stepNumber}
              className="bg-white rounded-xl border border-[#E8D4E5] p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-[#F5EBF3]">
                  <img
                    src={step.imageUrl}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.tried) {
                        target.dataset.tried = '1';
                        target.src = `/products/step_${step.stepNumber}.jpg`;
                      } else if (target.dataset.tried === '1') {
                        target.dataset.tried = '2';
                        target.src = `/products/product-${step.stepNumber}.jpeg`;
                      }
                    }}
                  />
                  <span className="absolute top-2 left-2 bg-[#6B4168] text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    0{step.stepNumber}
                  </span>
                </div>

                <h4 className="font-serif-display text-lg font-bold text-[#2B1A2A]">
                  {step.title}
                </h4>
                <p className="text-[11px] font-bold text-[#6B4168] uppercase tracking-wider mt-0.5">
                  {step.subtitle}
                </p>
                <p className="text-xs text-[#7D5E7B] mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Full Craft Page */}
        {onLearnMoreClick && (
          <div className="mt-12 text-center">
            <button
              onClick={onLearnMoreClick}
              className="px-8 py-3 bg-[#6B4168] text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#5C385A] transition shadow-md inline-flex items-center gap-2"
            >
              <span>Explore Complete Artisan Heritage Story</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
