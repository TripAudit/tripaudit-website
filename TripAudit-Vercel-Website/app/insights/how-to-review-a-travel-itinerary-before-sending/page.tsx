import type { Metadata } from "next"; import ArticlePage from "../ArticlePage"; import { articles } from "../article-data";
const article=articles["how-to-review-a-travel-itinerary-before-sending"];
export const metadata: Metadata={title:article.seoTitle,description:article.description};
export default function Page(){return <ArticlePage article={article}/>}
