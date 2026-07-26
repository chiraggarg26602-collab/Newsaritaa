import React from 'react';
import { ArrowRight, Sparkles, Feather, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onCraftClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onCraftClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#F5F0EB] border-b border-[#EADFCF]">
      {/* Background Decorative Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2C2A29_1px,transparent_1px)] [background-size:16px_16px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE0D3] border border-[#D5C5B5] text-[#C85A32] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Festive Collection 2026 • Jaipur Heritage
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#1A1918] font-bold leading-[1.12] tracking-tight">
              Timeless Block Prints, <br />
              <span className="italic font-normal text-[#C85A32]">Crafted by Hand</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5A524C] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience the soul of Indian textile heritage. Handblock-printed by master artisans of Rajasthan and Gujarat using 100% organic cotton, natural mud-resist Dabu, and centuries-old vegetable dyes.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C85A32] text-white text-sm font-semibold tracking-wider rounded-md hover:bg-[#B04B26] transition shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group"
              >
                <span>Explore New Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onCraftClick}
                className="w-full sm:w-auto px-7 py-3.5 bg-transparent border-2 border-[#1E2B3A] text-[#1E2B3A] text-sm font-semibold tracking-wider rounded-md hover:bg-[#1E2B3A] hover:text-white transition flex items-center justify-center gap-2"
              >
                <span>Discover Our Craft</span>
              </button>
            </div>

            {/* Quick Micro Features */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#E5D7C8] text-center lg:text-left">
              <div>
                <p className="font-serif-display text-xl sm:text-2xl font-bold text-[#1A1918]">500+</p>
                <p className="text-xs text-[#7A6B5D]">Master Artisans</p>
              </div>
              <div>
                <p className="font-serif-display text-xl sm:text-2xl font-bold text-[#1A1918]">100%</p>
                <p className="text-xs text-[#7A6B5D]">Pure Organic Cotton</p>
              </div>
              <div>
                <p className="font-serif-display text-xl sm:text-2xl font-bold text-[#1A1918]">50k+</p>
                <p className="text-xs text-[#7A6B5D]">Patrons Worldwide</p>
              </div>
            </div>
          </div>

          {/* Right Hero Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Card with Gold Accent Border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
                  alt="Nayaab Authentic Handblock Printed Anarkali Kurta"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Artisan Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#EADFCF] shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center font-bold text-sm shrink-0">
                    <Feather className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1A1918]">Bagru Indigo Dabu Craft</p>
                    <p className="text-[11px] text-[#7A6B5D]">Stamped in Bagru, Rajasthan • 14 Day Process</p>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Card Behind */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#D4A359] rounded-2xl -z-10 hidden sm:block" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
