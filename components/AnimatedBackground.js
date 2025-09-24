// components/AnimatedBackground.js

/**
 * This component renders the animated blobs that float in the background.
 * It's styled and animated entirely by the styles in `globals.css`.
 * The `z-index` and `pointer-events-none` ensure it stays behind all
 * content and doesn't interfere with mouse clicks.
 */
const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/4 -left-16 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
      <div className="absolute -top-1/4 -right-16 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2s"></div>
      <div className="absolute -bottom-16 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4s"></div>
    </div>
  );
};

export default AnimatedBackground;
