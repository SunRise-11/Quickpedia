"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { Article } from "../page";
import { ArticleTitle, NavFooter} from "../components";
import { useUser } from "@auth0/nextjs-auth0/client";
import { UserData } from "@/utils/types";

const Page = () => {
  const { user,isLoading } = useUser();
  const [articles, setArticles] = useState<Article[]>();
  const [filteredArticles, setFilteredArticles] = useState<Article[]>();
  const [searchedArticle, setSearchedArticle] = useState<string>();
  const [userBookmarks, setUserBookmarks] = useState<Article[]>();


  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredArticles = articles?.filter(
      (article) =>
        article.question.toLowerCase().includes(searchTerm) ||
        article.topic.toLowerCase().includes(searchTerm)
    );
    setSearchedArticle(searchTerm);
    setFilteredArticles(filteredArticles);
  };

  const fetchArticles = async () => {
    const response = await axios.get(
      "https://quickipedia.azurewebsites.net/api/articles"
    );
    const data: Article[] = response.data;
    setArticles(data);
    setFilteredArticles(data);
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

  return (
    <main className="flex min-h-screen mt-10 flex-col items-center justify-start py-24">
      <div className="search-section">
        <div className="search">
          <input
            type="text"
            value={searchedArticle}
            onChange={handleSearch}
            className="search-field px-3 h-10 border-rose-900 border-2 rounded max-w-xs"
            placeholder="Search articles"
          />
        </div>
      </div>
      {filteredArticles && searchedArticle ? (
        <div className="w-[80%] max-w-md">
          {filteredArticles?.length > 0 ? (
            filteredArticles.map((article) => (
              <ArticleTitle key={article.question} {...article} bookmarks={userBookmarks || []} toggleBookmark={() => handleBookmarking(user?.email || "", article)} />
            ))
          ) : (
            <div className="w-72 text-center pt-10">
            <h2 className="text-2xl font-bold">Ups! It looks like we don&apos;t have an article for {searchedArticle} yet!</h2>
          </div>
          )}
        </div>
      ) : (
        <div className="w-72 text-center pt-10">
        <h2 className="text-2xl font-bold"> Try to search for <i>&quot;kangaroos&quot;</i> and see what happens!</h2>
        </div>
      )}
      <NavFooter />
    </main>
  );
};

export default Page;
