import React from 'react';


export default function AnimatedBackground() {
return (
<div className="animated-bg" aria-hidden="true">
<div className="gradient-overlay" />


{/* 4 pastel blobs — sizes, delays and movement are tuned for a soft, romantic look */}
<div className="blob blob-1" />
<div className="blob blob-2" />
<div className="blob blob-3" />
<div className="blob blob-4" />
</div>
);
}

