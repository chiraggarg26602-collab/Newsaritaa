import React, { useState } from 'react';
import { Instagram, Heart, Sparkles, Send, CheckCircle } from 'lucide-react';

export const LookbookSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const lookbookImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      handle: '@diya.roy',
      tag: 'Bagru Dabu Anarkali Set',
      likes: '1.2k'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
      handle: '@ananya_style',
      tag: 'Ajrakh Double-Sided Silk Saree',
      likes: '2.4k'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=80',
      handle: '@meera.textiles',
      tag: 'Sanganeri Floral Tiered Midi',
      likes: '980'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
      handle: '@jaipur.crafts',
      tag: 'Dabu Mud-Resist Suit Set',
      likes: '1.8k'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <section className="bg-[#FAF7F2] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Instagram Lookbook Gallery */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-[#C85A32] uppercase tracking-[0.2em] flex items-center justify-center gap-1.5">
              <Instagram className="w-4 h-4" /> #NayaabPatrons Lookbook
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1A1918] mt-2">
              Styled by Handblock Fashion Lovers
            </h2>
            <p className="text-xs text-[#7A6B5D] mt-2">
              Tag @NayaabTextiles on Instagram to get featured in our seasonal heritage lookbook.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {lookbookImages.map((item) => (
              <div 
                key={item.id}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-[#F5F0EB] shadow-sm border border-[#EADFCF]"
              >
                <img
                  src={item.image}
                  alt={item.tag}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                  <p className="text-xs font-bold">{item.handle}</p>
                  <p className="text-[11px] text-[#D5C9BD]">{item.tag}</p>
                  <div className="flex items-center gap-1 text-[10px] text-[#D4A359] mt-1 font-semibold">
                    <Heart className="w-3 h-3 fill-current" /> {item.likes} Likes
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Sign Up Banner */}
        <div className="bg-[#1E2B3A] rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-[#D4A359]/20">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A359]/20 text-[#D4A359] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Special Artisan Welcome Offer
            </span>

            <h3 className="font-serif-display text-3xl sm:text-4xl font-bold">
              Enjoy 10% OFF Your First Nayaab Order
            </h3>

            <p className="text-xs sm:text-sm text-[#D5C9BD] max-w-xl mx-auto leading-relaxed">
              Subscribe to receive exclusive preview access to limited-edition Bagru and Ajrakh artisan drops, traditional wash care guides, and heritage stories.
            </p>

            {isSubscribed ? (
              <div className="p-4 bg-[#C85A32] rounded-xl text-white max-w-md mx-auto text-center animate-fadeIn">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-[#D4A359]" />
                <h4 className="font-serif-display text-lg font-bold">Welcome to the Nayaab Circle!</h4>
                <p className="text-xs mt-1">Use coupon code <strong className="bg-black/30 px-2 py-0.5 rounded tracking-widest text-[#D4A359]">NAYAAB10</strong> at checkout for 10% off your purchase.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-xs text-white placeholder-white/60 focus:outline-none focus:border-[#D4A359]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#C85A32] hover:bg-[#B04B26] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <p className="text-[10px] text-[#A0B0C0] pt-1">
              *We respect your privacy. Unsubscribe anytime with one click.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
