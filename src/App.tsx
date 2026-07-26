import React, { useState } from 'react';
import { Product, CartItem, WishlistItem, Size } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { ProductCard } from './components/ProductCard';
import { ProductCatalog } from './components/ProductCatalog';
import { QuickViewModal } from './components/QuickViewModal';
import { CraftStorySection } from './components/CraftStorySection';
import { LookbookSection } from './components/LookbookSection';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OurCraftView } from './components/OurCraftView';
import { AboutStoryView } from './components/AboutStoryView';
import { Footer } from './components/Footer';
import { NotificationToast } from './components/NotificationToast';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'shop' | 'craft' | 'about'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFromHome, setSelectedCategoryFromHome] = useState<string>('All');
  
  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  // Drawer & Modal States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  // Checkout calculations passed from cart
  const [checkoutDiscount, setCheckoutDiscount] = useState(0);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Add to Cart
  const handleAddToCart = (product: Product, size: Size, quantity: number = 1) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id && item.selectedSize === size);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, selectedSize: size, quantity }];
    });
    showToast(`Added ${product.title} (Size: ${size}) to your Shopping Bag!`);
  };

  // Update Quantity
  const handleUpdateCartQuantity = (productId: string, size: Size, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(productId, size);
      return;
    }
    setCartItems(prev => prev.map(item => {
      if (item.product.id === productId && item.selectedSize === size) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  // Remove Cart Item
  const handleRemoveCartItem = (productId: string, size: Size) => {
    setCartItems(prev => prev.filter(item => !(item.product.id === productId && item.selectedSize === size)));
    showToast('Item removed from Shopping Bag');
  };

  // Wishlist Toggle
  const handleToggleWishlist = (product: Product) => {
    setWishlistItems(prev => {
      const exists = prev.some(item => item.product.id === product.id);
      if (exists) {
        showToast(`Removed ${product.title} from Wishlist`);
        return prev.filter(item => item.product.id !== product.id);
      } else {
        showToast(`Saved ${product.title} to Wishlist`);
        return [...prev, { product, addedAt: new Date().toISOString() }];
      }
    });
  };

  const handleCheckoutTrigger = (appliedDiscount: number) => {
    setCheckoutDiscount(appliedDiscount);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    setCartItems([]);
    showToast('Your order has been placed successfully on saritaa.in!');
  };

  const wishlistIds = wishlistItems.map(item => item.product.id);

  return (
    <div className="min-h-screen bg-[#FAF4F8] flex flex-col font-sans text-[#2B1A2A] antialiased">
      {/* Sticky Top Header Navigation */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        setIsCartOpen={setIsCartOpen}
        setIsWishlistOpen={setIsWishlistOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        
        {/* TAB 1: HOME PAGE */}
        {currentTab === 'home' && (
          <div>
            <Hero 
              onExploreClick={() => setCurrentTab('shop')} 
              onCraftClick={() => setCurrentTab('craft')} 
            />

            <TrustBadges />

            {/* Featured Bestsellers Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B4168]">
                    Curated saritaa.in Bestsellers
                  </span>
                  <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#2B1A2A] mt-1">
                    Patron Favorite Outfits
                  </h2>
                  <p className="text-xs text-[#7D5E7B] mt-1">
                    Most loved handblock-printed Anarkalis, kurta sets, and dresses across India.
                  </p>
                </div>

                <button
                  onClick={() => setCurrentTab('shop')}
                  className="px-6 py-2.5 bg-[#5C385A] text-white text-xs font-bold rounded-md hover:bg-[#6B4168] transition shadow-sm flex items-center gap-2 group shrink-0"
                >
                  <span>View All Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Featured Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {PRODUCTS.filter(p => p.bestseller).slice(0, 8).map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                    isWishlisted={wishlistIds.includes(product.id)}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            </section>

            {/* Craft Story Breakdown */}
            <CraftStorySection onLearnMoreClick={() => setCurrentTab('craft')} />

            {/* Lookbook & Newsletter */}
            <LookbookSection />
          </div>
        )}

        {/* TAB 2: SHOP / CATALOG PAGE */}
        {currentTab === 'shop' && (
          <ProductCatalog
            products={PRODUCTS}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onQuickView={(p) => setQuickViewProduct(p)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategoryFromHome={selectedCategoryFromHome}
          />
        )}

        {/* TAB 3: OUR CRAFT */}
        {currentTab === 'craft' && (
          <OurCraftView 
            onShopCraftClick={(craft) => {
              setCurrentTab('shop');
            }} 
          />
        )}

        {/* TAB 4: ABOUT STORY */}
        {currentTab === 'about' && (
          <AboutStoryView />
        )}

      </main>

      {/* Footer */}
      <Footer 
        onNavClick={setCurrentTab}
        onCategoryClick={(cat) => {
          setSelectedCategoryFromHome(cat);
          setCurrentTab('shop');
        }}
      />

      {/* Drawers and Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleCheckoutTrigger}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveFromWishlist={handleToggleWishlist}
        onMoveToCart={(product, size) => handleAddToCart(product, size, 1)}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        discountAmount={checkoutDiscount}
        onOrderComplete={handleOrderComplete}
      />

      <NotificationToast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
