const platformItems = [
  {
    number: "01",
    title: "TOURNAMENT DISCOVERY",
    description: "Find competition formats and event information in one place.",
    status: "PLANNED",
  },
  {
    number: "02",
    title: "SQUAD MANAGEMENT",
    description: "Build a team with clear membership and leader permissions.",
    status: "PLANNED",
  },
  {
    number: "03",
    title: "MATCH OPERATIONS",
    description: "A structured space for match details, room access, and updates.",
    status: "PLANNED",
  },
];

export default function App() {
  return (
    <main className="site-shell">
      <div className="page-glow page-glow--top" aria-hidden="true" />
      <div className="page-glow page-glow--bottom" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label="TMT OFFICIAL home">
          <span className="brand-symbol">TMT</span>
          <span className="brand-wordmark">OFFICIAL<span className="brand-period">.</span></span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home" aria-current="page">HOME</a>
          <a href="#platform">THE PLATFORM</a>
          <a href="#standards">OUR STANDARD</a>
        </nav>

        <a className="header-status" href="#project-status">
          <span className="status-light" />
          IN DEVELOPMENT
        </a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> INDIA-FOCUSED FREE FIRE ESPORTS</p>
          <h1 id="hero-title">
            OWN YOUR
            <span>PLACE IN</span>
            <span className="hero-accent">THE ARENA<span className="hero-period">.</span></span>
          </h1>
          <p className="hero-tagline">My fans is my backbone.</p>
          <p className="hero-description">
            A competitive home for players, squads, and tournament communities.
            TMT OFFICIAL is building the foundation for what comes next.
          </p>

          <div className="hero-actions">
            <a className="action-primary" href="#platform">
              EXPLORE THE PLATFORM <span aria-hidden="true">↗</span>
            </a>
            <a className="action-secondary" href="#project-status">
              VIEW PROJECT STATUS <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-footnote">
            <span className="footnote-line" />
            BUILT AROUND THE COMMUNITY
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract TMT esports visual">
          <div className="art-grid" aria-hidden="true" />
          <div className="art-ring art-ring--outer" aria-hidden="true" />
          <div className="art-ring art-ring--inner" aria-hidden="true" />
          <div className="art-cross art-cross--one" aria-hidden="true" />
          <div className="art-cross art-cross--two" aria-hidden="true" />
          <div className="art-index"><span>FIG. 001</span><span>TMT / INDIA</span></div>
          <div className="art-core">
            <span className="core-top">TMT</span>
            <span className="core-main">DROP<br />IN.</span>
            <span className="core-bottom">PLAY WITH PURPOSE</span>
          </div>
          <div className="art-coordinate">17° 23' N&nbsp; / &nbsp;78° 29' E</div>
          <div className="art-side-label">THE NEXT GENERATION OF PLAY</div>
        </div>
      </section>

      <div className="signal-strip" aria-label="Platform principles">
        <span>COMMUNITY FIRST</span><i />
        <span>COMPETE WITH PURPOSE</span><i />
        <span>BUILT FOR INDIA</span><i />
        <span>PLAY FAIR</span>
      </div>

      <section className="platform-section" id="platform" aria-labelledby="platform-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">01 / WHAT WE'RE BUILDING</p>
            <h2 id="platform-title">ONE PLATFORM.<br /><span>MANY WAYS TO COMPETE.</span></h2>
          </div>
          <p className="section-intro">
            The product is being developed in clear stages. These are planned
            platform areas, not live features.
          </p>
        </div>

        <div className="platform-grid">
          {platformItems.map((item) => (
            <article className="platform-card" key={item.number}>
              <div className="card-topline"><span>{item.number}</span><span className="planned-label">{item.status}</span></div>
              <div className="card-mark" aria-hidden="true">{item.number === "01" ? "⌕" : item.number === "02" ? "◈" : "⌁"}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="card-rule" />
            </article>
          ))}
        </div>
      </section>

      <section className="standards-section" id="standards" aria-labelledby="standards-title">
        <div className="standards-mark" aria-hidden="true">TMT<span>®</span></div>
        <div className="standards-copy">
          <p className="section-kicker">02 / THE STANDARD</p>
          <h2 id="standards-title">NO SHORTCUTS.<br /><span>NO FAKE PROMISES.</span></h2>
          <p>
            Fair competition, clear rules, secure player data, and honest
            platform status come before launch. Features will appear only
            when they are implemented and verified.
          </p>
        </div>
        <div className="standards-stamp">BUILT<br />WITH<br />INTENT<span>✳</span></div>
      </section>

      <section className="status-section" id="project-status" aria-labelledby="status-title">
        <div>
          <p className="section-kicker">03 / LIVE PROJECT STATUS</p>
          <h2 id="status-title">THE FOUNDATION<br /><span>IS UNDERWAY.</span></h2>
        </div>
        <div className="status-detail">
          <span className="status-detail-dot" />
          <div><strong>FOUNDATION STAGE</strong><p>Public landing page in development. Tournament, account, and admin features are not live.</p></div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">TMT OFFICIAL<span>.</span></a>
        <span>MY FANS IS MY BACKBONE.</span>
        <span>© {new Date().getFullYear()} TMT OFFICIAL</span>
      </footer>
    </main>
  );
}
