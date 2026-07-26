import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, Tag, ShieldCheck, Check } from 'lucide-react';
import { CartItem, Size } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, size: Size, quantity: number) => void;
  onRemoveItem: (productId: string, size: Size) => void;
  onCheckout: (appliedDiscount: number, discountCode: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; pct: number } | null>(null);
  const [promoError, setPromoError] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const freeShippingThreshold = 999;
  const progressPct = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const discountAmount = appliedPromo ? Math.round(subtotal * (appliedPromo.pct / 100)) : 0;
  const gstAmount = Math.round((subtotal - discountAmount) * 0.05); // 5% GST on Indian garments
  const shippingFee = subtotal >= freeShippingThreshold || cartItems.length === 0 ? 0 : 150;
  const grandTotal = subtotal - discountAmount + gstAmount + shippingFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (promoInput.trim().toUpperCase() === 'SARITAA10' || promoInput.trim().toUpperCase() === 'NAYAAB10') {
      setAppliedPromo({ code: 'SARITAA10', pct: 10 });
      setPromoInput('');
    } else {
      setPromoError('Invalid coupon code. Try SARITAA10');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="bg-[#FAF4F8] w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-[#E8D4E5]">
        
        {/* Drawer Header */}
        <div className="p-5 bg-white border-b border-[#E8D4E5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#6B4168]" />
            <h3 className="font-serif-display text-xl font-bold text-[#2B1A2A]">
              Your Shopping Bag ({cartItems.reduce((a, c) => a + c.quantity, 0)})
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-[#2B1A2A] hover:bg-[#FAF4F8] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="p-4 bg-[#F5EBF3] border-b border-[#E8D4E5] text-xs">
          {subtotal >= freeShippingThreshold ? (
            <div className="flex items-center gap-2 text-[#2E7D32] font-bold">
              <Truck className="w-4 h-4 shrink-0" />
              <span>Congratulations! You earned <strong>FREE Express Shipping</strong> across India!</span>
            </div>
          ) : (
            <div>
              <div className="flex justify-between text-[#2B1A2A] font-semibold mb-1.5">
                <span>Add ₹{amountNeededForFreeShipping.toLocaleString('en-IN')} more for FREE Express Delivery</span>
                <span>{Math.round(progressPct)}%</span>
              </div>
              <div className="w-full h-2 bg-[#E8D4E5] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#6B4168] rounded-full transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-[#E8D4E5]">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#6B4168] mx-auto opacity-50" />
              <h4 className="font-serif-display text-xl font-bold text-[#2B1A2A]">
                Your Shopping Bag is Empty
              </h4>
              <p className="text-xs text-[#7D5E7B] max-w-xs mx-auto">
                Explore our handblock printed Bagru, Sanganeri, and Ajrakh collections at saritaa.in.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#6B4168] text-white text-xs font-bold rounded-md hover:bg-[#5C385A] transition"
              >
                Start Shopping Now
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.product.id}-${item.selectedSize}`} className="pt-4 first:pt-0 flex gap-4">
                <img
                  src={item.product.primaryImage}
                  alt={item.product.title}
                  className="w-20 h-24 object-cover rounded-lg border border-[#E8D4E5] bg-white shrink-0"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 className="font-serif-display text-sm font-semibold text-[#2B1A2A] line-clamp-1">
                        {item.product.title}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                        className="text-[#9E869B] hover:text-[#6B4168] p-1 transition"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#7D5E7B]">
                      Craft: {item.product.craftType} • Size: <strong className="text-[#2B1A2A]">{item.selectedSize}</strong>
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-[#E8D4E5] rounded bg-white text-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                        className="px-2 py-0.5 text-[#2B1A2A] hover:bg-[#FAF4F8]"
                      >
                        -
                      </button>
                      <span className="px-2 font-bold text-[#2B1A2A]">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                        className="px-2 py-0.5 text-[#2B1A2A] hover:bg-[#FAF4F8]"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-serif-display text-base font-bold text-[#2B1A2A]">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary & Checkout Actions */}
        {cartItems.length > 0 && (
          <div className="p-5 bg-white border-t border-[#E8D4E5] space-y-3">
            
            {/* Promo Code Input */}
            <div>
              {appliedPromo ? (
                <div className="p-2 bg-[#F2E5F2] rounded border border-[#E2CDDF] flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 font-bold text-[#6B4168]">
                    <Tag className="w-3.5 h-3.5" /> Code "{appliedPromo.code}" Applied ({appliedPromo.pct}% OFF)
                  </span>
                  <button 
                    onClick={() => setAppliedPromo(null)}
                    className="text-[10px] text-[#2B1A2A] underline hover:text-[#6B4168]"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Coupon Code (e.g. SARITAA10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="flex-1 bg-[#FAF4F8] border border-[#E8D4E5] rounded px-3 py-1.5 text-xs text-[#2B1A2A] focus:outline-none focus:border-[#6B4168]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#5C385A] text-white text-xs font-bold rounded hover:bg-[#6B4168] transition"
                  >
                    Apply
                  </button>
                </form>
              )}
              {promoError && <p className="text-[10px] text-[#6B4168] font-bold mt-1">{promoError}</p>}
            </div>

            {/* Bill Breakdown */}
            <div className="space-y-1.5 text-xs text-[#7D5E7B] pt-2 border-t border-[#F5EBF3]">
              <div className="flex justify-between">
                <span>Bag Subtotal</span>
                <span className="font-semibold text-[#2B1A2A]">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#6B4168] font-semibold">
                  <span>Coupon Discount</span>
                  <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>GST Tax (5%)</span>
                <span>₹{gstAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charges</span>
                <span>{shippingFee === 0 ? <strong className="text-[#2E7D32]">FREE</strong> : `₹${shippingFee}`}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#2B1A2A] pt-2 border-t border-[#E8D4E5]">
                <span>Total Payable</span>
                <span className="font-serif-display text-xl text-[#6B4168]">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Proceed Button */}
            <button
              onClick={() => {
                onCheckout(discountAmount, appliedPromo?.code || '');
              }}
              className="w-full py-3.5 bg-[#6B4168] hover:bg-[#5C385A] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Proceed to Secure Checkout</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#7D5E7B]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
              <span>100% Encrypted UPI, Cards & NetBanking</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
