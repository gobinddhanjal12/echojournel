import NewsCard from "../components/NewsCard/NewsCard";

type NewsArticle = {
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
};

// This is now a server component by default (no "use client" directive)
export default async function HomePage() {
    const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch news");
    }

    const data = await response.json();
    const news: NewsArticle[] = data.articles;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Latest News</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {news.map((article, index) => (
                    <NewsCard
                        key={index}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        imageUrl={article.urlToImage || "https://via.placeholder.com/150"}
                    />
                ))}
            </div>
        </div>
    );
}
