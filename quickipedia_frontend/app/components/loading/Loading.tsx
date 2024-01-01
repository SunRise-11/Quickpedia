import React from "react";
import ArticleSkeleton from "../article-title/ArticleSkeleton";

export const Loading = () => {
  return (
    <main className="flex mt-10 flex-col items-center justify-start py-10 px-8">
      <section className="w-[100%] md:w-[90%] lg:w-[73%]">
        <div className="flex items-center pr-11 text-left mr-auto">
          <h1 className="text-primaryB flex items-start mb-3 text-4xl font-bold">
            Loading...
          </h1>
        </div>{" "}
        <ol className="sm:max-w-md sm:grid-cols-none md:grid md:grid-cols-2 md:gap-x-4 lg:gap-x-6 md:max-w-none">
          <ArticleSkeleton delay={1}/>
          <ArticleSkeleton delay={2}/>
          <ArticleSkeleton delay={3}/>
          <ArticleSkeleton delay={4}/>
          <ArticleSkeleton delay={5}/>
        </ol>
      </section>
    </main>
  );
};
