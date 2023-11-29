"use client";
import React from "react";
import { Article } from "@/app/utils/types";
import Link from "next/link";
import { SpeechButton } from "../speech-button/SpeechButton";

export const ArticleBody = (props: Article) => {
  return (
    <>
      <div className="border border-gray-200 bg-primaryB px-6 text-left text-secondary py-3 rounded-xl  mb-3 ">
        <div className="pb-2 flex ">
          <SpeechButton text={props.answer}/>
        </div>
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
};
