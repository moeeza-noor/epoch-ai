const FOOTER_NAV = [
  { href: "#mission", label: "Mission" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#founders", label: "Team" },
];

export default function Footer() {
  return (
    <footer id="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a href="#top" className="brand brand--footer" aria-label="Epoch AI — home">
            <img src="/assets/symbol-white.png" alt="" className="brand-mark" aria-hidden="true" />
            <span className="brand-word">
              epoch<span className="dot">.</span>ai
            </span>
          </a>
          <p>Building intelligence that respects the human in the loop.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <ul>
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-say">
          <p className="footer-tag">Let&rsquo;s build the next epoch.</p>
          <a href="#newsletter" className="btn btn--primary btn--sm">
            Get in touch
          </a>
        </div>
      </div>
      <div className="footer-base wrap">
        <p>© {new Date().getFullYear()} Epoch AI. All rights reserved.</p>
        <p>Made responsibly, in code.</p>
      </div>
    </footer>
  );
}
