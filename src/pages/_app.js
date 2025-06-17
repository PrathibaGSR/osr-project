import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Montserrat } from 'next/font/google';
import '../styles/globals.scss';
import Head from 'next/head';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Import Bootstrap JS dynamically to avoid SSR issues
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <main className={montserrat.className}>
      <Head>
        <link rel="icon" href="/fav.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;