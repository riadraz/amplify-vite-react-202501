
// src/pages/Products.tsx
import { useState, FormEvent } from 'react';
import './Products.css';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

// Products.tsx
// Keep your existing imports and interfaces

const AccordionItem = ({ title, content, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={onClick}>
        <span>{title}</span>
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-content-inner">{content}</div>
      </div>
    </div>
  );
};

// Keep your existing Products component code...


const Products = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    productName: '',
    productCode: '',
    description: '',
    categories: [] as string[],
    status: '',
    productType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      categories: checked 
        ? [...prev.categories, value]
        : prev.categories.filter(category => category !== value)
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const productNameContent = (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="productCode">Product Code:</label>
        <input
          type="text"
          id="productCode"
          name="productCode"
          value={formData.productCode}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Categories:</label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="categories"
              value="electronics"
              checked={formData.categories.includes('electronics')}
              onChange={handleCheckboxChange}
            />
            Electronics
          </label>
          <label>
            <input
              type="checkbox"
              name="categories"
              value="clothing"
              checked={formData.categories.includes('clothing')}
              onChange={handleCheckboxChange}
            />
            Clothing
          </label>
          <label>
            <input
              type="checkbox"
              name="categories"
              value="books"
              checked={formData.categories.includes('books')}
              onChange={handleCheckboxChange}
            />
            Books
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Status:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="status"
              value="active"
              checked={formData.status === 'active'}
              onChange={handleInputChange}
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="inactive"
              checked={formData.status === 'inactive'}
              onChange={handleInputChange}
            />
            Inactive
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="productType">Product Type:</label>
        <select
          id="productType"
          name="productType"
          value={formData.productType}
          onChange={handleInputChange}
        >
          <option value="">Select a type</option>
          <option value="physical">Physical Product</option>
          <option value="digital">Digital Product</option>
          <option value="service">Service</option>
        </select>
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );

  const accordionData = [
    {
      title: "Product Name",
      content: productNameContent
    },
    {
      title: "Product Category",
      content: "Product category management content goes here."
    },
    {
      title: "Product Inventory",
      content: "Product inventory management content goes here."
    },
    {
      title: "Product Sold",
      content: "Product sales information and statistics go here."
    },
    {
      title: "Product Sustainability",
      content: "Product sustainability metrics and information go here."
    }
  ];

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="products-container">
      <h2>Product Management</h2>
      <div className="accordion">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
