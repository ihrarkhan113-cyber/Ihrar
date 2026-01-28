export interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  currency: string;
  rating: number;
  category: string;
  brand: string;
  shortDescription: string;
  fullDescription: string;
  specs: string[];
  pros: string[];
  cons: string[];
  images: string[];
  affiliateUrl: string;
  updatedAt: Date;
}

export interface ProductFilters {
  category?: string;
  search?: string;
  sortBy: 'price_asc' | 'price_desc' | 'rating_desc';
}
