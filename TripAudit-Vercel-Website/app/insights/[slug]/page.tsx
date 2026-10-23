import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "../ArticlePage";
import { articles } from "../article-data";
import { isArticlePublished } from "../publication";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article || !isArticlePublished(article)) return {};
  const url = `/insights/${slug}`;
  return {
    title: article.seoTitle,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.seoTitle,
      description: article.description,
      url,
      publishedTime: article.publishDate,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article || !isArticlePublished(article)) notFound();
  return <ArticlePage article={article} />;
}
