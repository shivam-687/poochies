import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeadStrip from '../components/HeadStrip';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadStrip/>
      <Navigation></Navigation>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
