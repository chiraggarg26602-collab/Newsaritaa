import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: 'home' | 'shop' | 'craft' | 'about') => void;
  onCategoryClick: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onCategoryClick }) => {
  return (
    <footer className="bg-[#1A1918] text-[#D5C9BD] pt-16 pb-8 border-t border-[#33312F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-serif-display text-3xl font-bold tracking-[0.25em] text-white">
              NAYAAB
            </h2>
            <p className="text-xs text-[#A09386] leading-relaxed max-w-sm">
              Artisanal Handblock Printed Textiles & Authentic Indian Ethnic Fashion. Hand-stamped with organic vegetable dyes by Jaipur and Kutch master craftsmen.
            </p>
            <div className="pt-2 text-xs space-y-1.5 text-[#A09386]">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C85A32]" /> Artisan Studio: C-Scheme, Jaipur, Rajasthan - 302001
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C85A32]" /> care@nayaabtextiles.in
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C85A32]" /> +91 98765 43210 (Mon-Sat, 10 AM - 7 PM IST)
              </p>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="font-serif-display text-base font-bold text-white uppercase tracking-wider mb-4">
              Shop Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {['Kurta Sets', 'Sarees', 'Cotton Dresses', 'Suits', 'Kaftans', 'Dupattas'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      onNavClick('shop');
                      onCategoryClick(cat);
                    }}
                    className="hover:text-[#C85A32] transition"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Print Heritage */}
          <div>
            <h4 className="font-serif-display text-base font-bold text-white uppercase tracking-wider mb-4">
              Print Craft Heritage
            </h4>
            <ul className="space-y-2 text-xs">
              {['Bagru Handblock', 'Sanganeri Fine Print', 'Ajrakh Geometric', 'Dabu Mud-Resist', 'Kalamkari Art'].map((craft) => (
                <li key={craft}>
                  <button
                    onClick={() => onNavClick('craft')}
                    className="hover:text-[#C85A32] transition"
                  >
                    {craft}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif-display text-base font-bold text-white uppercase tracking-wider mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs text-[#A09386]">
              <li><button onClick={() => onNavClick('about')} className="hover:text-white">Our Story & Artisans</button></li>
              <li><button onClick={() => onNavClick('craft')} className="hover:text-white">Natural Dye & Wash Care Guide</button></li>
              <li><span>Shipping & Express Delivery</span></li>
              <li><span>7-Day Hassle Free Returns</span></li>
              <li><span>Bulk & Custom Orders</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#33312F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#807469]">
          <p>© 2026 NAYAAB TEXTILES INDIA PRIVATE LIMITED. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-white">
            <span className="text-[11px] text-[#807469]">Follow Our Journey:</span>
            <Instagram className="w-4 h-4 cursor-pointer hover:text-[#C85A32] transition" />
            <Facebook className="w-4 h-4 cursor-pointer hover:text-[#C85A32] transition" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-[#C85A32] transition" />
          </div>
        </div>

      </div>
    </footer>
  );
};
