import React from 'react';
import { Sparkles, Users, HeartHandshake, ShieldCheck, Leaf, Globe, Mail } from 'lucide-react';
import { SaritaaLogo } from './SaritaaLogo';

export const AboutStoryView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Brand Story Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-5">
          <div className="mb-2">
            <SaritaaLogo variant="light" size="lg" showSubtext={true} />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B4168]">
            The Story of saritaa.in • Established 2024
          </span>

          <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#2B1A2A] leading-tight">
            Celebrating the Flow of <br />
            <span className="text-[#6B4168] italic font-normal">Rajasthani Handblock Artistry</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5C455B] leading-relaxed">
            Founded in 2024 in Jaipur, <strong>saritaa.in</strong> (Saritaa Clothing Store) was born out of a passion for preserving Rajasthan’s timeless handblock printing traditions. 'Sarita' signifies the graceful flow of a river—embodying the fluid elegance of natural vegetable dyes and hand-carved wooden block stamping.
          </p>

          <p className="text-sm text-[#5C455B] leading-relaxed">
            Every garment created at <strong>saritaa.in</strong> is hand-stamped with organic vegetable pigments, natural mud-resist Dabu paste, and fine Sanganeri floral motifs. No two outfits are identical—the subtle micro-variations bear the authentic mark of real artisan craftsmanship.
          </p>

          <div className="pt-2 p-4 bg-[#F5EBF3] rounded-xl border border-[#E2CDDF] flex items-center gap-3 text-xs text-[#2B1A2A]">
            <Mail className="w-5 h-5 text-[#6B4168] shrink-0" />
            <div>
              <p className="font-bold">Contact Founder & Care Team:</p>
              <a href="mailto:sneha@saritaa.in" className="text-[#6B4168] font-bold hover:underline">
                sneha@saritaa.in
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl aspect-[4/3] relative">
            <img
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80"
              alt="saritaa.in Rajasthani Artisans at Work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A2848]/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-xs font-semibold">
                © 2024 SARITAA CLOTHING STORE (saritaa.in) • Master Artisans at Bagru & Sanganer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Brand Pillars */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif-display text-3xl font-bold text-[#2B1A2A]">
            Our Four Guiding Pillars
          </h2>
          <p className="text-xs text-[#7D5E7B] mt-2">
            Every outfit from saritaa.in honors the artisan, the wearer, and the earth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#E8D4E5] shadow-sm space-y-3">
            <div className="p-3 bg-[#F2E5F2] rounded-lg w-fit text-[#6B4168]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#2B1A2A]">
              Direct Artisan Dignity
            </h3>
            <p className="text-xs text-[#7D5E7B] leading-relaxed">
              We empower artisan families across Rajasthan, ensuring fair livelihoods and preserving ancient block carving techniques.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8D4E5] shadow-sm space-y-3">
            <div className="p-3 bg-[#F2E5F2] rounded-lg w-fit text-[#5C385A]">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#2B1A2A]">
              Natural Organic Pigments
            </h3>
            <p className="text-xs text-[#7D5E7B] leading-relaxed">
              We exclusively use natural indigo leaves, madder roots, and iron rust syrup to ensure eco-friendly, chemical-free creations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8D4E5] shadow-sm space-y-3">
            <div className="p-3 bg-[#F2E5F2] rounded-lg w-fit text-[#D4A359]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#2B1A2A]">
              100% Breathable Cotton
            </h3>
            <p className="text-xs text-[#7D5E7B] leading-relaxed">
              Pure handloom Mulmul, Cambric, and Chanderi silk cotton fabrics that offer supreme comfort all day long.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8D4E5] shadow-sm space-y-3">
            <div className="p-3 bg-[#F2E5F2] rounded-lg w-fit text-[#2B1A2A]">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#2B1A2A]">
              saritaa.in Quality Standard
            </h3>
            <p className="text-xs text-[#7D5E7B] leading-relaxed">
              Carefully quality-checked and packaged in Jaipur before shipping directly to your doorstep.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
