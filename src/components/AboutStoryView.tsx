import React from 'react';
import { Sparkles, Users, HeartHandshake, ShieldCheck, Leaf, Globe } from 'lucide-react';

export const AboutStoryView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Brand Story Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C85A32]">
            The Genesis of Nayaab
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#1A1918] leading-tight">
            Nayaab Means Rare, <br />
            Precious & One-of-a-Kind.
          </h1>
          <p className="text-sm sm:text-base text-[#5A524C] leading-relaxed">
            Founded in Jaipur, Nayaab was born out of a deep reverence for India’s living textile traditions. In an era dominated by fast synthetic fashion, we stand as guardians of slow, mindful artisanal creation.
          </p>
          <p className="text-sm text-[#5A524C] leading-relaxed">
            No two block-printed garments at Nayaab are identical. The subtle variations in color alignment, micro-stamps, and natural dye shades are the signature of genuine human hands—a badge of authenticity you wear with pride.
          </p>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80"
              alt="Nayaab Artisans at Work in Bagru"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Core Brand Pillars */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif-display text-3xl font-bold text-[#1A1918]">
            Our Four Guiding Pillars
          </h2>
          <p className="text-xs text-[#7A6B5D] mt-2">
            Every garment we craft honors the artisan, the wearer, and the earth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#EADFCF] shadow-sm space-y-3">
            <div className="p-3 bg-[#FAF7F2] rounded-lg w-fit text-[#C85A32]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#1A1918]">
              Direct Artisan Dignity
            </h3>
            <p className="text-xs text-[#7A6B5D] leading-relaxed">
              We work directly with over 500 artisan families across Rajasthan and Gujarat, eliminating middlemen to ensure fair wages and healthcare.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#EADFCF] shadow-sm space-y-3">
            <div className="p-3 bg-[#FAF7F2] rounded-lg w-fit text-[#1E2B3A]">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#1A1918]">
              Zero-Toxin Earth Dyes
            </h3>
            <p className="text-xs text-[#7A6B5D] leading-relaxed">
              We exclusively use natural indigo leaves, madder roots, and iron rust syrup to ensure zero toxic chemical water runoff.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#EADFCF] shadow-sm space-y-3">
            <div className="p-3 bg-[#FAF7F2] rounded-lg w-fit text-[#D4A359]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#1A1918]">
              100% Organic Cotton
            </h3>
            <p className="text-xs text-[#7A6B5D] leading-relaxed">
              Pure handloom Mulmul, Cambric, and Chanderi silk cotton fabrics that let your skin breathe effortlessly all day long.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#EADFCF] shadow-sm space-y-3">
            <div className="p-3 bg-[#FAF7F2] rounded-lg w-fit text-[#2C2A29]">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#1A1918]">
              Heritage Revival
            </h3>
            <p className="text-xs text-[#7A6B5D] leading-relaxed">
              Reviving rare heritage block prints like Dabu mud-resist and 14-step Ajrakh double-sided stamping for future generations.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
