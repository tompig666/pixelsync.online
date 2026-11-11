import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelsync.online"),
  title: {
    default: "PixelSync — Cross-platform advertising operations",
    template: "%s — PixelSync",
  },
  description:
    "PixelSync is an advertising operations agency helping businesses plan, analyze and optimize campaigns across TikTok, Meta, Google and other platforms.",
  openGraph: {
    title: "PixelSync — Advertising, in one clear operating view",
    description:
      "Cross-platform campaign analysis, media operations and practical growth support.",
    url: "https://pixelsync.online",
    siteName: "PixelSync",
    type: "website",
  },
};

const Mark = () => (
  <span className="brand-mark" aria-hidden="true">
    <i />
    <i />
    <i />
  </span>
);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="PixelSync home">
            <Mark />
            <span>PixelSync</span>
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
            <Link className="brand brand-footer" href="/"><Mark /><span>PixelSync</span></Link>
            <p>Clearer signals. Better media decisions.</p>
          </div>
          <div className="footer-links">
            <div><span>Explore</span><Link href="/services">Services</Link><Link href="/data-use">Data use</Link><Link href="/about">About</Link></div>
            <div><span>Legal</span><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></div>
            <div><span>Contact</span><a href="mailto:hello@pixelsync.online">hello@pixelsync.online</a><Link href="/contact">New business</Link></div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 PIXEL SYNC (HK) LIMITED</span>
            <span>Hong Kong · Working globally</span>
            <span>Independent advertising agency</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
