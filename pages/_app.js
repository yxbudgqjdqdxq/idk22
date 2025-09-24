import '../styles/globals.css';
import AnimatedBackground from '../components/AnimatedBackground';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    // This main div ensures content stays relative
    <div className="relative">
      {/* 1. The animated background is always rendered */}
      <AnimatedBackground />

      {/* 2. The 'key' is the most important part for page transitions.
           When you navigate, the key changes (e.g., from '/' to '/about').
           React sees a new key and re-renders the component, which
           re-triggers our 'page-transition' CSS animation.
      */}
      <main
        key={router.pathname}
        className="page-transition relative z-10"
      >
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;

