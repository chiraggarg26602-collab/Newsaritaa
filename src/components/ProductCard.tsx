import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Star, Check } from 'lucide-react';
import { Product, Size } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: Size) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onQuickView
}) => {
  const [selectedSize, setSelectedSize] = useState<Size>(product.sizes[0] || 'M');
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div 
      className="group relative bg-white rounded-xl border border-[#E8D4E5] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div 
        className="relative aspect-[3/4] bg-[#F5EBF3] overflow-hidden cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        <img
          src={product.primaryImage}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.bestseller && (
            <span className="bg-[#5C385A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
              Bestseller
            </span>
          )}
          {product.newArrival && (
            <span className="bg-[#6B4168] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
              New Arrival
            </span>
          )}
          <span className="bg-[#FAF4F8]/90 backdrop-blur-sm text-[#2B1A2A] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded border border-[#E8D4E5]">
            {product.craftType}
          </span>
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition shadow-md z-10 ${
            isWishlisted
              ? 'bg-[#6B4168] text-white'
              : 'bg-white/80 text-[#2B1A2A] hover:bg-white hover:text-[#6B4168]'
          }`}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Hover Button */}
        <div className="absolute inset-x-0 bottom-3 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden sm:block">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full bg-[#FAF4F8]/95 text-[#2B1A2A] text-xs font-semibold py-2 rounded-md hover:bg-[#5C385A] hover:text-white transition shadow-lg flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#7D5E7B] mb-1">
            <span className="font-bold tracking-wide uppercase text-[11px] text-[#6B4168]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 bg-[#FAF4F8] px-1.5 py-0.5 rounded border border-[#E8D4E5]">
              <Star className="w-3 h-3 fill-[#D4A359] text-[#D4A359]" />
              <span className="font-bold text-[#2B1A2A]">{product.rating}</span>
              <span className="text-[10px] text-[#7D5E7B]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif-display text-base font-semibold text-[#2B1A2A] hover:text-[#6B4168] transition line-clamp-1 cursor-pointer"
            title={product.title}
          >
            {product.title}
          </h3>

          <p className="text-xs text-[#7D5E7B] line-clamp-1 mt-0.5 font-normal">
            {product.subtitle}
          </p>

          {/* Size Selector Chips */}
          <div className="mt-3 flex items-center gap-1.5">
            <span className="text-[11px] font-medium text-[#7D5E7B] mr-1">Size:</span>
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`w-6 h-6 rounded text-[11px] font-semibold transition flex items-center justify-center border ${
                  selectedSize === size
                    ? 'bg-[#5C385A] text-white border-[#5C385A]'
                    : 'bg-[#FAF4F8] text-[#2B1A2A] border-[#E8D4E5] hover:border-[#6B4168]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="mt-4 pt-3 border-t border-[#F5EBF3] flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif-display text-lg font-bold text-[#2B1A2A]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-[#9E869B] line-through font-normal">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {product.discountPct && (
              <span className="text-[10px] text-[#6B4168] font-bold">
                Save {product.discountPct}% OFF
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            disabled={isAdded}
            className={`px-3 py-2 rounded-md text-xs font-semibold tracking-wider transition flex items-center gap-1.5 shadow-sm ${
              isAdded
                ? 'bg-[#2E7D32] text-white'
                : 'bg-[#6B4168] hover:bg-[#5C385A] text-white'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added!
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
