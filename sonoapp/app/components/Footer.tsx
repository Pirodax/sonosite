// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#f2f2f2', textAlign: 'center' }}>
      <p>© {new Date().getFullYear()} Silvaria. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
