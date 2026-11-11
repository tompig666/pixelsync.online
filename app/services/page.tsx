import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Services", description: "Media planning, campaign operations, cross-platform analysis and creative learning from PixelSync." };

const services = [
  ["01", "Media strategy", "Channel roles, budget logic, audience planning and measurement design grounded in your commercial objective."],
  ["02", "Campaign operations", "Campaign builds, launch coordination, pacing, optimization and documented changes across supported ad platforms."],
  ["03", "Performance analysis", "A unified view of delivery and outcomes, with practical commentary—not a dashboard without context."],
  ["04", "Creative learning", "Testing frameworks and performance feedback that help creative teams produce the next stronger iteration."],
  ["05", "Measurement support", "Event, attribution and reporting reviews designed to improve decision quality and identify blind spots."],
  ["06", "Team enablement", "Clear operating notes, review sessions and decision records that keep internal teams aligned."],
];

export default function Services() {
  return <main className="inner-page">
    <section className="page-hero shell"><p className="eyebrow"><span/> SERVICES</p><h1>Practical media support,<br/><em>built around decisions.</em></h1><p>PixelSync supports the full campaign cycle without pretending every client needs the same playbook.</p></section>
    <section className="service-list shell">{services.map(([n,title,copy])=><article key={n}><span>{n}</span><h2>{title}</h2><p>{copy}</p></article>)}</section>
    <section className="platform-scope shell"><div><p className="section-kicker">SUPPORTED ECOSYSTEMS</p><h2>Cross-platform by design</h2></div><div className="scope-tags"><span>TikTok</span><span>Meta</span><span>Google Ads</span><span>Microsoft Ads</span><span>Snapchat</span><span>Analytics &amp; reporting</span></div></section>
    <section className="inline-cta shell"><h2>Need a sharper view of your media?</h2><Link className="button button-primary" href="/contact">Talk with our team <span>↗</span></Link></section>
  </main>;
}
