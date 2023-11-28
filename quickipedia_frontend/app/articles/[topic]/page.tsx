"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Article } from "../../page";
import { ArticleTitle, Filterbutton, NavFooter } from "../../components";
import { useUser } from "@auth0/nextjs-auth0/client";
import { DynamicUrl, UserData } from "@/utils/types";

const Page = ({params}:DynamicUrl) => {
  const { user,isLoading } = useUser();
  const [allArticles, setAllArticles] = useState<Article[] | []>();
  const [userBookmarks, setUserBookmarks] = useState<Article[]>();
  
  const fetchArticles = async () => {
    const response = await axios.get(
      "https://quickipedia.azurewebsites.net/api/articles"
    );
    const data: Article[] = response.data;
    setAllArticles(data);
  };

  const fetchUserBookmarks = async () => {
    const response = await axios({
      method: "get",
      url: `https://quickipedia.azurewebsites.net/api/users/${user?.email}`
    });
    const userData:UserData = response.data
    const bookmarks = userData.bookmarks;

    setUserBookmarks(bookmarks)
  };

  const handleBookmarking = async (email: string, articleToToggle: Article) => {
    if(!userBookmarks){
      return;
    }
    if(userBookmarks?.filter(item => item.id == articleToToggle.id).length > 0){
      //console.log("you tried to remove a bookmark");
      await axios({
        method: "delete",
        url: `https://quickipedia.azurewebsites.net/api/users/${email}`,
        data: {id: articleToToggle.id}
      });
      setUserBookmarks(userBookmarks?.filter(item => item.id != articleToToggle.id));
      return;
    }
    const data = await axios({
      method: "post",
      url: `https://quickipedia.azurewebsites.net/api/users/${email}`,
      data: {id: articleToToggle.id}
    });
    const articles:Article[] =  [...userBookmarks, articleToToggle];
    setUserBookmarks(articles)
  }

  
  useEffect(() => {
    fetchArticles();
  }, []);

  const articlesToShow =
    params.topic === "all"
      ? allArticles
      : allArticles?.filter(
          (article) => article.topic.toLowerCase() === params.topic
        );

  if (allArticles === void []) {
    return (
      <>
        <h1>It looks like we have no articles to show!</h1>
      </>
    );
  }

  function uniqueFilter(value: string, index: number, self: string[]) {
    return self.indexOf(value) === index;
  }

  if (isLoading && !userBookmarks) return <div>Loading...</div>;
  if (!isLoading && !userBookmarks) fetchUserBookmarks();
 
  return (
    <main
      className="flex min-h-screen mt-10 flex-col items-center justify-start py-10 px-12">
      <div className=" flex flex-row flex-wrap">
        <Filterbutton topic="all" />
        {allArticles
          .map((article) => article.topic)
          .filter(uniqueFilter)
          .map((item, index) => {
            return <Filterbutton key={index} topic={item.toLowerCase()} />;
          })}
      </div>
      <ol className="w-[100%] max-w-md">
        {articlesToShow &&
          articlesToShow.map((article, index) => (
            <li key={index}>
              <ArticleTitle {...article} key={article.id} bookmarks={userBookmarks || []} toggleBookmark={() => handleBookmarking(user?.email || "", article)} />
            </li>
          ))}
      </ol>
      <NavFooter />
    </main>
  );
};

export default Page;
