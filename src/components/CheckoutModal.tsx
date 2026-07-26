import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Smartphone, Building, ArrowLeft, PackageCheck } from 'lucide-react';
import { CartItem } from '../types';

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
    phone: '9876543210',
    address: '42 Heritage Lane, C-Scheme',
    pincode: '302001',
    city: 'Jaipur',
    state: 'Rajasthan'
  });

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'cod'>('upi');
  const [upiId, setUpiId] = useState('priya@okicici');
  const [orderId, setOrderId] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const gstAmount = Math.round((subtotal - discountAmount) * 0.05);
  const shippingFee = subtotal >= 1999 ? 0 : 150;
  const grandTotal = subtotal - discountAmount + gstAmount + shippingFee;

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `NYB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep('success');
  };

  const handleFinish = () => {
    onOrderComplete();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#EADFCF] overflow-hidden my-auto">
        
        {/* Header */}
        <div className="p-5 bg-[#FAF7F2] border-b border-[#EADFCF] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {step === 'payment' && (
              <button 
                onClick={() => setStep('address')}
                className="p-1 rounded text-[#2C2A29] hover:bg-[#EAE0D3]"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <h3 className="font-serif-display text-xl font-bold text-[#1A1918]">
                {step === 'address' && '1. Shipping & Contact Details'}
                {step === 'payment' && '2. Choose Payment Method'}
                {step === 'success' && 'Order Placed Successfully!'}
              </h3>
              <p className="text-[11px] text-[#7A6B5D]">
                {step !== 'success' && 'Nayaab Express Doorstep Delivery Across India'}
              </p>
            </div>
          </div>

          {step !== 'success' && (
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full text-[#2C2A29] hover:bg-[#EAE0D3]"
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
                  <label className="block text-xs font-bold text-[#1A1918] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#EADFCF] rounded-lg px-3 py-2 text-xs text-[#1A1918] focus:border-[#C85A32]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1A1918] mb-1">Mobile Number (for Order Updates)</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#EADFCF] rounded-lg px-3 py-2 text-xs text-[#1A1918] focus:border-[#C85A32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A1918] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#EADFCF] rounded-lg px-3 py-2 text-xs text-[#1A1918] focus:border-[#C85A32]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A1918] mb-1">Street Address / Apartment / House No.</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#EADFCF] rounded-lg px-3 py-2 text-xs text-[#1A1918] focus:border-[#C85A32]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1A1918] mb-1">Pincode</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#EADFCF] rounded-lg px-3 py-2 text-xs text-[#1A1918] focus:border-[#C85A32]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1A1918] mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#EADFCF] rounded-lg px-3 py-2 text-xs text-[#1A1918] focus:border-[#C85A32]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1A1918] mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#EADFCF] rounded-lg px-3 py-2 text-xs text-[#1A1918] focus:border-[#C85A32]"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#EADFCF] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#7A6B5D]">Total Payable:</span>
                  <p className="font-serif-display text-lg font-bold text-[#C85A32]">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </p>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#C85A32] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#B04B26] transition shadow-md"
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
                    paymentMethod === 'upi' ? 'border-[#C85A32] bg-[#FAF7F2] ring-1 ring-[#C85A32]' : 'border-[#EADFCF] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-[#C85A32]" />
                    <div>
                      <p className="text-xs font-bold text-[#1A1918]">Instant UPI / GPay / PhonePe / Paytm</p>
                      <p className="text-[11px] text-[#7A6B5D]">Zero extra fees • Fast confirmation</p>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'upi'} readOnly className="accent-[#C85A32]" />
                </label>

                {paymentMethod === 'upi' && (
                  <div className="pl-8 pt-1">
                    <input
                      type="text"
                      placeholder="Enter VPA / UPI ID (e.g. mobile@upi)"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#EADFCF] rounded px-3 py-2 text-xs text-[#1A1918]"
                    />
                  </div>
                )}

                <label 
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                    paymentMethod === 'card' ? 'border-[#C85A32] bg-[#FAF7F2] ring-1 ring-[#C85A32]' : 'border-[#EADFCF] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-[#1E2B3A]" />
                    <div>
                      <p className="text-xs font-bold text-[#1A1918]">Credit / Debit Card (Visa, Mastercard, RuPay)</p>
                      <p className="text-[11px] text-[#7A6B5D]">Secured via 256-Bit SSL</p>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'card'} readOnly className="accent-[#C85A32]" />
                </label>

                <label 
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                    paymentMethod === 'cod' ? 'border-[#C85A32] bg-[#FAF7F2] ring-1 ring-[#C85A32]' : 'border-[#EADFCF] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-[#D4A359]" />
                    <div>
                      <p className="text-xs font-bold text-[#1A1918]">Cash on Delivery (COD)</p>
                      <p className="text-[11px] text-[#7A6B5D]">Pay cash upon arrival</p>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'cod'} readOnly className="accent-[#C85A32]" />
                </label>
              </div>

              {/* Final Order Review Box */}
              <div className="p-4 bg-[#F5F0EB] rounded-xl border border-[#EADFCF] text-xs space-y-1">
                <div className="flex justify-between text-[#1A1918] font-semibold">
                  <span>Order Items ({cartItems.length}):</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#C85A32] font-semibold">
                    <span>Discount Savings:</span>
                    <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#1A1918] font-bold text-sm pt-2 border-t border-[#EADFCF]">
                  <span>Total Amount Payable:</span>
                  <span className="font-serif-display text-lg text-[#C85A32]">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#C85A32] hover:bg-[#B04B26] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition shadow-lg flex items-center justify-center gap-2"
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

              <h2 className="font-serif-display text-2xl font-bold text-[#1A1918]">
                Thank You for Celebrating Indian Handblock Heritage!
              </h2>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#EADFCF] max-w-md mx-auto text-xs text-left space-y-2">
                <div className="flex justify-between border-b border-[#EADFCF] pb-2">
                  <span className="text-[#7A6B5D]">Order Reference:</span>
                  <strong className="text-[#C85A32] tracking-wider">{orderId}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A6B5D]">Deliver To:</span>
                  <span className="font-semibold text-[#1A1918]">{formData.fullName} ({formData.city})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A6B5D]">Estimated Delivery:</span>
                  <span className="font-semibold text-[#2E7D32]">3-5 Business Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A6B5D]">Total Paid:</span>
                  <strong className="text-[#1A1918]">₹{grandTotal.toLocaleString('en-IN')}</strong>
                </div>
              </div>

              <p className="text-xs text-[#7A6B5D] max-w-sm mx-auto">
                A confirmation SMS and email with live tracking details have been dispatched to <strong>{formData.phone}</strong>.
              </p>

              <button
                onClick={handleFinish}
                className="px-8 py-3 bg-[#1E2B3A] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#C85A32] transition shadow-md"
              >
                Continue Exploring Nayaab
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
