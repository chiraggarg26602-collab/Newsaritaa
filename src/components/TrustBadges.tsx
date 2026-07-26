import React from 'react';
import { Leaf, Droplets, Users, ShieldCheck, Heart } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: <Leaf className="w-6 h-6 text-[#C85A32]" />,
      title: '100% Pure Organic Cotton',
      description: 'Handwoven breathable Mulmul & Chanderi fabrics soft on skin'
    },
    {
      icon: <Droplets className="w-6 h-6 text-[#1E2B3A]" />,
      title: 'Natural Eco Dyes',
      description: 'Zero toxic chemicals — Indigo, Madder, Harda & Pomegranate extracts'
    },
    {
      icon: <Users className="w-6 h-6 text-[#D4A359]" />,
      title: 'Direct Artisan Support',
      description: 'Fair trade wages empowering Jaipur & Kutch artisan families'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#2C2A29]" />,
      title: 'Sustainable Heritage',
      description: 'Slow artisanal fashion designed to last generations'
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-10 border-b border-[#EADFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => (
            <div 
              key={idx}
              className="bg-[#F5F0EB] p-5 rounded-xl border border-[#EADFCF] flex items-start gap-4 hover:shadow-md transition group"
            >
              <div className="p-3 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform shrink-0">
                {badge.icon}
              </div>
              <div>
                <h4 className="font-serif-display text-base font-bold text-[#1A1918]">
                  {badge.title}
                </h4>
                <p className="text-xs text-[#7A6B5D] mt-1 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
