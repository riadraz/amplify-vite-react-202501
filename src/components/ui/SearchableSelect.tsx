// SearchableSelect.tsx
import { useState, useEffect } from 'react';
import './SearchableSelect.css';

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  brand: string;
};

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    category: 'Laptops',
    price: 2499.99,
    description: 'Apple M2 Pro chip, 16GB RAM, 512GB SSD',
    brand: 'Apple'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S23 Ultra',
    category: 'Smartphones',
    price: 1199.99,
    description: '256GB, Phantom Black',
    brand: 'Samsung'
  },
  {
    id: '3',
    name: 'Sony WH-1000XM4',
    category: 'Headphones',
    price: 349.99,
    description: 'Wireless Noise Cancelling Headphones',
    brand: 'Sony'
  },
  {
    id: '4',
    name: 'LG C2 65" OLED TV',
    category: 'TVs',
    price: 1999.99,
    description: '4K Smart OLED TV',
    brand: 'LG'
  },
  {
    id: '5',
    name: 'iPad Air',
    category: 'Tablets',
    price: 599.99,
    description: '64GB, WiFi, Space Gray',
    brand: 'Apple'
  }
];

const SearchableSelect = () => {
  const [products] = useState<Product[]>(sampleProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setSearchTerm('');
    setIsOpen(false);
  };

  const handleRemoveProduct = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('searchable-select-dropdown');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="searchable-select-container" id="searchable-select-dropdown">
      <div className="select-field" onClick={() => setIsOpen(!isOpen)}>
        <div className="selected-text">Select Products</div>
        <div className="arrow-icon">
          <svg 
            viewBox="0 0 24 24" 
            width="18" 
            height="18" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none"
            className={`arrow ${isOpen ? 'open' : ''}`}
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="search-container">
            <input
              type="text"
              className="dropdown-search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
            <svg 
              className="search-icon" 
              viewBox="0 0 24 24" 
              width="16" 
              height="16"
            >
              <path 
                fill="currentColor" 
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
            </svg>
          </div>
          <div className="dropdown-list">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-item"
                  onClick={() => handleSelectProduct(product)}
                >
                  <div className="product-name">{product.name}</div>
                  <div className="product-details">
                    {product.brand} - {product.category}
                  </div>
                  <div className="product-price">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">No products found</div>
            )}
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="selected-product-container">
          <div className="selected-product-item">
            <div className="selected-product-info">
              <span className="selected-product-name">{selectedProduct.name}</span>
              <span className="selected-product-details">
                {selectedProduct.brand} - {selectedProduct.category}
              </span>
              <span className="selected-product-price">
                ${selectedProduct.price.toFixed(2)}
              </span>
            </div>
            <button
              className="remove-product-button"
              onClick={handleRemoveProduct}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;
