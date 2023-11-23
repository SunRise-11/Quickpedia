"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ArticleTitle, LoginButton, LogoutButton } from "./components";
import { useUser } from "@auth0/nextjs-auth0/client";

export interface Article {
  question: string;
  answer: string;
  topic: string;
  rank: number;
}

export default function Home() {
  const [trendingArticles, setTrendingArticles] = useState<Article[]>();
  const { user, error, isLoading } = useUser();

  const fetchTrending = async () => {
    const response = await axios.get(
      "https://quickipedia.azurewebsites.net/api/articles/top"
    );
    const data: Article[] = response.data;
    setTrendingArticles(data);
  };
  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <main className="text-slate-200 flex min-h-screen mt-10 flex-col items-center justify-between p-24">
      <h1>TRENDING</h1>
      <LoginButton />
      <h1>{user && user.name}</h1>
      <LogoutButton />
      <ol>
        {trendingArticles &&
          trendingArticles.map((article, index) => (
            <li key={index}>
              <h1>#{article.rank} Article Today</h1>
              <ArticleTitle {...article} />
            </li>
          ))}
      </ol>
    </main>
  );
}
