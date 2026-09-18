import type { Metadata } from "next"; import ArticlePage from "../ArticlePage"; import { articles } from "../article-data";
const article=articles["10-common-itinerary-problems"];
export const metadata: Metadata={title:article.seoTitle,description:article.description,alternates:{canonical:"/insights/10-common-itinerary-problems"},openGraph:{title:article.seoTitle,description:article.description,url:"/insights/10-common-itinerary-problems"}};
export default function Page(){return <ArticlePage article={article}/>}
