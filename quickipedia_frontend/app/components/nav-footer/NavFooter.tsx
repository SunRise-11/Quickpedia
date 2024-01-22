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
            className="w-6 h-6 text-gray-700 group-hover:text-rose-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 22"
          >
            <path d="M20 15.0002C20 19.2547 17.3819 21.1216 15.3588 21.7512C14.9274 21.8854 14.6438 21.3825 14.9019 21.0116C15.7823 19.7464 16.8 17.8161 16.8 16.0002C16.8 14.0496 15.1559 11.7467 13.8721 10.3263C13.5786 10.0016 13.0667 10.2164 13.0507 10.6539C12.9976 12.1031 12.7689 14.042 11.7828 15.5616C11.6241 15.8062 11.2872 15.8264 11.1063 15.5977C10.7982 15.208 10.4901 14.7267 10.182 14.3464C10.016 14.1416 9.71604 14.1388 9.52461 14.32C8.77825 15.0267 7.73333 16.1288 7.73333 17.5002C7.73333 18.4301 8.0936 19.405 8.50007 20.1893C8.72368 20.6208 8.32607 21.1402 7.89573 20.9144C6.11307 19.9789 4 18.0838 4 15.0002C4 11.8538 8.31029 7.49503 9.95605 3.37712C10.2157 2.72733 11.0161 2.42199 11.5727 2.84603C14.9439 5.41409 20 10.3783 20 15.0002Z"/>
          </svg>
          <span className="sr-only">Trending</span>
        </Link>
        <div
          id="tooltip-home"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Trending
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <Link
          href={"/articles/all"}
          data-tooltip-target="tooltip-new"
          type="button"
          className="inline-flex flex-col items-center justify-center px-4 rounded-xl  text-2xl font-extrabold text-gray-700 hover:text-rose-500 hover:bg-rose-400/30 group"
        >
          Q
        </Link>
        <div
          id="tooltip-new"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          All
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
          Search
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
};
