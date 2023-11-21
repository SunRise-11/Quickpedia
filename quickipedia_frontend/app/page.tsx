"use client"
import axios from "axios"
import { useEffect, useState } from "react";


export default function Home() {
  const [trendingArticles, setTrendingArticles] = useState();

  const fetchTrending = async () => {
    const response = await axios.get("https://quickipedia.azurewebsites.net/api/articles/top");
    const data = response.data;
    setTrendingArticles(data);
  }
  useEffect(() => {
    fetchTrending();
  },[])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {}
    </main>
  )
}
