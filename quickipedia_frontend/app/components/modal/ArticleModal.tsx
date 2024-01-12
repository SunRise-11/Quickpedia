"use client";
import { ArticleBody } from "@/app/utils/types";
import Link from "next/link";
import React from "react";
import { SpeechButton } from "../speech-button/SpeechButton";
import ReactDOM from "react-dom";

interface ArticleModalProps extends ArticleBody {
  onClose: () => void;
}

export const ArticleModal = ({ article, onClose }: ArticleModalProps) => {
  const handleCloseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <>
      <div className="border border-gray-200 bg-primaryB px-6 text-left text-secondary py-3 rounded-xl mb-3 animate-expand lg:animate-expand_high overflow-hidden fixed top-20 left-0 right-0 mx-5 drop-shadow-lg">
        <div className="pb-2 flex justify-between">
          {<SpeechButton text={article.answer} />}
          {<button onClick={onClose}> close </button>}
        </div>
        <h1 className=" text-lg font-medium pb-2">{article.question}</h1>
        <p
          data-te-modal-init
          id="default-modal"
          tabIndex={-1}
          aria-labelledby="exampleModalFullscreenLabel"
          aria-hidden="true"
          className=" text-md mb-5"
        >
          {article.answer}
        </p>
        <Link
          className="underline hover:text-ternary"
          target="_blank"
          href={article.source}
        >
          {"Read more at " + article.source.split(".")[1]}
        </Link>
      </div>
    </>
  );
  const modalRoot = document.getElementById("modal-root");
  if (modalRoot) {
    return ReactDOM.createPortal(modalContent, modalRoot);
  }
};
