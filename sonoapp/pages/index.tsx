// pages/index.tsx
import type { NextPage } from 'next';
import Image from 'next/image';
const Home: NextPage = () => {
  return (
    <div>
      
      <h1  style={{ display: 'flex', listStyle: 'none', gap: '150px', margin: 0, padding: 0, justifyContent: 'center' }}>Bienvenue chez Olivier</h1>
      <p>Massage sonore & sonothérapie pour un bien-être optimal.</p>
      <Image  
      src= "/image_sono/image_olivier_massage.JPG"
      alt="outils de massage sonore" 
      width={300}  // indiquez la largeur souhaitée
      height={200} // indiquez la hauteur souhaitée
      />
      <p>Découvrez nos services, prenez rendez-vous et explorez nos lieux apaisants.</p>
    </div>
  );
};

export default Home;
