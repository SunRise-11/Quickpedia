"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ArticleTitle, LoginButton, LogoutButton, NavFooter } from "./components";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getAccessToken } from '@auth0/nextjs-auth0';
import { handleBookmarking } from "@/utils/http";
import { UserData } from "@/utils/types";


export type Article = {
  id: string;
  question: string;
  answer: string;
  topic: string;
  rank: number;
}

export default function Home() {
  const [trendingArticles, setTrendingArticles] = useState<Article[]>();
  const [userBookmarks, setUserBookmarks] = useState<Article[]>();
  const { user,isLoading } = useUser();
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

  /*type User = {
    email: string;
    bookmarks: Article[];
  }*/
  const postUserInfo = async () => {
    if (!isLoading) {
      const response = await axios.post(
        'https://quickipedia.azurewebsites.net/api/users',
        { email:user?.email,
        username: user?.name },
      );
    }
  };

  const fetchUserBookmarks = async () => {

    const response = await axios({
      method: "get",
      url: `https://quickipedia.azurewebsites.net/api/users/${user?.email}`
    });
    const userData:UserData = response.data
    const bookmarks = userData.bookmarks;

    setUserBookmarks(bookmarks)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isLoading) {
          if (user) {
            localStorage.setItem('user_id', user.email!);
            await postUserInfo();
            await fetchUserBookmarks()
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
      <h1>{user && user.name}</h1>
    {token && <p>hello</p>} {/* same here, we don't get the token */}
      <ol className="w-[80%] max-w-md">
        {trendingArticles &&
          trendingArticles.map((article, index) => (
            <li key={index}>
              <h1>#{article.rank} Article Today</h1>
              <ArticleTitle {...article} bookmarks={userBookmarks || []} toggleBookmark={(articleId) => handleBookmarking(user?.email || "", articleId)} />
            </li>
          ))}
      </ol>
      <NavFooter/>
    </main>
  );
}
