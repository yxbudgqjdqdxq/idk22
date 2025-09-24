import React from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import AnimatedBackground from '../components/AnimatedBackground';


function MyApp({ Component, pageProps }) {
const router = useRouter();


return (
<>
{/* Background sits behind everything */}
<AnimatedBackground />


{/* app-content keeps layout and interactive elements above the background */}
<div className="app-content">
{/* Using router.asPath as key causes the inner content to remount on navigation,
which triggers the CSS page animation below (fade + subtle slide). */}
<div key={router.asPath} className="page-wrapper">
<Component {...pageProps} />
</div>
</div>
</>
);
}


export default MyApp;

