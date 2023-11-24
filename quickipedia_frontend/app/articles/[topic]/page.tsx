"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Article } from "../../page";
import { ArticleTitle, Filterbutton } from "../../components";

type DynamicUrl={
  params: {topic:string}
}

const Page = ({params}:DynamicUrl) => {
  const [allArticles, setAllArticles] = useState<Article[] | []>();

  const fetchArticles = async () => {
    const response = await axios.get(
      "https://quickipedia.azurewebsites.net/api/articles"
    );
    const data: Article[] = response.data;
    setAllArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const articlesToShow =
    params.topic === "all"
      ? allArticles
      : allArticles?.filter((article) => article.topic.toLowerCase() === params.topic);

  if(allArticles === void[]){
    return(
      <>
      <h1>It looks like we have no articles to show!</h1>
      </>
    )
  }

  function uniqueFilter( value:string, index:number, self:string[]){
    return self.indexOf(value)===index;
  }
  return (
    <main className="flex min-h-screen mt-10 flex-col items-center justify-between p-24">
      <div className=" flex flex-row flex-wrap">
      <Filterbutton topic="all"/>
      {allArticles.map((article => article.topic))
      .filter(uniqueFilter)
      .map((item, index) => {return <Filterbutton key={index} topic={item.toLowerCase()} />})}
      </div>
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
