// components/AnimatedBackground.js
export default function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true" data-animated-bg="true">
      <div className="gradient-overlay" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />
    </div>
  );
}

