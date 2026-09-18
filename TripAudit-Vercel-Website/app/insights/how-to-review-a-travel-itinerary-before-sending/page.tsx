import type { Metadata } from "next"; import ArticlePage from "../ArticlePage"; import { articles } from "../article-data";
const article=articles["how-to-review-a-travel-itinerary-before-sending"];
export const metadata: Metadata={title:article.seoTitle,description:article.description,alternates:{canonical:"/insights/how-to-review-a-travel-itinerary-before-sending"},openGraph:{title:article.seoTitle,description:article.description,url:"/insights/how-to-review-a-travel-itinerary-before-sending"}};
export default function Page(){return <ArticlePage article={article}/>}
