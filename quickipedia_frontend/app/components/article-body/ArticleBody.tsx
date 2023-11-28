"use client";
import React from "react";
import { Article } from "@/app/utils/types";
import Link from "next/link";

export const ArticleBody = (props: Article) => {
  console.log(props);
  return (
    <>
      <div className=" bg-slate-800 border border-primaryB px-6 text-slate-100 py-3 rounded-xl  mb-3 ">
        <h1 className="pb-2 font-medium">Answer:</h1>
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
