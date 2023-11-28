import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="h-[50px] w-full p-4 bg-primary shadow md:flex md:items-start md:justify-between md:p-6  text-primaryB">
      <div className=" sm:flex sm:items-center sm:justify-between w-full">
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
