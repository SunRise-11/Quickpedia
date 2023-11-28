"use client";

import { useEffect, useState } from "react";
import { ArticleTitle, Filterbutton, NavFooter } from "../../components";
import { useUser } from "@auth0/nextjs-auth0/client";
import { DynamicUrl, Article } from "@/app/utils/types";
import { handleBookmarking } from "@/app/utils/bookmarksUtils";
import { uniqueFilter } from "@/app/utils/utilities";
import { fetchUserBookmarks } from "@/app/utils/userBookmarksUtils";
import { fetchArticles } from "@/app/utils/articlesUtils";
import { Loading } from "@/app/components/loading/Loading";

const Page = ({ params }: DynamicUrl) => {
  const { user, isLoading } = useUser();
  const [allArticles, setAllArticles] = useState<Article[] | []>();
  const [userBookmarks, setUserBookmarks] = useState<Article[]>();

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.email) {
        console.error("User email is undefined");
        return;
      }
      try {
        const userData = await fetchUserBookmarks(user.email);
        setUserBookmarks(userData.bookmarks);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchAllArticles = async () => {
      try {
        const data = await fetchArticles();
        setAllArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    if (!isLoading && !userBookmarks) {
      fetchData();
    }

    fetchAllArticles();
  }, [user?.email, userBookmarks, isLoading]);

  const articlesToShow =
    params.topic === "all"
      ? allArticles
      : allArticles?.filter(
          (article) => article.topic.toLowerCase() === params.topic
        );

  if (isLoading || !allArticles) {
    return <Loading />;
  }
  
  return (
    <main className="flex mt-10 flex-col items-center justify-start py-10 px-12 bg-primary">
      <div className=" flex flex-row flex-wrap">
        <Filterbutton topic="all" />
        {allArticles
          ?.map((article) => article.topic)
          .filter(uniqueFilter)
          .map((item, index) => {
            return <Filterbutton key={index} topic={item.toLowerCase()} />;
          })}
      </div>
      <ol className="w-[100%] max-w-md">
        {articlesToShow &&
          articlesToShow.map((article, index) => (
            <li key={index}>
              <ArticleTitle
                {...article}
                key={article.id}
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
      <NavFooter />
    </main>
  );
};

export default Page;
