import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="h-[200px] w-full p-4 bg-primary shadow md:flex md:items-center md:justify-between md:p-6  text-slate-200">
      <div className=" sm:flex sm:items-center sm:justify-between w-full">
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
