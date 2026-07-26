import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { WishlistItem, Product, Size } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: WishlistItem[];
  onRemoveFromWishlist: (product: Product) => void;
  onMoveToCart: (product: Product, size: Size) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveFromWishlist,
  onMoveToCart
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="bg-[#FAF4F8] w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-[#E8D4E5]">
        
        {/* Header */}
        <div className="p-5 bg-white border-b border-[#E8D4E5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#6B4168] fill-current" />
            <h3 className="font-serif-display text-xl font-bold text-[#2B1A2A]">
              Saved Wishlist ({wishlistItems.length})
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-[#2B1A2A] hover:bg-[#FAF4F8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-[#E8D4E5]">
          {wishlistItems.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <Heart className="w-12 h-12 text-[#6B4168] mx-auto opacity-40" />
              <h4 className="font-serif-display text-xl font-bold text-[#2B1A2A]">
                Your Wishlist is Empty
              </h4>
              <p className="text-xs text-[#7D5E7B] max-w-xs mx-auto">
                Explore handblock printed Anarkali suits, Ajrakh sarees, and cotton dresses to save your favorite artisanal designs.
              </p>
            </div>
          ) : (
            wishlistItems.map(({ product }) => (
              <div key={product.id} className="pt-4 first:pt-0 flex gap-4">
                <img
                  src={product.primaryImage}
                  alt={product.title}
                  className="w-20 h-24 object-cover rounded-lg border border-[#E8D4E5] bg-white shrink-0"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 className="font-serif-display text-sm font-semibold text-[#2B1A2A] line-clamp-1">
                        {product.title}
                      </h4>
                      <button
                        onClick={() => onRemoveFromWishlist(product)}
                        className="text-[#9E869B] hover:text-[#6B4168] p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#7D5E7B]">
                      Craft: {product.craftType} • Category: {product.category}
                    </p>

                    <p className="font-serif-display text-base font-bold text-[#2B1A2A] mt-1">
                      ₹{product.price.toLocaleString('en-IN')}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onMoveToCart(product, product.sizes[0] || 'M');
                      onRemoveFromWishlist(product);
                    }}
                    className="mt-2 w-full py-1.5 bg-[#5C385A] hover:bg-[#6B4168] text-white text-xs font-semibold rounded transition flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Move to Bag
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
