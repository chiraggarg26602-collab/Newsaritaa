import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone, Heart, ShieldCheck } from 'lucide-react';
import { SaritaaLogo } from './SaritaaLogo';

interface FooterProps {
  onNavClick: (tab: 'home' | 'shop' | 'craft' | 'about') => void;
  onCategoryClick: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onCategoryClick }) => {
  return (
    <footer className="bg-[#4A2848] text-[#E8D4E5] pt-16 pb-8 border-t border-[#6B4168]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="cursor-pointer inline-block" onClick={() => onNavClick('home')}>
              <SaritaaLogo variant="plum" size="lg" showSubtext={true} />
            </div>
            <p className="text-xs text-[#D8C2D5] leading-relaxed max-w-sm pt-2">
              Artisanal Handblock Printed Textiles & Authentic Rajasthani Ethnic Fashion. Handcrafted kurtas and handcrafted textiles from Kuchaman City, Nagaur, Rajasthan.
            </p>
            <div className="pt-2 text-xs space-y-2 text-[#D8C2D5]">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4A359]" /> Artisan Studio & HQ: Kuchaman City, Nagaur, Rajasthan - 341508
              </p>
              <p className="flex items-center gap-2 font-medium">
                <Mail className="w-3.5 h-3.5 text-[#D4A359]" /> <a href="mailto:sneha@saritaa.in" className="hover:text-white underline decoration-[#D4A359]">sneha@saritaa.in</a>
              </p>
              <p className="flex items-center gap-2 font-medium">
                <Phone className="w-3.5 h-3.5 text-[#D4A359]" /> <a href="tel:+918865986040" className="hover:text-white underline decoration-[#D4A359]">+91 88659 86040</a> (Mon-Sat, 10 AM - 7 PM IST)
              </p>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="font-serif-display text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-[#6B4168] pb-1">
              Shop Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {['Kurta Sets', 'Kurtas', 'Cotton Dresses', 'Suits', 'Kaftans'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      onNavClick('shop');
                      onCategoryClick(cat);
                    }}
                    className="hover:text-white transition"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Print Heritage */}
          <div>
            <h4 className="font-serif-display text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-[#6B4168] pb-1">
              Rajasthani Craft
            </h4>
            <ul className="space-y-2 text-xs">
              {['Bagru Handblock', 'Sanganeri Fine Print', 'Ajrakh Geometric', 'Dabu Mud-Resist', 'Kalamkari Art'].map((craft) => (
                <li key={craft}>
                  <button
                    onClick={() => onNavClick('craft')}
                    className="hover:text-white transition"
                  >
                    {craft}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif-display text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-[#6B4168] pb-1">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs text-[#D8C2D5]">
              <li><button onClick={() => onNavClick('about')} className="hover:text-white">Our Story & Artisans</button></li>
              <li><button onClick={() => onNavClick('craft')} className="hover:text-white">Natural Dye & Wash Care Guide</button></li>
              <li><span>Shipping & Express Delivery</span></li>
              <li><span>7-Day Easy Returns</span></li>
              <li><a href="mailto:sneha@saritaa.in" className="hover:text-white">Email: sneha@saritaa.in</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#6B4168] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C5B0C2]">
          <p>© 2024 SARITAA CLOTHING STORE (saritaa.in). All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-white">
            <span className="text-[11px] text-[#C5B0C2]">Connect With Us:</span>
            <Instagram className="w-4 h-4 cursor-pointer hover:text-[#D4A359] transition" />
            <Facebook className="w-4 h-4 cursor-pointer hover:text-[#D4A359] transition" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-[#D4A359] transition" />
          </div>
        </div>

      </div>
    </footer>
  );
};
