"use client";
import { Article } from "@/app/utils/types";
import { BookmarkButton } from "../bookmark-button/BookmarkButton";
import React, {useState } from "react";
import { ArticleBody } from "../article-body/ArticleBody";
import { SpeechButton } from "../speech-button/SpeechButton";
import { RWebShare } from "react-web-share";

type Props = {
  toggleBookmark: () => void;
  bookmarks: Article[];
} & Article;

export const ArticleTitle = (
  {id, question, answer, topic, rank, toggleBookmark, bookmarks, source }: Props
) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selected, setSelected] = useState<boolean>(false);

  const bookmarked = bookmarks.filter(item => item.id == id).length? true : false;

  const handleSelect = (article: Article) => {
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
      <article className="group/article p-4 flex flex-col w-[100%] text-grey-900 rounded-xl mt-3 mb-3 bg-white text-slate-950 text-lg drop-shadow-xl">
        <div className="flex flex-row align-baseline justify-start p-2 rounded-lg text-left transition ease-in-out delay-150 group-hover/article:-translate-y-0.5 group-hover/article:scale-105 duration-300 ...">
        <button
          type="button"
          data-te-toggle="modal"
          data-te-target="default-modal"
          data-te-ripple-init
          className=""
          onClick={() => handleSelect({id, question, answer, topic, source, rank })}
        >
          {question}
        </button>
        <SpeechButton text={question}/>
        </div>  
        <div className="flex flex-row justify-end">
          <button
            type="button"
            className="group text-primaryB hover:text-secondaryB font-medium rounded-lg text-sm  pl-1 w-[100%] text-center"
            onClick={() => handleSelect({id, question, answer, topic, source, rank })}
          >
            <svg
              className="w-6 h-6 text-primaryB transition ease-in-out delay-150 group-hover/article:text-secondaryB"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16" />
                <path d="M7 10h10" />
                <path d="M4 14h16" />
                <path d="M9 18h6" />
              </g>
              <path d="M20,24H4c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v16C24,22.2,22.2,24,20,24z M4,2C2.9,2,2,2.9,2,4v16 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2H4z" />
            </svg>
          </button>
          <BookmarkButton isBookmarked={bookmarked} articleId={id} toggleBookmark={toggleBookmark}/>
          <RWebShare
            data={{
                title: "Share Quickipedia with your friends!",
                url: window.location.href,
            }}
        >
          <button
            type="button"
            className="group border border-secondaryB text-secondaryB hover:text-primary  hover:bg-secondaryB font-medium rounded-lg text-sm p-2.5 text-center"
          >
            <svg
              className="w-4 h-4 text-secondaryB group-hover:text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 23 23"
            >
              <path
                d="M 9 6 L 12 3 M 12 3 L 15 6 M 12 3 V 13 M 7.00023 10 C 6.06835 10 5.60241 10 5.23486 10.1522 C 4.74481 10.3552 4.35523 10.7448 4.15224 11.2349 C 4 11.6024 4 12.0681 4 13 V 17.8 C 4 18.9201 4 19.4798 4.21799 19.9076 C 4.40973 20.2839 4.71547 20.5905 5.0918 20.7822 C 5.5192 21 6.07899 21 7.19691 21 H 16.8036 C 17.9215 21 18.4805 21 18.9079 20.7822 C 19.2842 20.5905 19.5905 20.2839 19.7822 19.9076 C 20 19.4802 20 18.921 20 17.8031 V 13 C 20 12.0681 19.9999 11.6024 19.8477 11.2349 C 19.6447 10.7448 19.2554 10.3552 18.7654 10.1522 C 18.3978 10 17.9319 10 17 10"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          </RWebShare>
        </div>
      </article>
      {selected && <ArticleBody {...{id, question, answer, topic, source, rank }} />}
    </>
  );
};
