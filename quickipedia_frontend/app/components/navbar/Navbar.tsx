"use server"
import React from "react";
import Link from "next/link";


export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-rose-200 text-rose-900 border-gray-200 rounded-b-2xl px-4 z-10">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap hover:text-stone-950">
            <h1 className="">Quickipedia</h1>
          </span>
        </Link>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link
            href="/about"
            className="text-sm hover:underline"
          >
            About us
          </Link>
          <Link
            href="/profile"
            className="text-sm hover:underline"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};
