"use client"
import React from 'react'
import { Article } from "@/app/page";

export const ArticleBody = (props: Article) => {
  return (
    <>
     <article className=" bg-slate-900 px-6 w-86 text-slate-100 py-3 rounded  mb-3 text-justify">
        {props.answer}
     </article>
    </>
  )
}
