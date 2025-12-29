"use client";

import { useState, useEffect } from "react";
import { getTopHeadlines, NewsArticle } from "@/lib/api/news";
import Image from "next/image";
import Link from "next/link";

/**
 * A widget that displays the latest news headlines from the US.
 * It fetches the news from the News API and displays the top 4 headlines.
 * If there is an error, it displays an error message.
 * If the data is still loading, it displays a loading animation.
 */
export default function NewsWidget() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTopHeadlines("us")
      .then((articles) => {
        setNews(articles);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Cant load news");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-white/10 rounded-2xl p-6 animate-pulse">
        <div className="h-6 w-32 bg-white/20 rounded mb-4" />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex gap-4 mb-4">
            <div className="w-20 h-20 bg-white/20 rounded-lg" />
            <div className="flex-1">
              <div className="h-4 w-full bg-white/20 rounded mb-2" />
              <div className="h-4 w-3/4 bg-white/20 rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white/10 rounded-2xl p-6 text-white text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
      <h3 className="text-lg font-semibold mb-4">Top News</h3>

      <div className="space-y-4">
        {news.map((article, i) => (
          <Link
            key={i}
            href={article.url}
            target="_blank"
            className="flex gap-4 hover:bg-white/10 rounded-xl p-3 transition -mx-3"
          >
            {article.urlToImage ? (
              <div className="relative w-20 h-20 shrink-0">
                <Image
                  src={article.urlToImage}
                  alt={article.title}
                  fill
                  className="object-cover rounded-lg"
                  unoptimized
                />
              </div>
            ) : (
              <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                📰
              </div>
            )}

            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm line-clamp-2">
                {article.title}
              </h4>
              <p className="text-white/60 text-xs mt-1">
                {article.source.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
