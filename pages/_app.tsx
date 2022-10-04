import '../styles/main.scss';
import type { AppProps } from 'next/app';
import Footer from '../components/global/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="app-wrapper">
        <div className="container text-center py-5">
          <h1>Wordy!</h1>
        </div>
        <div className="container py-3">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
