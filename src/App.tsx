export default function App() {
  return (
    <main className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="/" aria-label="TMT OFFICIAL home">
          <span className="brand-mark">TMT</span>
          <span className="brand-name">OFFICIAL</span>
        </a>
        <span className="status"><span className="status-dot" /> PROJECT INITIALIZATION</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">FREE FIRE · INDIA</p>
        <h1 id="hero-title">
          BUILT FOR
          <span>THE NEXT</span>
          <span className="accent">BATTLE.</span>
        </h1>
        <p className="tagline">My fans is my backbone.</p>
        <p className="description">
          The TMT OFFICIAL tournament platform is under construction.
          Core competition features will appear here after they are implemented
          and verified.
        </p>
        <div className="hero-meta">
          <span>PLATFORM STATUS</span>
          <strong>FOUNDATION STAGE</strong>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} TMT OFFICIAL</span>
        <span>PLAY FAIR. COMPETE HARD.</span>
      </footer>
    </main>
  );
}
