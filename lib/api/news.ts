const API_KEY = process.env.NEXT_PUBLIC_NEWSAPI_KEY;

export interface NewsArticle {
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: {
    name: string;
  };
}

export async function getTopHeadlines(
  country: string = "us",
  category?: string
): Promise<NewsArticle[]> {
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;

  if (category) {
    url += `&category=${category}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await res.json();
  return data.articles.slice(0, 5);
}
