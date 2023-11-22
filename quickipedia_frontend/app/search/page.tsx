"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Article } from '../page';
import { SearchBar } from '../components';

const Page = () => {
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
  
  return (
    <main className="flex min-h-screen mt-10 flex-col items-center justify-between p-24">
        <SearchBar/>
        </main>
  )
}

export default Page;
