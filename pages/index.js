// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="hero-center">
        <h1>I Missed You Bubu</h1>

        <div style={{ display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/somepage" legacyBehavior>
            <a className="cute-btn primary">Open</a>
          </Link>

          <button className="cute-btn" type="button" onClick={() => alert('Clicked')}>
            Click me
          </button>
        </div>
      </section>
    </main>
  );
}
