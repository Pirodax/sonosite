// components/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#f2f2f2' }}>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '150px', margin: 0, padding: 0, justifyContent: 'center' }}>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/booking">Réserver</Link>
          </li>
          <li>
            <Link href="/locations">Lieux</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
