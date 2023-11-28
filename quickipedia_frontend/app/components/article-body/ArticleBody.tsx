"use client";
import React from "react";
import { Article } from "@/app/utils/types";
import Link from "next/link";
import { SpeechButton } from "..";

export const ArticleBody = (props: Article) => {
  return (
    <>
      <div className=" bg-slate-800 border border-primaryB px-6 text-slate-100 py-3 rounded-xl  mb-3 ">
        <div className="pb-2 flex flex-row align-baseline justify-between">
          <h1 className="font-medium">Answer:</h1>
          <SpeechButton text={props.answer}/>
        </div>
        <p
          data-te-modal-init
          id="default-modal"
          tabIndex={-1}
          aria-labelledby="exampleModalFullscreenLabel"
          aria-hidden="true"
          className="text-justify mb-5"
        >
          {props.answer}
        </p>
        <Link
          className="hover:underline hover:text-white"
          target="_blank"
          href={props.source}
        >
          {"Read more at " + props.source.split(".")[1]}
        </Link>
      </div>
    </>
  );
};
