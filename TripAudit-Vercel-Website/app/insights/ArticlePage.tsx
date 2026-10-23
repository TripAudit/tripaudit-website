import Link from "next/link";
import { articles, type Article } from "./article-data";
import { formatPublishDate, isArticlePublished } from "./publication";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function ArticlePage({ article }: { article: Article }) {
  const publishDate = formatPublishDate(article.publishDate);
  const currentSlug = Object.entries(articles).find(([, candidate]) => candidate === article)?.[0];
  const otherArticles = Object.entries(articles)
    .filter(([slug, candidate]) => slug !== currentSlug && isArticlePublished(candidate))
    .sort(([, a], [, b]) => new Date(b.publishDate ?? 0).getTime() - new Date(a.publishDate ?? 0).getTime())
    .slice(0, 3);

  return <main className="article-page">
    <SiteHeader />
    <article>
      <div className="article-hero">
        <Link className="back-link" href="/insights">← All insights</Link>
        <p className="eyebrow">{article.category} · {article.readTime}{publishDate ? ` · ${publishDate}` : ""}</p>
        <h1>{article.title}</h1>
        <p className="article-deck">{article.description}</p>
      </div>
      <div className="article-body">
        {article.intro.map((p) => <p className="article-intro" key={p}>{p}</p>)}
        {article.sections.map((section) => <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}
          {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
        </section>)}
        {article.related && <nav className="related-reading" aria-label="Related reading">
          <h2>Related reading</h2>
          {article.related.map((item) => <Link key={item.href} href={item.href}>{item.label} →</Link>)}
        </nav>}
        <section className="more-insights" aria-labelledby="more-insights-heading">
          <div className="more-insights-heading">
            <h2 id="more-insights-heading">More TourAudit insights</h2>
            <Link href="/insights">View all published insights →</Link>
          </div>
          <div className="more-insights-list">
            {otherArticles.map(([slug, candidate]) => <article key={slug}>
              <p>{candidate.category} · {candidate.readTime}</p>
              <h3><Link href={`/insights/${slug}`}>{candidate.title}</Link></h3>
            </article>)}
          </div>
        </section>
        <aside className="article-cta">
          <p className="eyebrow">Review before you send</p>
          <h2>Add a structured second check to your workflow.</h2>
          <p>TourAudit helps surface potential gaps, conflicts and practical concerns while destination knowledge, live verification and professional judgment stay with you.</p>
          <a className="button" href="https://app.touraudit.com">Review an itinerary <span aria-hidden="true">→</span></a>
        </aside>
      </div>
    </article>
    <SiteFooter className="article-footer" />
  </main>;
}
