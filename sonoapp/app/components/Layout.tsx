// components/Layout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ padding: '20px', minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
