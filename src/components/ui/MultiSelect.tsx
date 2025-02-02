import React, { useState, useEffect } from 'react';
import './MultiSelect.css';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
}

const productData: Product[] = [
  { id: 1, name: "Organic Cotton T-Shirt", category: "Apparel", price: 29.99, inStock: true },
  { id: 2, name: "Wireless Headphones", category: "Electronics", price: 199.99, inStock: true },
  { id: 3, name: "Leather Wallet", category: "Accessories", price: 49.99, inStock: false },
  { id: 4, name: "Smart Watch", category: "Electronics", price: 299.99, inStock: true },
  { id: 5, name: "Yoga Mat", category: "Fitness", price: 39.99, inStock: true },
  { id: 6, name: "Coffee Maker", category: "Home", price: 89.99, inStock: true },
];

const MultiSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productData);

  useEffect(() => {
    const filtered = productData.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  const toggleSelection = (productId: number) => {
    setSelectedItems(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const removeSelected = (productId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedItems(prev => prev.filter(id => id !== productId));
  };

  const getSelectedProducts = () => {
    return productData.filter(product => selectedItems.includes(product.id));
  };

  return (
    <div className="multi-select-wrapper">
      <div className="multi-select-container">
        <div 
          className="select-header"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedItems.length ? `${selectedItems.length} items selected` : 'Select Products'}</span>
          <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
        </div>

        {isOpen && (
          <div className="dropdown-content">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <div className="options-container">
              {filteredProducts.map(product => (
                <label key={product.id} className="option">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(product.id)}
                    onChange={() => toggleSelection(product.id)}
                  />
                  <div className="product-info">
                    <span className="product-name">{product.name}</span>
                    <span className="product-details">
                      {product.category} - ${product.price}
                      {!product.inStock && <span className="out-of-stock"> (Out of Stock)</span>}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Selected Items Display Section */}
      {selectedItems.length > 0 && (
        <div className="selected-items-container">
          <h3>Selected Products:</h3>
          <div className="selected-items-grid">
            {getSelectedProducts().map(product => (
              <div key={product.id} className="selected-item">
                <div className="selected-item-info">
                  <span className="selected-item-name">{product.name}</span>
                  <span className="selected-item-details">
                    {product.category} - ${product.price}
                  </span>
                </div>
                <button 
                  className="remove-item-btn"
                  onClick={(e) => removeSelected(product.id, e)}
                  aria-label="Remove item"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
