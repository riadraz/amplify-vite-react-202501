// src/resources/productData.ts
import { Product, ProductMetrics } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Laptop Pro X',
    category: 'Electronics',
    price: 1299.99,
    stockQuantity: 45,
    status: 'In Stock',
    lastRestocked: new Date('2024-01-15'),
    salesCount: 123,
    rating: 4.5,
    isActive: true,
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Wireless Earbuds',
    category: 'Electronics',
    price: 89.99,
    stockQuantity: 5,
    status: 'Low Stock',
    lastRestocked: new Date('2024-01-10'),
    salesCount: 256,
    rating: 4.8,
    isActive: true,
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2024-01-10')
  },
  // Add more seed data...
];

export const calculateProductMetrics = (): ProductMetrics => {
  const metrics: ProductMetrics = {
    totalProducts: products.length,
    activeProducts: products.filter(p => p.isActive).length,
    lowStockProducts: products.filter(p => p.status === 'Low Stock').length,
    outOfStockProducts: products.filter(p => p.status === 'Out of Stock').length,
    totalValue: products.reduce((sum, p) => sum + (p.price * p.stockQuantity), 0),
    averageRating: products.reduce((sum, p) => sum + p.rating, 0) / products.length,
    topSellingCategory: calculateTopSellingCategory(),
    totalSales: products.reduce((sum, p) => sum + p.salesCount, 0)
  };
  
  return metrics;
};

const calculateTopSellingCategory = (): string => {
  const categorySales = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + product.salesCount;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(categorySales)
    .sort(([,a], [,b]) => b - a)[0][0];
};
