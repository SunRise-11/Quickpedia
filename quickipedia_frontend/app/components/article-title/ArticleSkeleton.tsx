import React from 'react';

export const ArticleSkeleton = () => {
  return (
    <div className="p-4 flex flex-col w-[100%] rounded-xl mt-3 mb-3 bg-white text-slate-950 text-lg drop-shadow-xl">
      <div className=" animate-pulse flex flex-col space-y-4">
        <div className="flex justify-between">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-8"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="flex justify-end space-x-2">
          <div className="h-8 bg-gray-300 rounded w-12"></div>
          <div className="h-8 bg-gray-300 rounded w-8"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSkeleton;
