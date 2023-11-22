"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Article } from "../page";
import { ArticleTitle } from "../components";

const Page = () => {
  const [allArticles, setAllArticles] = useState<Article[]>();
  const [selected, setSelected] = useState<string>("all");

  const fetchArticles = async () => {
    const response = await axios.get(
      "https://quickipedia.azurewebsites.net/api/articles"
    );
    const data: Article[] = response.data;
    setAllArticles(data);
  };

  const handleArticleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelected(event.target.value);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const articlesToShow =
    selected === "all"
      ? allArticles
      : allArticles?.filter((article) => article.topic === selected);

  return (
    <main className="flex min-h-screen mt-10 flex-col items-center justify-between p-24">
      <label className="sr-only">Underline select</label>
      <select
        value={selected}
        onChange={handleArticleSelect}
        id="underline_select"
        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option value="all">Choose a topic</option>
        <option value="all">All</option>
        <option value="Technology">Technology</option>
        <option value="Food">Food</option>
        <option value="Geography">Geography</option>
        <option value="Animals">Animals</option>
        <option value="Pop-culture">Pop Culture</option>
      </select>
      <ol>
        {articlesToShow &&
          articlesToShow.map((article, index) => (
            <li key={index}>
              <ArticleTitle {...article} />
            </li>
          ))}
      </ol>
    </main>
  );
};

export default Page;
