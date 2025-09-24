// pages/_app.js
import { useRouter } from 'next/router';
import '../styles/globals.css';
import AnimatedBackground from '../components/AnimatedBackground';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <AnimatedBackground />

      <div className="app-content">
        <div key={router.asPath} className="page-wrapper">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}


