import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-100 border-gray-200">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 hover:text-gray-400">
            Quickipedia
          </span>
        </Link>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link
            href="/about"
            className="text-sm  text-gray-900 hover:underline"
          >
            About us
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center max-w-screen-xl px-4 py-3 mx-auto">
        <button className="flex flex-row justify-center items-center font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
          <Link
            href="/"
            className="text-gray-900 hover:underline"
            aria-current="page"
          >
            TRENDING
          </Link>
        </button>
        <button className="flex flex-row justify-center items-center font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
          <Link href="/allArticles" className="text-gray-900 hover:underline">
            FIND ALL
          </Link>
        </button>
      </div>
    </nav>
  );
};
