import React from 'react';
import { ArrowRight, Sparkles, Feather, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SaritaaLogo } from './SaritaaLogo';

interface HeroProps {
  onExploreClick: () => void;
  onCraftClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onCraftClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF4F8] border-b border-[#E8D4E5]">
      {/* Background Decorative Floral Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#5C385A_1.5px,transparent_1.5px)] [background-size:20px_20px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2E5F2] border border-[#E2CDDF] text-[#6B4168] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
              Authentic Rajasthani Handblock • saritaa.in 2024
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#2B1A2A] font-bold leading-[1.12] tracking-tight">
              Timeless Block Prints, <br />
              <span className="italic font-normal text-[#6B4168]">Handcrafted in Rajasthan</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5C455B] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience the authentic soul of Rajasthani handblock clothing at <strong>saritaa.in</strong>. Stamped by master artisans using organic cotton, natural mud-resist Dabu, Sanganeri floral blocks, and ancient vegetable dyes.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#6B4168] text-white text-sm font-bold tracking-wider rounded-md hover:bg-[#5C385A] transition shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onCraftClick}
                className="w-full sm:w-auto px-7 py-3.5 bg-transparent border-2 border-[#5C385A] text-[#5C385A] text-sm font-bold tracking-wider rounded-md hover:bg-[#5C385A] hover:text-white transition flex items-center justify-center gap-2"
              >
                <span>Discover Our Heritage</span>
              </button>
            </div>

            {/* Quick Micro Features */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#E8D4E5] text-center lg:text-left">
              <div>
                <p className="font-serif-display text-xl sm:text-2xl font-bold text-[#2B1A2A]">500+</p>
                <p className="text-xs text-[#7D5E7B]">Jaipur Artisans</p>
              </div>
              <div>
                <p className="font-serif-display text-xl sm:text-2xl font-bold text-[#2B1A2A]">100%</p>
                <p className="text-xs text-[#7D5E7B]">Pure Mulmul Cotton</p>
              </div>
              <div>
                <p className="font-serif-display text-xl sm:text-2xl font-bold text-[#2B1A2A]">Est. 2024</p>
                <p className="text-xs text-[#7D5E7B]">saritaa.in</p>
              </div>
            </div>
          </div>

          {/* Right Hero Image Composition with Signature Logo Motif Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Card with Mauve & Gold Accent Border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/products/product-1.jpeg"
                  alt="Saritaa Clothing Store Rajasthani Handblock Outfit"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Saritaa Brand Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#5C385A]/95 text-white backdrop-blur-md p-3.5 rounded-xl border border-[#8B5388] shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF4F8] text-[#5C385A] flex items-center justify-center font-bold text-sm shrink-0 shadow-inner">
                    <Feather className="w-5 h-5 text-[#6B4168]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#F2E5F2]">सरिता CLOTHING STORE</p>
                    <p className="text-[11px] text-[#E8D5E5]">Handblock Printed • saritaa.in</p>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Card Behind */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#6B4168] rounded-2xl -z-10 hidden sm:block opacity-60" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
