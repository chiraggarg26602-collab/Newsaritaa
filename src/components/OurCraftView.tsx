import React, { useState } from 'react';
import { Feather, Droplets, Sun, Sparkles, MapPin, Layers, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { CRAFT_DETAILS } from '../data/crafts';

interface OurCraftViewProps {
  onShopCraftClick: (craft: string) => void;
}

export const OurCraftView: React.FC<OurCraftViewProps> = ({ onShopCraftClick }) => {
  const [activeTab, setActiveTab] = useState<'Bagru' | 'Sanganeri' | 'Ajrakh'>('Bagru');

  const selectedCraft = CRAFT_DETAILS[activeTab];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C85A32] flex items-center justify-center gap-1.5">
          <Feather className="w-4 h-4" /> Centuries of Living Heritage
        </span>
        <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1918] mt-3">
          Our Craft & Artisan Philosophy
        </h1>
        <p className="text-sm sm:text-base text-[#7A6B5D] mt-4 leading-relaxed">
          At Nayaab, we preserve centuries of handblock printing traditions from Rajasthan and Gujarat. Every meter of fabric is a canvas of slow fashion, natural dyes, and human touch.
        </p>
      </div>

      {/* Craft Heritage Selector */}
      <div className="bg-white p-8 rounded-2xl border border-[#EADFCF] shadow-sm">
        <div className="flex flex-wrap justify-center gap-3 border-b border-[#EADFCF] pb-4 mb-8">
          {(['Bagru', 'Sanganeri', 'Ajrakh'] as const).map((craft) => (
            <button
              key={craft}
              onClick={() => setActiveTab(craft)}
              className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                activeTab === craft
                  ? 'bg-[#C85A32] text-white shadow-md'
                  : 'bg-[#FAF7F2] text-[#2C2A29] hover:bg-[#EAE0D3] border border-[#EADFCF]'
              }`}
            >
              {craft} Handblock Heritage
            </button>
          ))}
        </div>

        {/* Selected Craft Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-[#D4A359] uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {selectedCraft.origin}
            </span>
            <h2 className="font-serif-display text-3xl font-bold text-[#1A1918]">
              {selectedCraft.name}
            </h2>
            <p className="text-sm text-[#5A524C] leading-relaxed">
              {selectedCraft.fullDesc}
            </p>

            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#EADFCF] text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#1A1918]">
                <Droplets className="w-4 h-4 text-[#C85A32]" /> Organic Dye Formulation:
              </div>
              <p className="text-[#7A6B5D] pl-6">{selectedCraft.dyeType}</p>
            </div>

            <button
              onClick={() => onShopCraftClick(activeTab)}
              className="px-6 py-3 bg-[#1E2B3A] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#C85A32] transition shadow"
            >
              Shop {activeTab} Collection
            </button>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border-4 border-white shadow-xl">
              <img
                src={selectedCraft.heroImage}
                alt={selectedCraft.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Steps Visual Breakdown */}
        <div className="mt-12 pt-8 border-t border-[#EADFCF]">
          <h3 className="font-serif-display text-2xl font-bold text-[#1A1918] mb-6 text-center">
            Step-by-Step {selectedCraft.name} Process
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectedCraft.processSteps.map((step) => (
              <div key={step.stepNumber} className="bg-[#FAF7F2] p-5 rounded-xl border border-[#EADFCF] space-y-3">
                <div className="aspect-video rounded-lg overflow-hidden bg-white">
                  <img src={step.imageUrl} alt={step.title} className="w-full h-full object-cover" />
                </div>
                <span className="inline-block bg-[#C85A32] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Step 0{step.stepNumber}
                </span>
                <h4 className="font-serif-display text-base font-bold text-[#1A1918]">
                  {step.title}
                </h4>
                <p className="text-xs text-[#7A6B5D] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Natural Dye Ingredients Showcase */}
      <div className="bg-[#1E2B3A] text-white rounded-2xl p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#D4A359] uppercase tracking-widest">
            100% Earth-Derived Palette
          </span>
          <h2 className="font-serif-display text-3xl font-bold mt-2">
            Natural Vegetable Dyes & Mineral Mordants
          </h2>
          <p className="text-xs text-[#D5C9BD] mt-2">
            No synthetic chemicals or toxic runoff. Our dyes are derived entirely from wild botanicals, iron scraps, and mineral clays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 p-5 rounded-xl border border-white/10 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#1E2B3A] text-[#2B3A4E] border border-white/20 mx-auto flex items-center justify-center font-bold">
              💙
            </div>
            <h4 className="font-serif-display text-lg font-bold text-[#D4A359]">Indigo Vat Dye</h4>
            <p className="text-xs text-[#D5C9BD]">Derived from fermented Indigofera tinctoria leaves soaked in subterranean vats.</p>
          </div>

          <div className="bg-white/10 p-5 rounded-xl border border-white/10 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#C85A32] text-white mx-auto flex items-center justify-center font-bold">
              ❤️
            </div>
            <h4 className="font-serif-display text-lg font-bold text-[#D4A359]">Madder Root (Manjistha)</h4>
            <p className="text-xs text-[#D5C9BD]">Boiled in copper kettles to achieve deep terracotta, brick red, and crimson tones.</p>
          </div>

          <div className="bg-white/10 p-5 rounded-xl border border-white/10 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#1A1918] text-white mx-auto flex items-center justify-center font-bold">
              🖤
            </div>
            <h4 className="font-serif-display text-lg font-bold text-[#D4A359]">Syrup of Iron Scraps</h4>
            <p className="text-xs text-[#D5C9BD]">Iron scraps fermented with sugarcane molasses for 21 days produce intense natural black.</p>
          </div>

          <div className="bg-white/10 p-5 rounded-xl border border-white/10 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#D4A359] text-white mx-auto flex items-center justify-center font-bold">
              💛
            </div>
            <h4 className="font-serif-display text-lg font-bold text-[#D4A359]">Pomegranate & Turmeric</h4>
            <p className="text-xs text-[#D5C9BD]">Dried pomegranate rind and raw turmeric roots provide vibrant mustard and olive shades.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
