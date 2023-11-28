"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { LoginButton } from "../login-button/LoginButton";
import { LogoutButton } from "../logout-button/LogoutButton";

export const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const { user } = useUser();

  const toggleSideMenu = () => {
    setIsSideMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 w-full bg-primary text-primaryB  px-4 z-10">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap hover:text-secondaryB">
            <h1 className="">Quickipedia</h1>
          </span>
        </Link>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          {user ? <LogoutButton /> : <LoginButton />}
          <div className="navbar-end">
            <div className="relative">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
                onClick={toggleSideMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              {isSideMenuOpen && (
                <div className="fixed top-0 left-0 h-full w-full text-primary text-2xl bg-primaryB border-l border-gray-200 shadow z-50 flex flex-col">
                  <div className="p-4">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle self-start"
                      onClick={toggleSideMenu}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                  <ul className="menu menu-sm p-2 text-center flex-grow">
                    {user && (
                      <li>
                        <Link
                          href="/profile"
                          className="hover:underline italic"
                        >
                          PROFILE
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link href="/about" className="hover:underline italic">
                        ABOUT US
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
