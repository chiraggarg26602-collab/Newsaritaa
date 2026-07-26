import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Smartphone, Building, ArrowLeft, PackageCheck, Mail } from 'lucide-react';
import { CartItem } from '../types';
import { SaritaaLogo } from './SaritaaLogo';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  discountAmount: number;
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  discountAmount,
  onOrderComplete
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'address' | 'payment' | 'success'>('address');
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '9214484540',
    address: '12 Fort View Road, Subhash Marg',
    pincode: '341508',
    city: 'Kuchaman City',
    state: 'Rajasthan'
  });

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'cod'>('upi');
  const [upiId, setUpiId] = useState('priya@okicici');
  const [orderId, setOrderId] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const gstAmount = Math.round((subtotal - discountAmount) * 0.05);
  const shippingFee = subtotal >= 999 ? 0 : 99;
  const grandTotal = subtotal - discountAmount + gstAmount + shippingFee;

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `SRT2024-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep('success');
  };

  const handleFinish = () => {
    onOrderComplete();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E8D4E5] overflow-hidden my-auto">
        
        {/* Header */}
        <div className="p-5 bg-[#5C385A] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            {step === 'payment' && (
              <button 
                onClick={() => setStep('address')}
                className="p-1 rounded text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-display text-lg font-bold text-[#F2E5F2]">SARITAA CLOTHING STORE</span>
                <span className="text-[10px] bg-white/20 text-[#F2E5F2] px-2 py-0.5 rounded font-mono">saritaa.in</span>
              </div>
              <h3 className="text-sm font-semibold text-[#E8D5E5]">
                {step === 'address' && '1. Shipping & Contact Details'}
                {step === 'payment' && '2. Choose Payment Method'}
                {step === 'success' && 'Order Placed Successfully! (2024)'}
              </h3>
            </div>
          </div>

          {step !== 'success' && (
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full text-white/80 hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Address Form */}
          {step === 'address' && (
            <form onSubmit={handleAddressSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#2B1A2A] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#FAF4F8] border border-[#E8D4E5] rounded-lg px-3 py-2 text-xs text-[#2B1A2A] focus:border-[#6B4168]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2B1A2A] mb-1">Mobile Number (SMS Updates)</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF4F8] border border-[#E8D4E5] rounded-lg px-3 py-2 text-xs text-[#2B1A2A] focus:border-[#6B4168]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2B1A2A] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FAF4F8] border border-[#E8D4E5] rounded-lg px-3 py-2 text-xs text-[#2B1A2A] focus:border-[#6B4168]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2B1A2A] mb-1">Street Address / House No.</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#FAF4F8] border border-[#E8D4E5] rounded-lg px-3 py-2 text-xs text-[#2B1A2A] focus:border-[#6B4168]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#2B1A2A] mb-1">Pincode</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full bg-[#FAF4F8] border border-[#E8D4E5] rounded-lg px-3 py-2 text-xs text-[#2B1A2A] focus:border-[#6B4168]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2B1A2A] mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#FAF4F8] border border-[#E8D4E5] rounded-lg px-3 py-2 text-xs text-[#2B1A2A] focus:border-[#6B4168]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2B1A2A] mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full bg-[#FAF4F8] border border-[#E8D4E5] rounded-lg px-3 py-2 text-xs text-[#2B1A2A] focus:border-[#6B4168]"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8D4E5] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#7D5E7B]">Total Payable:</span>
                  <p className="font-serif-display text-lg font-bold text-[#6B4168]">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </p>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#6B4168] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#5C385A] transition shadow-md"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Payment Method */}
          {step === 'payment' && (
            <form onSubmit={handlePaymentSubmit} className="space-y-5">
              <div className="space-y-2">
                <label 
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                    paymentMethod === 'upi' ? 'border-[#6B4168] bg-[#FAF4F8] ring-1 ring-[#6B4168]' : 'border-[#E8D4E5] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-[#6B4168]" />
                    <div>
                      <p className="text-xs font-bold text-[#2B1A2A]">Instant UPI / GPay / PhonePe / Paytm</p>
                      <p className="text-[11px] text-[#7D5E7B]">Fast & secure payment on saritaa.in</p>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'upi'} readOnly className="accent-[#6B4168]" />
                </label>

                {paymentMethod === 'upi' && (
                  <div className="pl-8 pt-1">
                    <input
                      type="text"
                      placeholder="Enter VPA / UPI ID (e.g. mobile@upi)"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="w-full bg-[#FAF4F8] border border-[#E8D4E5] rounded px-3 py-2 text-xs text-[#2B1A2A]"
                    />
                  </div>
                )}

                <label 
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                    paymentMethod === 'card' ? 'border-[#6B4168] bg-[#FAF4F8] ring-1 ring-[#6B4168]' : 'border-[#E8D4E5] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-[#5C385A]" />
                    <div>
                      <p className="text-xs font-bold text-[#2B1A2A]">Credit / Debit Card (Visa, Mastercard, RuPay)</p>
                      <p className="text-[11px] text-[#7D5E7B]">256-Bit Encrypted</p>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'card'} readOnly className="accent-[#6B4168]" />
                </label>

                <label 
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                    paymentMethod === 'cod' ? 'border-[#6B4168] bg-[#FAF4F8] ring-1 ring-[#6B4168]' : 'border-[#E8D4E5] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-[#D4A359]" />
                    <div>
                      <p className="text-xs font-bold text-[#2B1A2A]">Cash on Delivery (COD)</p>
                      <p className="text-[11px] text-[#7D5E7B]">Pay cash upon delivery</p>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'cod'} readOnly className="accent-[#6B4168]" />
                </label>
              </div>

              {/* Final Order Review Box */}
              <div className="p-4 bg-[#F5EBF3] rounded-xl border border-[#E2CDDF] text-xs space-y-1">
                <div className="flex justify-between text-[#2B1A2A] font-semibold">
                  <span>Order Items ({cartItems.length}):</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#6B4168] font-semibold">
                    <span>Discount Savings:</span>
                    <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#2B1A2A] font-bold text-sm pt-2 border-t border-[#E8D4E5]">
                  <span>Total Amount Payable:</span>
                  <span className="font-serif-display text-lg text-[#6B4168]">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#6B4168] hover:bg-[#5C385A] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition shadow-lg flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" /> Place Order Now (₹{grandTotal.toLocaleString('en-IN')})
              </button>
            </form>
          )}

          {/* STEP 3: Success Screen */}
          {step === 'success' && (
            <div className="text-center space-y-4 py-4 animate-fadeIn">
              <div className="w-16 h-16 bg-[#2E7D32]/10 text-[#2E7D32] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="my-2">
                <SaritaaLogo variant="light" size="md" showSubtext={true} />
              </div>

              <h2 className="font-serif-display text-2xl font-bold text-[#2B1A2A]">
                Thank You for Shopping at saritaa.in!
              </h2>

              <div className="p-4 bg-[#FAF4F8] rounded-xl border border-[#E8D4E5] max-w-md mx-auto text-xs text-left space-y-2">
                <div className="flex justify-between border-b border-[#E8D4E5] pb-2">
                  <span className="text-[#7D5E7B]">Order Number:</span>
                  <strong className="text-[#6B4168] tracking-wider">{orderId}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7D5E7B]">Customer Name:</span>
                  <span className="font-semibold text-[#2B1A2A]">{formData.fullName} ({formData.city})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7D5E7B]">Estimated Delivery:</span>
                  <span className="font-semibold text-[#2E7D32]">3-5 Business Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7D5E7B]">Support Email:</span>
                  <span className="font-semibold text-[#6B4168]">sneha@saritaa.in</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-[#E8D4E5]">
                  <span className="text-[#7D5E7B]">Total Paid:</span>
                  <strong className="text-[#2B1A2A]">₹{grandTotal.toLocaleString('en-IN')}</strong>
                </div>
              </div>

              <p className="text-xs text-[#7D5E7B] max-w-sm mx-auto">
                Order details & dispatch tracking sent to <strong>{formData.phone}</strong> and support inquiries handled at <a href="mailto:sneha@saritaa.in" className="text-[#6B4168] font-bold underline">sneha@saritaa.in</a>.
              </p>

              <button
                onClick={handleFinish}
                className="px-8 py-3 bg-[#5C385A] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#6B4168] transition shadow-md"
              >
                Continue Shopping at saritaa.in
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
