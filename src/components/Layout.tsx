// src/components/Layout.tsx
import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navbar />
      <main style={{
        flex: 1,
        padding: '2rem',
        backgroundColor: '#ffffff'
      }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;

