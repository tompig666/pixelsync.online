import Link from "next/link";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> Independent media operations agency</p>
          <h1>Advertising, in one<br /><em>clear operating view.</em></h1>
          <p className="hero-intro">We help ambitious teams plan, run and understand paid media across TikTok, Meta, Google and the platforms that matter to their growth.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">Discuss your campaigns <Arrow /></Link>
            <Link className="text-link" href="/services">Explore our work <span>→</span></Link>
          </div>
        </div>

        <div className="signal-board reveal delay-1" aria-label="Illustrative cross-platform campaign view">
          <div className="board-head"><div><span className="live-dot" /> LIVE SIGNALS</div><span>LAST 30 DAYS</span></div>
          <div className="metric-main"><span>Blended return</span><strong>4.82<small>x</small></strong><b>+18.4%</b></div>
          <div className="chart" aria-hidden="true">
            <svg viewBox="0 0 600 170" role="img">
              <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#75f5b5" stopOpacity=".32"/><stop offset="1" stopColor="#75f5b5" stopOpacity="0"/></linearGradient></defs>
              <path className="area" d="M0 145 C55 139,70 102,115 112 S180 141,220 95 S280 52,330 76 S395 118,438 66 S505 82,600 18 L600 170 L0 170Z" />
              <path className="line" d="M0 145 C55 139,70 102,115 112 S180 141,220 95 S280 52,330 76 S395 118,438 66 S505 82,600 18" />
              <circle cx="600" cy="18" r="5" />
            </svg>
          </div>
          <div className="platform-rows">
            <div><span className="platform-icon tk">T</span><p>TikTok<small>Creative momentum</small></p><b>+24%</b></div>
            <div><span className="platform-icon meta">M</span><p>Meta<small>Conversion efficiency</small></p><b>+11%</b></div>
            <div><span className="platform-icon google">G</span><p>Google<small>Demand capture</small></p><b>+8%</b></div>
          </div>
          <p className="board-note">Illustrative reporting view · metrics vary by client</p>
        </div>
      </section>

      <section className="marquee" aria-label="Supported advertising platforms"><div><span>TIKTOK</span><i>✦</i><span>META</span><i>✦</i><span>GOOGLE</span><i>✦</i><span>MICROSOFT</span><i>✦</i><span>SNAPCHAT</span><i>✦</i><span>TIKTOK</span><i>✦</i></div></section>

      <section className="intro-section shell section-pad">
        <p className="section-kicker">01 / WHAT WE DO</p>
        <div>
          <h2>We turn fragmented campaign data into decisions your team can act on.</h2>
          <p>PixelSync works as an extension of your marketing team—from measurement design and campaign operations to weekly analysis and creative learning. Every recommendation connects back to a business goal.</p>
        </div>
      </section>

      <section className="services-grid shell">
        <article className="service-card feature-card">
          <span className="card-num">01</span>
          <div className="orbital" aria-hidden="true"><i/><i/><i/><b>PS</b></div>
          <div><p className="mini-label">MEDIA OPERATIONS</p><h3>Campaign planning &amp; activation</h3><p>Structure, launch and day-to-day stewardship across the right mix of paid channels.</p></div>
        </article>
        <article className="service-card">
          <span className="card-num">02</span>
          <div><p className="mini-label">ANALYSIS</p><h3>Performance intelligence</h3><p>Cross-platform reporting that separates signal from noise and explains what to do next.</p></div>
          <div className="mini-bars" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
        </article>
        <article className="service-card">
          <span className="card-num">03</span>
          <div><p className="mini-label">CREATIVE SYSTEMS</p><h3>Testing &amp; learning</h3><p>Structured hypotheses, creative feedback and iteration informed by real campaign response.</p></div>
          <div className="test-tags"><span>HOOK A</span><span>ANGLE 03</span><span>ITERATE</span></div>
        </article>
      </section>

      <section className="process-section section-pad">
        <div className="shell">
          <p className="section-kicker light">02 / HOW WE WORK</p>
          <div className="process-heading"><h2>One operating rhythm.<br />From brief to learning.</h2><p>Simple enough to move quickly. Rigorous enough to show what changed—and why.</p></div>
          <div className="process-steps">
            <article><span>01</span><div><h3>Diagnose</h3><p>We map objectives, channels, measurement and constraints before recommending action.</p></div></article>
            <article><span>02</span><div><h3>Activate</h3><p>We build a practical media plan, configure campaigns and align the reporting view.</p></div></article>
            <article><span>03</span><div><h3>Learn</h3><p>We monitor delivery, explain performance and turn each cycle into the next test.</p></div></article>
          </div>
        </div>
      </section>

      <section className="data-section shell section-pad">
        <div className="data-visual" aria-hidden="true">
          <div className="data-ring ring-one"/><div className="data-ring ring-two"/><div className="data-core"><MarkText /></div>
          <span className="data-node n1">TIKTOK</span><span className="data-node n2">META</span><span className="data-node n3">GOOGLE</span><span className="data-node n4">REPORTING</span>
        </div>
        <div className="data-copy">
          <p className="section-kicker">03 / RESPONSIBLE DATA</p>
          <h2>Client-authorized access. Purpose-limited use.</h2>
          <p>When a client connects an advertising platform, PixelSync accesses only the data and permissions needed to deliver agreed reporting and campaign services. Access is initiated by the client and can be revoked.</p>
          <ul><li><span>01</span> No sale of client or platform data</li><li><span>02</span> Least-privilege access and controlled retention</li><li><span>03</span> Platform policies remain the source of truth</li></ul>
          <Link className="text-link dark-link" href="/data-use">Read our data use statement <span>→</span></Link>
        </div>
      </section>

      <section className="cta-section shell">
        <p className="eyebrow"><span /> YOUR NEXT MEDIA CYCLE</p>
        <h2>More clarity.<br /><em>Less campaign theatre.</em></h2>
        <p>Tell us where growth feels unclear. We’ll bring a practical point of view.</p>
        <Link className="button button-primary" href="/contact">Start a conversation <Arrow /></Link>
      </section>
    </main>
  );
}

function MarkText() { return <span>PS</span>; }
