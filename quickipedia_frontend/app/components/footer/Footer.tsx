import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-slate-100 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6  text-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between w-full">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <a href="/search" className="hover:underline me-4 md:me-6">
                Search
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <span className="text-sm sm:text-center hover:underline">
          © 2023{" "}
          <Link
            href="https://github.com/ComplotTeam/Quickipedia"
            className="hover:underline"
          >
            Quickipedia™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
