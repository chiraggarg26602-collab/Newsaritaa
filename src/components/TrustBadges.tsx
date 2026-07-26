import React from 'react';
import { Leaf, Droplets, Users, ShieldCheck, Heart } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: <Leaf className="w-6 h-6 text-[#6B4168]" />,
      title: '100% Pure Organic Cotton',
      description: 'Handwoven breathable Mulmul & Chanderi fabrics soft on skin'
    },
    {
      icon: <Droplets className="w-6 h-6 text-[#5C385A]" />,
      title: 'Natural Eco Dyes',
      description: 'Zero toxic chemicals — Indigo, Madder, Harda & Pomegranate extracts'
    },
    {
      icon: <Users className="w-6 h-6 text-[#D4A359]" />,
      title: 'Direct Artisan Support',
      description: 'Fair trade wages empowering Rajasthan artisan families'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#4A2848]" />,
      title: 'Saritaa Guarantee',
      description: 'Authentic handblock quality backed by saritaa.in'
    }
  ];

  return (
    <section className="bg-[#FAF4F8] py-10 border-b border-[#E8D4E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => (
            <div 
              key={idx}
              className="bg-[#F5EBF3] p-5 rounded-xl border border-[#E2CDDF] flex items-start gap-4 hover:shadow-md transition group"
            >
              <div className="p-3 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform shrink-0">
                {badge.icon}
              </div>
              <div>
                <h4 className="font-serif-display text-base font-bold text-[#2B1A2A]">
                  {badge.title}
                </h4>
                <p className="text-xs text-[#7D5E7B] mt-1 leading-relaxed">
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
