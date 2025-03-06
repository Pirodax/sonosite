// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '50px', backgroundColor: '#f2f2f2', textAlign: 'center' }}>
      <p>© {new Date().getFullYear()} Olivier. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
