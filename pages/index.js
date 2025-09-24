// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="hero-center">
        <h1>I Missed You Bubu</h1>

        <div style={{ display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* keep existing logic for buttons — here we provide Link examples */}
          <Link href="/somepage" legacyBehavior>
            <a className="cute-btn">Open</a>
          </Link>

          <button className="cute-btn" type="button" onClick={() => alert('Button clicked')}>
            Click me
          </button>
        </div>
      </section>
    </main>
  );
}
