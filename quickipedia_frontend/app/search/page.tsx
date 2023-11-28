"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Article } from "@/app/utils/types";
import { ArticleTitle, NavFooter } from "../components";
import { useUser } from "@auth0/nextjs-auth0/client";
import { handleBookmarking } from "../utils/bookmarksUtils";
import { fetchArticles } from "../utils/articlesUtils";
import { fetchUserBookmarks } from "../utils/userBookmarksUtils";

const Page = () => {
  const { user, isLoading } = useUser();
  const [articles, setArticles] = useState<Article[]>();
  const [filteredArticles, setFilteredArticles] = useState<Article[]>();
  const [searchedArticle, setSearchedArticle] = useState<string>("");
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
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    if (!isLoading && !userBookmarks) {
      fetchData();
    }

    fetchAllArticles();
  }, [user?.email, userBookmarks, isLoading]);

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
              <ArticleTitle
                key={article.question}
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
            ))
          ) : (
            <div className="w-72 text-center pt-10">
              <h2 className="text-2xl font-bold">
                Ups! It looks like we don&apos;t have an article for{" "}
                {searchedArticle} yet!
              </h2>
            </div>
          )}
        </div>
      ) : (
        <div className="w-72 text-center pt-10">
          <h2 className="text-2xl font-bold">
            {" "}
            Try to search for <i>&quot;kangaroos&quot;</i> and see what happens!
          </h2>
        </div>
      )}
      <NavFooter />
    </main>
  );
};

export default Page;
