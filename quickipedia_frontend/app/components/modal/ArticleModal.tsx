"use client";
import { ArticleBody } from "@/app/utils/types";
import Link from "next/link";
import React from "react";
import { SpeechButton } from "..";
import ReactDOM from "react-dom";

interface ArticleModalProps extends ArticleBody {
  onClose: () => void;
}

export const ArticleModal = (props: ArticleModalProps) => {
  const { onClose } = props;

  const handleCloseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <>
      <div className="border border-gray-200 bg-primaryB px-6 text-left text-secondary py-3 rounded-xl  mb-3 animate-expand lg:animate-expand_high overflow-hidden">
        <div className="pb-2 flex ">{<SpeechButton text={props.answer} />}</div>
        <p
          data-te-modal-init
          id="default-modal"
          tabIndex={-1}
          aria-labelledby="exampleModalFullscreenLabel"
          aria-hidden="true"
          className=" text-md mb-5"
        >
          {props.answer}
        </p>
        <Link
          className="underline hover:text-ternary"
          target="_blank"
          href={props.source}
        >
          {"Read more at " + props.source.split(".")[1]}
        </Link>
      </div>
    </>
  );
  return <div>{modalContent}</div>;
};
