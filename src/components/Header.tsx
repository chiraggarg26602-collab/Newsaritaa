import React, { useState } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles,
  MapPin,
  ShieldCheck,
  Truck
} from 'lucide-react';
import { CartItem, WishlistItem } from '../types';

interface HeaderProps {
  currentTab: 'home' | 'shop' | 'craft' | 'about';
  setCurrentTab: (tab: 'home' | 'shop' | 'craft' | 'about') => void;
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  setIsCartOpen: (open: boolean) => void;
  setIsWishlistOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onCategorySelect?: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  cartItems,
  wishlistItems,
  setIsCartOpen,
  setIsWishlistOpen,
  searchQuery,
  setSearchQuery,
  onCategorySelect
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  const handleNavClick = (tab: 'home' | 'shop' | 'craft' | 'about') => {
    setCurrentTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EADFCF] transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-[#1E2B3A] text-[#FAF7F2] text-xs py-2 px-4 font-medium tracking-wider text-center flex items-center justify-center gap-3">
        <span className="hidden sm:inline-flex items-center gap-1.5 text-[#D4A359]">
          <Truck className="w-3.5 h-3.5" /> Express Shipping
        </span>
        <span className="hidden sm:inline text-[#D4A359]">|</span>
        <span>Complimentary Shipping Across India on Orders Above ₹1,999</span>
        <span className="hidden md:inline text-[#D4A359]">|</span>
        <span className="hidden md:inline-flex items-center gap-1 text-[#D4A359]">
          <Sparkles className="w-3.5 h-3.5" /> 100% Authentic Artisanal Handblock Prints
        </span>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Mobile Menu Toggle & Brand Tagline on Desktop */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#2C2A29] hover:bg-[#EAE0D3] transition"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
              <button
                onClick={() => handleNavClick('home')}
                className={`relative py-2 transition-colors ${
                  currentTab === 'home' 
                    ? 'text-[#C85A32] font-semibold' 
                    : 'text-[#2C2A29] hover:text-[#C85A32]'
                }`}
              >
                Home
                {currentTab === 'home' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C85A32] rounded-full" />
                )}
              </button>

              <button
                onClick={() => handleNavClick('shop')}
                className={`relative py-2 transition-colors ${
                  currentTab === 'shop' 
                    ? 'text-[#C85A32] font-semibold' 
                    : 'text-[#2C2A29] hover:text-[#C85A32]'
                }`}
              >
                Shop Collection
                {currentTab === 'shop' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C85A32] rounded-full" />
                )}
              </button>

              <button
                onClick={() => handleNavClick('craft')}
                className={`relative py-2 transition-colors ${
                  currentTab === 'craft' 
                    ? 'text-[#C85A32] font-semibold' 
                    : 'text-[#2C2A29] hover:text-[#C85A32]'
                }`}
              >
                Our Craft & Heritage
                {currentTab === 'craft' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C85A32] rounded-full" />
                )}
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`relative py-2 transition-colors ${
                  currentTab === 'about' 
                    ? 'text-[#C85A32] font-semibold' 
                    : 'text-[#2C2A29] hover:text-[#C85A32]'
                }`}
              >
                Our Story
                {currentTab === 'about' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C85A32] rounded-full" />
                )}
              </button>
            </nav>
          </div>

          {/* Center: Brand Logo */}
          <div className="text-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <h1 className="font-serif-display text-3xl sm:text-4xl tracking-[0.25em] font-semibold text-[#1A1918] hover:text-[#C85A32] transition">
              NAYAAB
            </h1>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8C7A6B] font-medium -mt-1 hidden sm:block">
              Artisanal Block Prints • Jaipur
            </p>
          </div>

          {/* Right Controls: Search, Wishlist, Cart */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search Input Box */}
            <div className="relative hidden md:block w-48 lg:w-64">
              <input
                type="text"
                placeholder="Search Bagru, Sarees, Kurta..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  setIsSearchFocused(true);
                  if (currentTab !== 'shop') setCurrentTab('shop');
                }}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full bg-[#F5F0EB] border border-[#D8CBBF] rounded-full py-1.5 pl-9 pr-4 text-xs text-[#2C2A29] placeholder-[#8C7A6B] focus:outline-none focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] transition"
              />
              <Search className="w-3.5 h-3.5 text-[#8C7A6B] absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C7A6B] hover:text-[#2C2A29]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Mobile Search Icon */}
            <button
              onClick={() => {
                setCurrentTab('shop');
              }}
              className="md:hidden p-2 rounded-full text-[#2C2A29] hover:bg-[#EAE0D3] transition"
              title="Search Catalog"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Icon Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 rounded-full text-[#2C2A29] hover:bg-[#EAE0D3] transition"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C85A32] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-[#1E2B3A] text-white rounded-full hover:bg-[#C85A32] transition shadow-sm flex items-center gap-2 group"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-semibold px-1 hidden sm:inline">₹{
                cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0).toLocaleString('en-IN')
              }</span>
              {cartCount > 0 && (
                <span className="bg-[#C85A32] group-hover:bg-[#1E2B3A] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#EADFCF] px-4 pt-3 pb-6 animate-fadeIn">
          {/* Mobile Search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search Kurta Sets, Ajrakh, Sarees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                if (currentTab !== 'shop') setCurrentTab('shop');
              }}
              className="w-full bg-[#F5F0EB] border border-[#D8CBBF] rounded-lg py-2 pl-9 pr-4 text-xs text-[#2C2A29] focus:outline-none focus:border-[#C85A32]"
            />
            <Search className="w-4 h-4 text-[#8C7A6B] absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <div className="flex flex-col gap-2 font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center justify-between p-3 rounded-lg text-left text-sm ${
                currentTab === 'home' ? 'bg-[#EAE0D3] text-[#C85A32] font-semibold' : 'text-[#2C2A29]'
              }`}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </button>

            <button
              onClick={() => handleNavClick('shop')}
              className={`flex items-center justify-between p-3 rounded-lg text-left text-sm ${
                currentTab === 'shop' ? 'bg-[#EAE0D3] text-[#C85A32] font-semibold' : 'text-[#2C2A29]'
              }`}
            >
              <span>Shop Collection</span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </button>

            <button
              onClick={() => handleNavClick('craft')}
              className={`flex items-center justify-between p-3 rounded-lg text-left text-sm ${
                currentTab === 'craft' ? 'bg-[#EAE0D3] text-[#C85A32] font-semibold' : 'text-[#2C2A29]'
              }`}
            >
              <span>Our Craft & Heritage</span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`flex items-center justify-between p-3 rounded-lg text-left text-sm ${
                currentTab === 'about' ? 'bg-[#EAE0D3] text-[#C85A32] font-semibold' : 'text-[#2C2A29]'
              }`}
            >
              <span>Our Story</span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-[#EADFCF] flex items-center justify-around text-xs text-[#8C7A6B]">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#C85A32]" /> 100% Pure Cotton</span>
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#C85A32]" /> Jaipur Artisans</span>
          </div>
        </div>
      )}
    </header>
  );
};
