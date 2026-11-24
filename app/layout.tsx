import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://uusop.com"),
  title: {
    default: "UUSOP — Cross-platform advertising operations",
    template: "%s — UUSOP",
  },
  description:
    "UUSOP is an advertising operations agency helping businesses plan, analyze and optimize campaigns across TikTok, Meta, Google and other platforms.",
  openGraph: {
    title: "UUSOP — Advertising, in one clear operating view",
    description:
      "Cross-platform campaign analysis, media operations and practical growth support.",
    url: "https://uusop.com",
    siteName: "UUSOP",
    type: "website",
  },
};

const Mark = () => (
  <span className="brand-mark" aria-hidden="true">
    <svg viewBox="0 0 34 34" role="img">
      <path d="M4 27 13 17l6.5 6L30 8" />
      <circle cx="4" cy="27" r="2.8" className="brand-mark-start" />
      <circle cx="30" cy="8" r="4" className="brand-mark-signal" />
    </svg>
  </span>
);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="UUSOP home">
            <Mark />
            <span className="brand-word">UUSOP</span>
          </Link>
          <nav className="primary-nav" aria-label="Primary navigation">
            <Link href="/services">Services</Link>
            <Link href="/data-use">Data use</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
          <Link className="nav-cta" href="/contact">Start a conversation <span>↗</span></Link>
        </header>
        {children}
        <footer className="site-footer">
          <div className="footer-lead">
            <Link className="brand brand-footer" href="/"><Mark /><span className="brand-word">UUSOP</span></Link>
            <p>Clearer signals. Better media decisions.</p>
          </div>
          <div className="footer-links">
            <div><span>Explore</span><Link href="/services">Services</Link><Link href="/data-use">Data use</Link><Link href="/about">About</Link></div>
            <div><span>Legal</span><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></div>
            <div><span>Contact</span><a href="mailto:hello@uusop.com">hello@uusop.com</a><Link href="/contact">New business</Link></div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 UUSOP · OPERATED BY PIXEL SYNC (HK) LIMITED</span>
            <span>Hong Kong · Working globally</span>
            <span>Independent advertising agency</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
