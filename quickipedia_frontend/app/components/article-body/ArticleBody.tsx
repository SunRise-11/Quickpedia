"use client";
import React from "react";
import { Article } from "@/app/utils/types";
import Link from "next/link";
import { SpeechButton } from "../speech-button/SpeechButton";

export const ArticleBody = (props: Article) => {
  return (
    <>
      <div className=" bg-primary border border-slate-950 px-6 text-primaryB py-3 rounded-xl  mb-3 ">
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
          className="underline hover:text-secondaryB"
          target="_blank"
          href={props.source}
        >
          {"Read more at " + props.source.split(".")[1]}
        </Link>
      </div>
    </>
  );
};
