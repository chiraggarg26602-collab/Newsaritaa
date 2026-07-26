import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, X, RotateCcw, ChevronDown, Search } from 'lucide-react';
import { Product, Category, CraftType, Size, FilterState } from '../types';
import { ProductCard } from './ProductCard';
import { CATEGORIES, CRAFT_TYPES } from '../data/products';

interface ProductCatalogProps {
  products: Product[];
  onAddToCart: (product: Product, size: Size) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onQuickView: (product: Product) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategoryFromHome?: string;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onQuickView,
  searchQuery,
  setSearchQuery,
  selectedCategoryFromHome
}) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: (selectedCategoryFromHome as Category) || 'All',
    craft: 'All',
    minPrice: 0,
    maxPrice: 10000,
    selectedSize: 'All',
    sortBy: 'featured',
    searchQuery: searchQuery,
    inStockOnly: false
  });

  const [visibleCount, setVisibleCount] = useState(12);

  // Sync external search query
  React.useEffect(() => {
    setFilters(prev => ({ ...prev, searchQuery }));
  }, [searchQuery]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Category Filter
      if (filters.category !== 'All' && p.category !== filters.category) return false;
      
      // Craft Filter
      if (filters.craft !== 'All' && p.craftType !== filters.craft) return false;

      // Price Filter
      if (p.price < filters.minPrice || p.price > filters.maxPrice) return false;

      // Size Filter
      if (filters.selectedSize !== 'All' && !p.sizes.includes(filters.selectedSize as Size)) return false;

      // Search Query
      if (filters.searchQuery.trim() !== '') {
        const query = filters.searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesSub = p.subtitle.toLowerCase().includes(query);
        const matchesCraft = p.craftType.toLowerCase().includes(query);
        const matchesCategory = p.category.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSub && !matchesCraft && !matchesCategory && !matchesDesc) return false;
      }

      // Stock
      if (filters.inStockOnly && !p.inStock) return false;

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-low') return a.price - b.price;
      if (filters.sortBy === 'price-high') return b.price - a.price;
      if (filters.sortBy === 'newest') return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      return (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0);
    });
  }, [products, filters]);

  const handleResetFilters = () => {
    setFilters({
      category: 'All',
      craft: 'All',
      minPrice: 0,
      maxPrice: 10000,
      selectedSize: 'All',
      sortBy: 'featured',
      searchQuery: '',
      inStockOnly: false
    });
    setSearchQuery('');
  };

  const activeFilterCount = (filters.category !== 'All' ? 1 : 0) +
    (filters.craft !== 'All' ? 1 : 0) +
    (filters.selectedSize !== 'All' ? 1 : 0) +
    (filters.searchQuery ? 1 : 0) +
    (filters.maxPrice < 10000 ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B4168]">
          Exclusive saritaa.in Collection
        </span>
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1A2A] mt-2">
          Rajasthani Handblock Apparel
        </h2>
        <p className="text-sm text-[#7D5E7B] mt-2 leading-relaxed">
          Explore authentic Bagru, Sanganeri, and Ajrakh garments handcrafted on 100% organic cotton fabrics by Rajasthan master artisans.
        </p>
      </div>

      {/* Top Filter Bar Controls */}
      <div className="bg-white p-4 rounded-xl border border-[#E8D4E5] shadow-sm mb-8 flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Mobile Filter Toggle & Quick Category Pills */}
        <div className="flex items-center gap-3 overflow-x-auto py-1 scrollbar-none w-full md:w-auto">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="md:hidden px-4 py-2 bg-[#5C385A] text-white text-xs font-bold rounded-lg flex items-center gap-2 shrink-0"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          {/* Quick Category Chips */}
          <div className="hidden md:flex items-center gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilters(prev => ({ ...prev, category: cat }))}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition whitespace-nowrap ${
                  filters.category === cat
                    ? 'bg-[#6B4168] text-white shadow-sm'
                    : 'bg-[#FAF4F8] text-[#2B1A2A] hover:bg-[#F2E5F2] border border-[#E8D4E5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Sort By Dropdown & Total Count */}
        <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto text-xs text-[#7D5E7B]">
          <span>
            Showing <strong className="text-[#2B1A2A]">{filteredProducts.length}</strong> Products
          </span>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#2B1A2A] hidden sm:inline">Sort by:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
              className="bg-[#FAF4F8] border border-[#E8D4E5] rounded-lg px-3 py-1.5 text-xs font-medium text-[#2B1A2A] focus:outline-none focus:border-[#6B4168]"
            >
              <option value="featured">Featured / Bestseller</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">New Arrivals</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Layout Grid (Sidebar + Catalog) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Desktop Sidebar Filters */}
        <div className="hidden md:block md:col-span-1 space-y-6 bg-white p-5 rounded-xl border border-[#E8D4E5] h-fit sticky top-24">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8D4E5]">
            <h3 className="font-serif-display text-lg font-bold text-[#2B1A2A] flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#6B4168]" /> Filter Options
            </h3>
            {activeFilterCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="text-[11px] font-bold text-[#6B4168] hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            )}
          </div>

          {/* Craft Filter */}
          <div>
            <h4 className="text-xs font-bold text-[#2B1A2A] uppercase tracking-wider mb-2.5">
              Print Craft Heritage
            </h4>
            <div className="space-y-1.5">
              {CRAFT_TYPES.map(craft => (
                <label 
                  key={craft}
                  className="flex items-center gap-2.5 text-xs text-[#2B1A2A] cursor-pointer hover:text-[#6B4168] transition"
                >
                  <input
                    type="radio"
                    name="craftFilter"
                    checked={filters.craft === craft}
                    onChange={() => setFilters(prev => ({ ...prev, craft: craft as any }))}
                    className="accent-[#6B4168]"
                  />
                  <span>{craft === 'All' ? 'All Craft Techniques' : `${craft} Handblock`}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className="pt-4 border-t border-[#F5EBF3]">
            <h4 className="text-xs font-bold text-[#2B1A2A] uppercase tracking-wider mb-2.5">
              Select Garment Size
            </h4>
            <div className="flex flex-wrap gap-2">
              {(['All', 'S', 'M', 'L', 'XL', 'XXL'] as const).map(size => (
                <button
                  key={size}
                  onClick={() => setFilters(prev => ({ ...prev, selectedSize: size }))}
                  className={`px-3 py-1 rounded text-xs font-semibold border transition ${
                    filters.selectedSize === size
                      ? 'bg-[#5C385A] text-white border-[#5C385A]'
                      : 'bg-[#FAF4F8] text-[#2B1A2A] border-[#E8D4E5] hover:border-[#6B4168]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="pt-4 border-t border-[#F5EBF3]">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-[#2B1A2A] uppercase tracking-wider">
                Max Price: ₹{filters.maxPrice.toLocaleString('en-IN')}
              </h4>
            </div>
            <input
              type="range"
              min="1500"
              max="10000"
              step="250"
              value={filters.maxPrice}
              onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
              className="w-full accent-[#6B4168]"
            />
            <div className="flex justify-between text-[11px] text-[#7D5E7B] mt-1 font-medium">
              <span>₹1,500</span>
              <span>₹10,000+</span>
            </div>
          </div>

          {/* Stock Filter Toggle */}
          <div className="pt-4 border-t border-[#F5EBF3]">
            <label className="flex items-center gap-2 text-xs text-[#2B1A2A] cursor-pointer">
              <input
                type="checkbox"
                checked={filters.inStockOnly}
                onChange={(e) => setFilters(prev => ({ ...prev, inStockOnly: e.target.checked }))}
                className="accent-[#6B4168] rounded"
              />
              <span className="font-semibold">In Stock Items Only</span>
            </label>
          </div>
        </div>

        {/* Product Catalog Grid */}
        <div className="md:col-span-3">
          
          {/* Active Search & Filter Tags */}
          {activeFilterCount > 0 && (
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#7D5E7B] font-semibold">Active Filters:</span>
              {filters.category !== 'All' && (
                <span className="bg-[#F2E5F2] text-[#2B1A2A] text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-medium">
                  Category: {filters.category}
                  <X 
                    className="w-3 h-3 cursor-pointer hover:text-[#6B4168]" 
                    onClick={() => setFilters(p => ({ ...p, category: 'All' }))}
                  />
                </span>
              )}
              {filters.craft !== 'All' && (
                <span className="bg-[#F2E5F2] text-[#2B1A2A] text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-medium">
                  Craft: {filters.craft}
                  <X 
                    className="w-3 h-3 cursor-pointer hover:text-[#6B4168]" 
                    onClick={() => setFilters(p => ({ ...p, craft: 'All' }))}
                  />
                </span>
              )}
              {filters.searchQuery && (
                <span className="bg-[#F2E5F2] text-[#2B1A2A] text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-medium">
                  Search: "{filters.searchQuery}"
                  <X 
                    className="w-3 h-3 cursor-pointer hover:text-[#6B4168]" 
                    onClick={() => {
                      setFilters(p => ({ ...p, searchQuery: '' }));
                      setSearchQuery('');
                    }}
                  />
                </span>
              )}
            </div>
          )}

          {/* Empty State */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-xl border border-[#E8D4E5] my-8">
              <Search className="w-12 h-12 text-[#6B4168] mx-auto mb-3 opacity-60" />
              <h3 className="font-serif-display text-2xl font-bold text-[#2B1A2A]">
                No Matching Block Print Products Found
              </h3>
              <p className="text-xs text-[#7D5E7B] mt-2 max-w-md mx-auto">
                We couldn't find any products matching your current filter choices or search term. Try resetting your filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-5 px-6 py-2.5 bg-[#6B4168] text-white text-xs font-semibold rounded-md hover:bg-[#5C385A] transition"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <>
              {/* Product Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.slice(0, visibleCount).map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onToggleWishlist={onToggleWishlist}
                    isWishlisted={wishlistIds.includes(product.id)}
                    onQuickView={onQuickView}
                  />
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < filteredProducts.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleCount(prev => prev + 12)}
                    className="px-8 py-3 bg-[#5C385A] text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#6B4168] transition shadow-md"
                  >
                    Load More Artisanal Products
                  </button>
                </div>
              )}
            </>
          )}
        </div>

      </div>

      {/* Mobile Drawer Filter Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end md:hidden">
          <div className="w-80 bg-[#FAF4F8] h-full p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8D4E5]">
              <h3 className="font-serif-display text-lg font-bold text-[#2B1A2A]">
                Filters & Refinements
              </h3>
              <button 
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 rounded text-[#2B1A2A] hover:bg-[#F2E5F2]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter */}
            <div>
              <h4 className="text-xs font-bold text-[#2B1A2A] uppercase tracking-wider mb-2">
                Category
              </h4>
              <div className="space-y-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFilters(prev => ({ ...prev, category: cat }));
                      setIsMobileFilterOpen(false);
                    }}
                    className={`block w-full text-left text-xs py-1.5 px-3 rounded ${
                      filters.category === cat ? 'bg-[#6B4168] text-white font-bold' : 'text-[#2B1A2A]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Craft Filter */}
            <div>
              <h4 className="text-xs font-bold text-[#2B1A2A] uppercase tracking-wider mb-2">
                Craft Heritage
              </h4>
              <div className="space-y-2">
                {CRAFT_TYPES.map(craft => (
                  <button
                    key={craft}
                    onClick={() => {
                      setFilters(prev => ({ ...prev, craft: craft as any }));
                      setIsMobileFilterOpen(false);
                    }}
                    className={`block w-full text-left text-xs py-1.5 px-3 rounded ${
                      filters.craft === craft ? 'bg-[#6B4168] text-white font-bold' : 'text-[#2B1A2A]'
                    }`}
                  >
                    {craft}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8D4E5] flex items-center justify-between">
              <button
                onClick={handleResetFilters}
                className="text-xs text-[#6B4168] font-bold underline"
              >
                Reset All
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="px-6 py-2 bg-[#5C385A] text-white text-xs font-bold rounded"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
