"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ArticleTitle, LoginButton, LogoutButton, NavFooter } from "./components";
import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
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
    console.log('Nope'); // problem here
  }
}

  const fetchTrending = async () => {
    const response = await axios.get(
      "https://quickipedia.azurewebsites.net/api/articles/top"
    );
    const data: Article[] = response.data;
    setTrendingArticles(data);
  };

  const postUserInfo = async () => {
    if (!isLoading) {
      const response = await axios.post(
        'http://localhost:8080/api/users',
        { email:user?.email,
        username: user?.name },
      );

      console.log(response.data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isLoading) {
          if (user) {
            localStorage.setItem('user_id', user.email!);
            await postUserInfo();
            console.log(localStorage);
          } else if (!user) {
            localStorage.clear();
          }
          await fetchTrending();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [user, isLoading]);
  

  useEffect(()=>{
    getToken();
  },[])

  return (
    <main className="text-slate-800 flex min-h-screen mt-20 flex-col items-center justify-between py-10">
      <h1>TRENDING</h1>
      <LoginButton />
      <h1>{user && user.name}</h1>
    {token && <p>hello</p>} {/* same here, we don't get the token */}
      <LogoutButton />
      <ol className="w-[80%] max-w-md">
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
