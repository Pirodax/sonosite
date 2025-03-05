// pages/_app.tsx
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    console.log('MyApp rendered with Layout'); // Debug : vérification dans le terminal ou la console du navigateur

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
