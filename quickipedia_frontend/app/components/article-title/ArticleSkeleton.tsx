import React from "react";

type Props = {
  delay: number;
};

export const ArticleSkeleton = ({ delay }: Props) => {
  const shimmerClass = `before:animate-shimmer_2s_delay_${delay}`;

  return (
    <article
      style={{ animationDelay: `${delay}s` }}
      className={`p-4 flex flex-col w-[100%] rounded-xl mt-3 mb-3 bg-white text-slate-950 text-lg drop-shadow-xl [...]
      relative 
      before:absolute before:inset-0
      before:-translate-x-full
      before:animate-shimmer_2s_delay_${delay}
      before:bg-gradient-to-r
      before:from-transparent before:via-primary/20 before:to-transparent
      isolate
      overflow-hidden
      shadow-xl 
    shadow-black/5
      before:border-t 
    before:border-rose-100/10`}
    >
      <div
        //style={{ animationDelay: `${delay*0.2}s` }}
        className=" animate-pulse flex flex-col space-y-4"
      >
        <div className="flex justify-between">
          <h1 className="h-6 bg-gray-300 rounded w-3/4"></h1>
          <div className="h-6 bg-gray-300 rounded w-8"></div>
        </div>
        <h2 className="h-4 bg-gray-200 rounded w-5/6"></h2>
        <div className="flex justify-end space-x-2">
          <div className="h-8 bg-gray-200 rounded w-12"></div>
          <div className="h-8 bg-gray-200 rounded w-8"></div>
        </div>
      </div>
    </article>
  );
};

export default ArticleSkeleton;
