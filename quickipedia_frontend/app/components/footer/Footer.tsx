import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="h-[50px] w-full p-4 p-6 mb-36 text-primaryB text-center">
      <div className="flex items-center justify-center w-full">
        <span className="text-sm text-center hover:underline">
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
