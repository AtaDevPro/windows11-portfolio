const API_KEY = process.env.NEXT_PUBLIC_NEWSAPI_KEY;

if (!API_KEY) {
  throw new Error(
    "NewsAPI key is missing – add NEXT_PUBLIC_NEWSAPI_KEY to environment variables"
  );
}

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
  if (!API_KEY) {
    throw new Error("news API key is missing");
  }
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;

  if (category) {
    url += `&category=${category}`;
  }

  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`NewsAPI error: ${res.status} - ${errorText}`);
  }

  const data = await res.json();
  return data.articles.slice(0, 5);
}
