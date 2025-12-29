export async function getTopHeadlines() {
  const res = await fetch("/api/news", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || "Failed to fetch news");
  }

  return res.json();
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
