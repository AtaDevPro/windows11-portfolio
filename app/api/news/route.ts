import { NextResponse } from "next/server";

const API_KEY = process.env.NEWSAPI_KEY;

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({ error: "API key missing" }, { status: 500 });
  }

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );

  if (!res.ok) {
    const error = await res.json();
    return NextResponse.json({ error: error.message }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data.articles.slice(0, 5));
}
