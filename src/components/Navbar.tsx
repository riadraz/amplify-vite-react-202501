// src/components/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link 
            to="/home" 
            className={location.pathname === '/home' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/products" 
            className={location.pathname === '/products' ? 'active' : ''}
          >
            Products
          </Link>
        </li>
        <li>
          <Link 
            to="/income" 
            className={location.pathname === '/income' ? 'active' : ''}
          >
            Income
          </Link>
        </li>
        <li>
          <Link 
            to="/customers" 
            className={location.pathname === '/customers' ? 'active' : ''}
          >
            Customers
          </Link>
        </li>
        <li>
          <Link 
            to="/employees" 
            className={location.pathname === '/employees' ? 'active' : ''}
          >
            Employees
          </Link>
        </li>
        <li>
          <Link 
            to="/inventory" 
            className={location.pathname === '/inventory' ? 'active' : ''}
          >
            Inventory
          </Link>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;
