import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation></Navigation>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
