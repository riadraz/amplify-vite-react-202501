// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#f8f9fa',
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '2rem',
        margin: 0,
        padding: 0,
        justifyContent: 'center'
      }}>
        <li><Link to="/home" style={linkStyle}>Home</Link></li>
        <li><Link to="/products" style={linkStyle}>Products</Link></li>
        <li><Link to="/income" style={linkStyle}>Income</Link></li>
        <li><Link to="/customers" style={linkStyle}>Customers</Link></li>
        <li><Link to="/employees" style={linkStyle}>Employees</Link></li>
      </ul>
    </nav>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: '#e9ecef'
  }
};

export default Navbar;

