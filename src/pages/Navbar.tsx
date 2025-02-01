// src/components/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useMemo } from 'react';
import React from 'react';
import './Navbar.css';
const Navbar = () => {
  const location = useLocation();

  // Memoize navigation items
  const navItems = useMemo(() => [
    { path: '/home', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/income', label: 'Income' },
    { path: '/customers', label: 'Customers' },
    { path: '/employees', label: 'Employees' },
    { path: '/inventory', label: 'Inventory' },
    //{ path: '/lifestyle', label: 'Lifestyle' },
    //{ path: '/purchase', label: 'Purchase' },
    //{ path: '/stakeholder', label: 'Stakeholder' },
    //{ path: '/futureplan', label: 'Futureplan' },
    //{ path: '/sales', label: 'Sales' },
    // Add more items here
  ], []);

  // Only render visible items
  const parentRef = React.useRef(null);
  const virtualizer = useVirtualizer({
    count: navItems.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
    horizontal: true
  });

  return (
    <nav>
      <ul ref={parentRef} style={{ overflow: 'none' }}>
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const item = navItems[virtualItem.index];
          return (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
