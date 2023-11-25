"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { Article } from "../page";
import { ArticleTitle, NavFooter} from "../components";

const Page = () => {
  const [articles, setArticles] = useState<Article[]>();
  const [filteredArticles, setFilteredArticles] = useState<Article[]>();
  const [searchedArticle, setSearchedArticle] = useState<string>();

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

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <main className="flex min-h-screen mt-10 flex-col items-center justify-between p-24">
      <div className="search-section">
        <div className="search">
          <input
            type="text"
            value={searchedArticle}
            onChange={handleSearch}
            className="search-field"
            placeholder="Search articles"
          />
        </div>
      </div>
      {searchedArticle && (
      <div className="search-results">
        {filteredArticles?.map((article) => (
            <ArticleTitle key={article.question}{...article} />
            ))}
      </div>
      )}
      <NavFooter/>
    </main>
  );
};

export default Page;