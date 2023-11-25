"use client"
import { Article } from "@/app/page";
import React, { useEffect, useState } from "react";
import { ArticleBody } from "../article-body/ArticleBody";

export const ArticleTitle = ({ question, answer, topic,rank }: Article) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selected, setSelected] = useState<boolean>(false);

  //tailwind import for initializing the modal
  /*useEffect(() => {
    const init = async () => {
      const { Modal, initTE } = await import("tw-elements");
      initTE({ Modal });
    };
    init();
  }, []);*/

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
      <button 
      type="button"
      data-te-toggle="modal"
      data-te-target="default-modal"
      data-te-ripple-init
      className="px-6 w-100 text-sm text-grey-900 py-3 rounded mt-3 mb-3 border-2 border-rose-400 bg-rose-400 text-slate-950"
      onClick={() => handleSelect({ question, answer, topic,rank })}>
        {question}
      </button>
      {selected && <ArticleBody {...{question, answer, topic,rank}} />}
    </>
  );
};
