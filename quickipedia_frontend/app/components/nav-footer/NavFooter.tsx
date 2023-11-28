import Link from "next/link";
import React from "react";

export const NavFooter = () => {
  return (
    <div className=" p-2 backdrop-blur-sm drop-shadow-xl fixed z-50 w-[90%] h-16 max-w-lg -translate-x-1/2 bg-white/70  rounded-2xl bottom-4 left-1/2">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
        <Link
          href={"/"}
          data-tooltip-target="tooltip-home"
          type="button"
          className="inline-flex flex-col items-center justify-center px-4 rounded-xl hover:bg-rose-400/30 group"
        >
          <svg
            className="w-5 h-5 text-gray-700 group-hover:text-rose-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
          </svg>
          <span className="sr-only">Trending</span>
        </Link>
        <div
          id="tooltip-home"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Home
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <Link
          href={"/articles/all"}
          data-tooltip-target="tooltip-new"
          type="button"
          className="inline-flex flex-col items-center justify-center px-4 rounded-xl  text-2xl font-extrabold text-secondaryB hover:text-slate-950 hover:bg-rose-400/30 group"
        >
          Q
        </Link>
        <div
          id="tooltip-new"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Create new item
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <Link
          href={"/search"}
          data-tooltip-target="tooltip-settings"
          type="button"
          className="inline-flex flex-col items-center rounded-xl justify-center px-4 hover:bg-rose-400/30 group"
        >
          <svg
            className="w-5 h-5 text-gray-700 group-hover:text-rose-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 23 23"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            />
          </svg>
          <span className="sr-only">Settings</span>
        </Link>
        <div
          id="tooltip-settings"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Settings
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
};
