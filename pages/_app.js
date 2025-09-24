import '../styles/globals.css';
import AnimatedBackground from '../components/AnimatedBackground';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="relative">
      {/* The animated background is always rendered here, behind everything */}
      <AnimatedBackground />

      {/* This is the magic for page transitions.
        The `key={router.pathname}` tells React to treat each page as a new
        component. When you navigate, this component re-renders from scratch,
        which re-triggers our `page-transition` CSS animation every time.
        The `z-10` ensures your page content always appears above the background.
      */}
      <main key={router.pathname} className="page-transition relative z-10">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;

