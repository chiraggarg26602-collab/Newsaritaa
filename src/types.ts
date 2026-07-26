export type Category = 
  | 'All' 
  | 'Kurta Sets' 
  | 'Sarees' 
  | 'Cotton Dresses' 
  | 'Suits' 
  | 'Kaftans' 
  | 'Dupattas';

export type CraftType = 
  | 'Bagru' 
  | 'Sanganeri' 
  | 'Ajrakh' 
  | 'Dabu' 
  | 'Kalamkari';

export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  category: Category;
  craftType: CraftType;
  rating: number;
  reviewCount: number;
  primaryImage: string;
  hoverImage: string;
  additionalImages: string[];
  sizes: Size[];
  colors: string[];
  description: string;
  fabric: string;
  washCare: string;
  artisanStory: string;
  inStock: boolean;
  bestseller?: boolean;
  newArrival?: boolean;
  discountPct?: number;
}

export interface CartItem {
  product: Product;
  selectedSize: Size;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface FilterState {
  category: Category;
  craft: CraftType | 'All';
  minPrice: number;
  maxPrice: number;
  selectedSize: Size | 'All';
  sortBy: 'featured' | 'price-low' | 'price-high' | 'newest' | 'rating';
  searchQuery: string;
  inStockOnly: boolean;
}

export interface CraftStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

export interface CraftDetail {
  id: CraftType;
  name: string;
  origin: string;
  shortDesc: string;
  fullDesc: string;
  dyeType: string;
  heroImage: string;
  processSteps: CraftStep[];
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  productTitle: string;
}
