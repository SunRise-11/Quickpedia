"use client";
import { useEffect, useState } from "react";
import { ArticleTitle, NavFooter } from "./components";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Article } from "@/app/utils/types";
import { Loading } from "./components/loading/Loading";
import { handleBookmarking } from "./utils/bookmarksUtils";
import { fetchUserBookmarks } from "./utils/userBookmarksUtils";
import { fetchTrending } from "./utils/articlesUtils";
import { postUserInfo } from "./utils/userUtils";

export default function Home() {
  const [trendingArticles, setTrendingArticles] = useState<Article[]>();
  const [userBookmarks, setUserBookmarks] = useState<Article[]>();
  const { user, isLoading } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.email) {
        localStorage.clear();
        //console.error("User email is undefined");
        return;
      }
      try {
        localStorage.setItem("user_id", user.email!);
        await postUserInfo(user.email!, user.name!);
        const userData = await fetchUserBookmarks(user.email);
        setUserBookmarks(userData.bookmarks);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchTrendingArticles = async () => {
      try {
        const data = await fetchTrending();
        setTrendingArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    if (!isLoading && !userBookmarks) {
      fetchData();
    }

    fetchTrendingArticles();
  }, [user?.email, userBookmarks, isLoading, user?.name]);

  if (isLoading || !trendingArticles) {
    return <Loading />;
  }
  return (
    <main className=" text-primaryB bg-slate-50 flex min-h-screen mt-20 flex-col items-center py-10">
      <h1 className=" flex items-start mb-3 text-left text-4xl font-bold italic">TRENDING TODAY</h1>
      <ol className="w-[80%] max-w-md">
        {trendingArticles &&
          trendingArticles.map((article, index) => (
            <li key={index}>
              <h2 className="text-xl mb-0">#{article.rank} Article Today</h2>
              <ArticleTitle
                {...article}
                bookmarks={userBookmarks || []}
                toggleBookmark={() =>
                  handleBookmarking(
                    user?.email || "",
                    article,
                    userBookmarks,
                    setUserBookmarks
                  )
                }
              />
            </li>
          ))}
      </ol>
    </main>
  );
}
