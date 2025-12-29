import { NextResponse } from "next/server";

const API_KEY = process.env.NEWSAPI_KEY;

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json(
      { error: "NewsAPI key missing on server" },
      { status: 500 }
    );
  }

  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) {
    const error = await res.json();
    return NextResponse.json(
      { error: error.message || "NewsAPI request failed" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data.articles.slice(0, 5));
}
