import Link from "next/link";
import type { Article } from "./article-data";

export default function ArticlePage({ article }: { article: Article }) {
  return <main className="article-page">
    <header className="site-header article-header">
      <Link className="brand" href="/" aria-label="TripAudit home"><img src="/tripaudit-logo-horizontal.svg" alt="TripAudit" /><span>Beta</span></Link>
      <nav aria-label="Main navigation"><Link href="/#how">How it works</Link><Link href="/#reviews">What it reviews</Link><Link href="/insights">Insights</Link><Link href="/#about">About</Link></nav>
      <a className="button button-small" href="https://app.domain.com">Review an itinerary <span aria-hidden="true">→</span></a>
    </header>
    <article>
      <div className="article-hero"><Link className="back-link" href="/insights">← All insights</Link><p className="eyebrow">{article.category} · {article.readTime}</p><h1>{article.title}</h1><p className="article-deck">{article.description}</p></div>
      <div className="article-body">
        {article.intro.map((p) => <p className="article-intro" key={p}>{p}</p>)}
        {article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((p)=><p key={p}>{p}</p>)}{section.bullets && <ul>{section.bullets.map((item)=><li key={item}>{item}</li>)}</ul>}</section>)}
        <aside className="article-cta"><p className="eyebrow">Review before you send</p><h2>Add a structured second check to your workflow.</h2><p>TripAudit helps surface potential gaps and planning concerns while professional judgement stays with you.</p><a className="button" href="https://app.domain.com">Review an itinerary <span aria-hidden="true">→</span></a></aside>
      </div>
    </article>
    <footer className="article-footer"><div className="footer-brand"><img src="/tripaudit-logo-horizontal.svg" alt="TripAudit" /><p>Itinerary quality control for travel professionals.</p></div><div><strong>Explore</strong><Link href="/">Homepage</Link><Link href="/insights">Insights</Link></div><div><strong>Product</strong><a href="https://app.domain.com">Open TripAudit</a><span>Public beta</span></div><p className="copyright">© 2026 TripAudit. All rights reserved.</p></footer>
  </main>
}
