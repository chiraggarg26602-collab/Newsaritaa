import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, Truck, ShieldCheck, Feather, Sparkles, Check, Info } from 'lucide-react';
import { Product, Size } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: Size, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.primaryImage);
  const [selectedSize, setSelectedSize] = useState<Size>(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'fabric' | 'wash' | 'artisan'>('desc');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const images = product.additionalImages && product.additionalImages.length > 0 
    ? product.additionalImages 
    : [product.primaryImage, product.hoverImage];

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-[#E8D4E5] overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#FAF4F8] text-[#2B1A2A] rounded-full hover:bg-[#6B4168] hover:text-white transition shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="md:w-1/2 p-6 bg-[#FAF4F8] flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E8D4E5]">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white border border-[#E8D4E5] shadow-sm mb-4">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <span className="absolute top-3 left-3 bg-[#6B4168] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
              {product.craftType} Handblock
            </span>
          </div>

          {/* Thumbnails */}
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-20 rounded-lg overflow-hidden border-2 shrink-0 transition ${
                  selectedImage === img ? 'border-[#6B4168] ring-2 ring-[#6B4168]/20' : 'border-[#E8D4E5] opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Category & Ratings */}
            <div className="flex items-center justify-between text-xs text-[#7D5E7B] mb-2">
              <span className="font-bold uppercase tracking-widest text-[#6B4168]">
                {product.category}
              </span>
              <div className="flex items-center gap-1.5 bg-[#FAF4F8] px-2 py-0.5 rounded border border-[#E8D4E5]">
                <Star className="w-3.5 h-3.5 fill-[#D4A359] text-[#D4A359]" />
                <span className="font-bold text-[#2B1A2A]">{product.rating}</span>
                <span className="text-[11px] text-[#7D5E7B]">({product.reviewCount} Reviews)</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <h2 className="font-serif-display text-2xl font-bold text-[#2B1A2A] leading-snug">
              {product.title}
            </h2>
            <p className="text-xs text-[#7D5E7B] mt-1 font-normal">
              {product.subtitle}
            </p>

            {/* Price Box */}
            <div className="mt-4 p-3 bg-[#F5EBF3] rounded-lg border border-[#E8D4E5] flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif-display text-2xl font-bold text-[#2B1A2A]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-[#9E869B] line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-[#6B4168] font-bold mt-0.5">
                  Inclusive of all taxes • Free Shipping Across India (saritaa.in)
                </p>
              </div>
              {product.discountPct && (
                <span className="bg-[#6B4168] text-white text-xs font-bold px-2.5 py-1 rounded">
                  {product.discountPct}% OFF
                </span>
              )}
            </div>

            {/* Size Selector */}
            <div className="mt-5">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#2B1A2A]">
                  Select Garment Size
                </label>
                <button
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-xs text-[#6B4168] font-bold flex items-center gap-1 hover:underline"
                >
                  <Info className="w-3.5 h-3.5" /> Size Guide
                </button>
              </div>

              <div className="flex gap-2.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-lg text-xs font-bold border transition flex items-center justify-center ${
                      selectedSize === size
                        ? 'bg-[#5C385A] text-white border-[#5C385A] shadow-sm'
                        : 'bg-[#FAF4F8] text-[#2B1A2A] border-[#E8D4E5] hover:border-[#6B4168]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4 flex items-center gap-4">
              <label className="text-xs font-bold uppercase tracking-wider text-[#2B1A2A]">
                Quantity:
              </label>
              <div className="flex items-center border border-[#E8D4E5] rounded-lg bg-[#FAF4F8] overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-sm font-bold text-[#2B1A2A] hover:bg-[#F2E5F2]"
                >
                  -
                </button>
                <span className="px-4 py-1 text-xs font-bold text-[#2B1A2A]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-sm font-bold text-[#2B1A2A] hover:bg-[#F2E5F2]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Tabs for Details, Fabric, Wash Care */}
            <div className="mt-6 border-t border-[#E8D4E5] pt-4">
              <div className="flex border-b border-[#E8D4E5] text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('desc')}
                  className={`pb-2 mr-4 border-b-2 transition ${
                    activeTab === 'desc' ? 'border-[#6B4168] text-[#6B4168]' : 'border-transparent text-[#7D5E7B]'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('fabric')}
                  className={`pb-2 mr-4 border-b-2 transition ${
                    activeTab === 'fabric' ? 'border-[#6B4168] text-[#6B4168]' : 'border-transparent text-[#7D5E7B]'
                  }`}
                >
                  Fabric Specs
                </button>
                <button
                  onClick={() => setActiveTab('wash')}
                  className={`pb-2 mr-4 border-b-2 transition ${
                    activeTab === 'wash' ? 'border-[#6B4168] text-[#6B4168]' : 'border-transparent text-[#7D5E7B]'
                  }`}
                >
                  Wash Care
                </button>
                <button
                  onClick={() => setActiveTab('artisan')}
                  className={`pb-2 border-b-2 transition ${
                    activeTab === 'artisan' ? 'border-[#6B4168] text-[#6B4168]' : 'border-transparent text-[#7D5E7B]'
                  }`}
                >
                  Artisan Note
                </button>
              </div>

              <div className="mt-3 text-xs text-[#5C455B] leading-relaxed min-h-[60px]">
                {activeTab === 'desc' && <p>{product.description}</p>}
                {activeTab === 'fabric' && <p><strong>Material:</strong> {product.fabric}</p>}
                {activeTab === 'wash' && <p><strong>Care:</strong> {product.washCare}</p>}
                {activeTab === 'artisan' && <p><strong>Craft Story:</strong> {product.artisanStory}</p>}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 pt-4 border-t border-[#E8D4E5] flex items-center gap-3">
            <button
              onClick={handleAdd}
              disabled={isAdded}
              className={`flex-1 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 ${
                isAdded ? 'bg-[#2E7D32] text-white' : 'bg-[#6B4168] hover:bg-[#5C385A] text-white'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" /> Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" /> Add to Shopping Bag
                </>
              )}
            </button>

            <button
              onClick={() => onToggleWishlist(product)}
              className={`p-3.5 rounded-lg border transition ${
                isWishlisted
                  ? 'bg-[#6B4168] text-white border-[#6B4168]'
                  : 'bg-[#FAF4F8] text-[#2B1A2A] border-[#E8D4E5] hover:bg-[#F2E5F2]'
              }`}
              title="Save to Wishlist"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

      </div>

      {/* Size Guide Modal Sub-Overlay */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-60 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-xl max-w-md w-full border border-[#E8D4E5]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif-display text-lg font-bold text-[#2B1A2A]">
                Garment Size Chart (Inches)
              </h3>
              <button onClick={() => setShowSizeGuide(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF4F8] border-b border-[#E8D4E5]">
                  <th className="p-2">Size</th>
                  <th className="p-2">Bust</th>
                  <th className="p-2">Waist</th>
                  <th className="p-2">Hip</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5EBF3]">
                <tr><td className="p-2 font-bold">S</td><td className="p-2">36"</td><td className="p-2">32"</td><td className="p-2">40"</td></tr>
                <tr><td className="p-2 font-bold">M</td><td className="p-2">38"</td><td className="p-2">34"</td><td className="p-2">42"</td></tr>
                <tr><td className="p-2 font-bold">L</td><td className="p-2">40"</td><td className="p-2">36"</td><td className="p-2">44"</td></tr>
                <tr><td className="p-2 font-bold">XL</td><td className="p-2">42"</td><td className="p-2">38"</td><td className="p-2">46"</td></tr>
                <tr><td className="p-2 font-bold">XXL</td><td className="p-2">44"</td><td className="p-2">40"</td><td className="p-2">48"</td></tr>
              </tbody>
            </table>
            <p className="text-[11px] text-[#7D5E7B] mt-3">
              *All garments come with a 1.5-inch internal fabric margin for custom tailoring.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
