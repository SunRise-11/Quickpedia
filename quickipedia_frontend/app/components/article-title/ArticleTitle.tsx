"use client"
import { Article } from "@/app/page";
import React, { useState } from "react";
import { ArticleBody } from "../article-body/ArticleBody";

export const ArticleTitle = ({ question, answer, topic,rank }: Article) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selected, setSelected] = useState<boolean>(false);

  const handleSelect = (article:Article) => {
    if (selectedArticle && selectedArticle.question === article.question) {
      setSelectedArticle(null);
      setSelected(false);
    } else {
      setSelectedArticle(article);
      setSelected(true);
    }
  };

  return (
    <>
      <button className="px-6 w-100 text-sm text-grey-900 py-3 rounded mt-3 mb-3 border-2 border-secondaryB bg-secondary"
      onClick={() => handleSelect({ question, answer, topic,rank })}>
        {question}
      </button>
      {selected && <ArticleBody {...{question, answer, topic,rank}} />}
    </>
  );
};
