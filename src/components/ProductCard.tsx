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
      className="group relative bg-white rounded-xl border border-[#EADFCF] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div 
        className="relative aspect-[3/4] bg-[#F5F0EB] overflow-hidden cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.primaryImage}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.bestseller && (
            <span className="bg-[#1E2B3A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
              Bestseller
            </span>
          )}
          {product.newArrival && (
            <span className="bg-[#C85A32] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
              New Arrival
            </span>
          )}
          <span className="bg-[#FAF7F2]/90 backdrop-blur-sm text-[#1A1918] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded border border-[#EADFCF]">
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
              ? 'bg-[#C85A32] text-white'
              : 'bg-white/80 text-[#2C2A29] hover:bg-white hover:text-[#C85A32]'
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
            className="w-full bg-[#FAF7F2]/95 text-[#1A1918] text-xs font-semibold py-2 rounded-md hover:bg-[#1E2B3A] hover:text-white transition shadow-lg flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#8C7A6B] mb-1">
            <span className="font-medium tracking-wide uppercase text-[11px] text-[#C85A32]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 bg-[#FAF7F2] px-1.5 py-0.5 rounded border border-[#EADFCF]">
              <Star className="w-3 h-3 fill-[#D4A359] text-[#D4A359]" />
              <span className="font-bold text-[#1A1918]">{product.rating}</span>
              <span className="text-[10px] text-[#8C7A6B]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif-display text-base font-semibold text-[#1A1918] hover:text-[#C85A32] transition line-clamp-1 cursor-pointer"
            title={product.title}
          >
            {product.title}
          </h3>

          <p className="text-xs text-[#7A6B5D] line-clamp-1 mt-0.5 font-normal">
            {product.subtitle}
          </p>

          {/* Size Selector Chips */}
          <div className="mt-3 flex items-center gap-1.5">
            <span className="text-[11px] font-medium text-[#8C7A6B] mr-1">Size:</span>
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`w-6 h-6 rounded text-[11px] font-semibold transition flex items-center justify-center border ${
                  selectedSize === size
                    ? 'bg-[#1E2B3A] text-white border-[#1E2B3A]'
                    : 'bg-[#FAF7F2] text-[#2C2A29] border-[#EADFCF] hover:border-[#C85A32]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="mt-4 pt-3 border-t border-[#F5F0EB] flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif-display text-lg font-bold text-[#1A1918]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-[#9E8E81] line-through font-normal">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {product.discountPct && (
              <span className="text-[10px] text-[#C85A32] font-semibold">
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
                : 'bg-[#C85A32] hover:bg-[#B04B26] text-white'
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
