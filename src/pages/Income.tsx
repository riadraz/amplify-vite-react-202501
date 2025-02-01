// src/pages/Income.tsx
import { useState, FormEvent } from 'react';
import './Income.css';

interface TabProps {
  title: string;
  content: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

interface IncomeFormData {
  incomeSource: string;
  amount: string;
  frequency: string;
  date: string;
  category: string;
  description: string;
  paymentMethod: string;
}

const Tab = ({ title, isActive, onClick }: TabProps) => {
  return (
    <button 
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const Income = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState<IncomeFormData>({
    incomeSource: '',
    amount: '',
    frequency: '',
    date: '',
    category: '',
    description: '',
    paymentMethod: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const incomeFormContent = (
    <form onSubmit={handleSubmit} className="income-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="incomeSource">Income Source</label>
          <input
            type="text"
            id="incomeSource"
            name="incomeSource"
            value={formData.incomeSource}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="frequency">Frequency</label>
          <select
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Frequency</option>
            <option value="one-time">One Time</option>
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Category</option>
            <option value="salary">Salary</option>
            <option value="business">Business</option>
            <option value="investment">Investment</option>
            <option value="rental">Rental</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="bank-transfer">Bank Transfer</option>
            <option value="cash">Cash</option>
            <option value="check">Check</option>
            <option value="digital-wallet">Digital Wallet</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={3}
        />
      </div>

      <button type="submit" className="submit-button">Save Income</button>
    </form>
  );

  const tabsData = [
    {
      title: "Income Overview",
      content: "Income overview and summary dashboard will be displayed here."
    },
    {
      title: "Add Income",
      content: incomeFormContent
    },
    {
      title: "Income History",
      content: "Income transaction history and records will be displayed here."
    },
    {
      title: "Income Analysis",
      content: "Income analysis charts and reports will be displayed here."
    },
    {
      title: "Income Settings",
      content: "Income categories and preferences settings will be displayed here."
    }
  ];

  return (
    <div className="income-container">
      <div className="tabs-container">
        <div className="tabs-header">
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              title={tab.title}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)} content={undefined}            />
          ))}
        </div>
        <div className="tab-content">
          {tabsData[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default Income;
