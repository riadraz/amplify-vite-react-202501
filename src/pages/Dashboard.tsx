/*
// src/pages/Dashboard.tsx
const Dashboard = () => {
    return (
      <div>
        <h2>Dashboard</h2>
        { Add your dashboard content here }
      </div>
    );
  };
  
  export default Dashboard;
  */

  // src/pages/Dashboard.tsx
  import { useEffect, useState } from 'react';
  import { ProductMetrics } from '../resources/types';
  import { calculateProductMetrics } from '../resources/productData';
  import './Dashboard.css';
  
  const Dashboard = () => {
    const [metrics, setMetrics] = useState<ProductMetrics | null>(null);
  
    useEffect(() => {
      const productMetrics = calculateProductMetrics();
      setMetrics(productMetrics);
    }, []);
  
    if (!metrics) return <div>Loading...</div>;
  
    return (
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <h3>Product Overview</h3>
            <div className="metric-content">
              <div className="metric-item">
                <span className="metric-label">Total Products</span>
                <span className="metric-value">{metrics.totalProducts}</span>
              </div>
              <div className="metric-item">
                <span className="metric-label">Active Products</span>
                <span className="metric-value">{metrics.activeProducts}</span>
              </div>
            </div>
          </div>
  
          <div className="metric-card">
            <h3>Inventory Status</h3>
            <div className="metric-content">
              <div className="metric-item">
                <span className="metric-label">Low Stock</span>
                <span className="metric-value warning">{metrics.lowStockProducts}</span>
              </div>
              <div className="metric-item">
                <span className="metric-label">Out of Stock</span>
                <span className="metric-value danger">{metrics.outOfStockProducts}</span>
              </div>
            </div>
          </div>
  
          <div className="metric-card">
            <h3>Sales Performance</h3>
            <div className="metric-content">
              <div className="metric-item">
                <span className="metric-label">Total Sales</span>
                <span className="metric-value">{metrics.totalSales}</span>
              </div>
              <div className="metric-item">
                <span className="metric-label">Top Category</span>
                <span className="metric-value">{metrics.topSellingCategory}</span>
              </div>
            </div>
          </div>
  
          <div className="metric-card">
            <h3>Financial Overview</h3>
            <div className="metric-content">
              <div className="metric-item">
                <span className="metric-label">Total Value</span>
                <span className="metric-value">${metrics.totalValue.toLocaleString()}</span>
              </div>
              <div className="metric-item">
                <span className="metric-label">Avg. Rating</span>
                <span className="metric-value">{metrics.averageRating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  