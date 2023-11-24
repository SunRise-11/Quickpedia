import Link from 'next/link'
import React from 'react'

export const NavFooter = () => {
  return (
    <div className="sm:flex sm:items-center sm:justify-between">
    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium">
      <li>
        <Link href="/" className="hover:underline me-4 md:me-6">
          Trending
        </Link>
      </li>
      <li>
        <a href="/search" className="hover:underline me-4 md:me-6">
          Search
        </a>
      </li>
      <li>
      <button className="flex flex-row justify-center items-center font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
          <a href='/articles/all' className="  hover:underline">
            FIND ALL
          </a>
        </button>
      </li>
    </ul>
  </div>
  )
}
