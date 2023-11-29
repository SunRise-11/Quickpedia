import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="h-[50px] w-full p-4 md:flex md:items-start md:justify-between md:p-6 mb-32 text-primaryB text-center">
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
