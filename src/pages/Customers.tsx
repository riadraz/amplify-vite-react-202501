// src/pages/Customers.tsx
import { useState, FormEvent } from 'react';
import './Customers.css';

interface TabProps {
  title: string;
  content: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

interface CustomerFormData {
  // Basic Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  
  // Contact Details
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  
  // Engagement Data
  customerStatus: string;
  loyaltyPoints: string;
  lastPurchaseDate: string;
  totalPurchases: string;
  preferredChannel: string;
  
  // Preferences
  communicationPreferences: string[];
  productInterests: string[];
  specialRequirements: string;
  
  // Analytics
  customerLifetimeValue: string;
  acquisitionSource: string;
  segmentCategory: string;
  riskScore: string;
  churnProbability: string;
}

const Tab = ({ title, isActive, onClick }: TabProps) => (
  <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
    {title}
  </button>
);

const Customers = () => {
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState<CustomerFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    customerStatus: '',
    loyaltyPoints: '',
    lastPurchaseDate: '',
    totalPurchases: '',
    preferredChannel: '',
    communicationPreferences: [],
    productInterests: [],
    specialRequirements: '',
    customerLifetimeValue: '',
    acquisitionSource: '',
    segmentCategory: '',
    riskScore: '',
    churnProbability: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked 
        ? [...(prev[name as keyof CustomerFormData] as string[]), value]
        : (prev[name as keyof CustomerFormData] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const navItems = [
    {
      title: "Profile Management",
      tabs: [
        {
          title: "Basic Info",
          content: (
            <form className="customer-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                </div>
              </div>
              {/* Add more basic info fields */}
            </form>
          )
        },
        {
          title: "Contact Details",
          content: (
            <form className="customer-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />
                </div>
              </div>
              {/* Add more contact fields */}
            </form>
          )
        },
        {
          title: "Preferences",
          content: "Preferences form"
        },
        {
          title: "Documents",
          content: "Documents upload form"
        },
        {
          title: "History",
          content: "Customer history view"
        }
      ]
    },
    {
      title: "Engagement Metrics",
      tabs: [
        {
          title: "Activity Log",
          content: "Activity tracking form"
        },
        {
          title: "Interaction History",
          content: "Interaction history form"
        },
        {
          title: "Feedback",
          content: "Customer feedback form"
        },
        {
          title: "Loyalty Points",
          content: "Loyalty management form"
        },
        {
          title: "Communication Log",
          content: "Communication history form"
        }
      ]
    },
    {
      title: "Analytics Dashboard",
      tabs: [
        {
          title: "Overview",
          content: "Analytics overview"
        },
        {
          title: "Behavior Analysis",
          content: "Behavior analysis form"
        },
        {
          title: "Purchase Patterns",
          content: "Purchase pattern analysis"
        },
        {
          title: "Predictive Metrics",
          content: "Predictive analytics form"
        },
        {
          title: "Custom Reports",
          content: "Custom reporting form"
        }
      ]
    },
    {
      title: "Service Management",
      tabs: [
        {
          title: "Support Tickets",
          content: "Ticket management form"
        },
        {
          title: "Service Requests",
          content: "Service request form"
        },
        {
          title: "Complaints",
          content: "Complaints handling form"
        },
        {
          title: "SLA Tracking",
          content: "SLA monitoring form"
        },
        {
          title: "Resolution History",
          content: "Resolution tracking form"
        }
      ]
    },
    {
      title: "Campaign Management",
      tabs: [
        {
          title: "Campaign Assignment",
          content: "Campaign assignment form"
        },
        {
          title: "Response Tracking",
          content: "Response monitoring form"
        },
        {
          title: "Segment Analysis",
          content: "Segmentation analysis form"
        },
        {
          title: "ROI Metrics",
          content: "Campaign ROI form"
        },
        {
          title: "Campaign History",
          content: "Historical campaign data"
        }
      ]
    }
  ];

  return (
    <div className="customers-container">
      <nav className="customer-nav">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`nav-item ${activeNavItem === index ? 'active' : ''}`}
            onClick={() => {
              setActiveNavItem(index);
              setActiveTab(0);
            }}
          >
            {item.title}
          </button>
        ))}
      </nav>

      <div className="tabs-container">
        <div className="tabs-header">
          {navItems[activeNavItem].tabs.map((tab, index) => (
            <Tab
              key={index}
              title={tab.title}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
        <div className="tab-content">
          {navItems[activeNavItem].tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default Customers;
