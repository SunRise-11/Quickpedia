import React from "react";
import ArticleSkeleton from "../article-title/ArticleSkeleton";

export const Loading = () => {
  return (
    <main className="text-primaryB bg-primary flex min-h-screen mt-20 flex-col items-center justify-between py-10">
      <h1>Loading</h1>
      <ol className="w-[80%] max-w-md">
        <h1>Loading</h1>
        <ArticleSkeleton />
        <h1>Loading</h1>
        <ArticleSkeleton />
        <h1>Loading</h1>
        <ArticleSkeleton />
      </ol>
    </main>
  )
}