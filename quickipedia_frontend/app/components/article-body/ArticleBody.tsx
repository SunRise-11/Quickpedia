"use client"
import React from 'react'
import { Article } from "../../utils/types";

export const ArticleBody = (props: Article) => {
  return (
    <>
     <div 
     data-te-modal-init
     id="default-modal" 
     tabIndex={-1}
     aria-labelledby="exampleModalFullscreenLabel"
     aria-hidden="true" 
     className=" bg-slate-900 border border-primaryB px-6 text-slate-100 py-3 rounded-xl  mb-3 text-justify">
        {props.answer}
     </div>
    </>
  )
}
