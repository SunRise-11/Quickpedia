"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ArticleTitle, LoginButton, LogoutButton, NavFooter } from "./components";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getAccessToken } from '@auth0/nextjs-auth0';


export interface Article {
  question: string;
  answer: string;
  topic: string;
  rank: number;
}

export default function Home() {
  const [trendingArticles, setTrendingArticles] = useState<Article[]>();
  const { user, error, isLoading } = useUser();
  const [token,setToken]= useState<string | undefined>();


async function getToken() {
  try{
  const { accessToken } = await getAccessToken();
  setToken(accessToken);
  }catch(error){
    console.log('Nope');
  }
}


  

  const fetchTrending = async () => {
    const response = await axios.get(
      "https://quickipedia.azurewebsites.net/api/articles/top"
    );
    const data: Article[] = response.data;
    setTrendingArticles(data);
  };

  useEffect(() => {
    fetchTrending();
  },[]);

  useEffect(()=>{
    getToken();
  },[])

  return (
    <main className="text-slate-200 flex min-h-screen mt-20 flex-col items-center justify-between py-10">
      <h1>TRENDING</h1>
      <LoginButton />
      <h1>{user && user.name}</h1>
    {token && <p>hello</p>}
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
      <NavFooter/>
    </main>
  );
}
