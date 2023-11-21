"use client"
import axios from "axios"
import { useEffect, useState } from "react";
import { Article } from "../page";
import { ArticleTitle } from "../components";

const Page = () => {
  const [allArticles, setAllArticles] = useState<Article[]>();
  const fetchArticles = async () => {
    const response = await axios.get("https://quickipedia.azurewebsites.net/api/articles");
    const data: Article[] = response.data;
    setAllArticles(data);
  }
  useEffect(() => {
    fetchArticles();
  },[])
  return (
    <main className="flex min-h-screen mt-10 flex-col items-center justify-between p-24">
      <ol>
      {allArticles && allArticles.map((article, index) => (
        <li key={index}>
            <ArticleTitle {...article} />
        </li>
         ))}
      </ol>
    </main>
  )
}

export default Page;