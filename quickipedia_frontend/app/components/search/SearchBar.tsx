"use client"
import { Article } from "@/app/page";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const SearchBar = () => {
  const [articles, setArticles] = useState<Article[]>();
  const [searchedArticle, setSearchedArticle] = useState<Article>();

  const fetchArticles = async () => {
    const response = await axios.get(
      "https://quickipedia.azurewebsites.net/api/articles"
    );
    const data: Article[] = response.data;
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return <div>SearchBar</div>;
};
