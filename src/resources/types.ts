// src/resources/types.ts
export interface Product {
  id: string;
  name: string;
  category: 'Electronics' | 'Clothing' | 'Food' | 'Books' | 'Other';
  price: number;
  stockQuantity: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  lastRestocked: Date;
  salesCount: number;
  rating: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductMetrics {
  totalProducts: number;
  activeProducts: number;
  lowStockProducts: number;
  outOfStockProducts: number;
  totalValue: number;
  averageRating: number;
  topSellingCategory: string;
  totalSales: number;
}
