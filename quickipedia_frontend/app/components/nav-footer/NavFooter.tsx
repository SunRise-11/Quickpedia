import Link from 'next/link'
import React from 'react'

export const NavFooter = () => {
  return (
    <div className="backdrop-blur-sm drop-shadow-xl fixed z-50 w-[90%] h-16 max-w-lg -translate-x-1/2 bg-white/70  rounded-2xl bottom-4 left-1/2">
    <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
        <a href={"/"} data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-2xl hover:bg-rose-100 group">
            <svg className="w-5 h-5 mb-1 text-gray-700 group-hover:text-rose-600 dark:group-hover:text-rose-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            <span className="sr-only">Home</span>
        </a>
        <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        
        <div className="flex items-center justify-center">
            <a href={"/articles/all"} data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-rose-700 rounded-full hover:bg-rose-800 group focus:ring-4 focus:ring-rose-300 focus:outline-none dark:focus:ring-rose-800">
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                </svg>
                <span className="sr-only">New item</span>
            </a>
        </div>
        <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Create new item
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a href={"/search"} data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center rounded-e-2xl justify-center px-5 hover:bg-rose-100 group">
            <svg className="w-5 h-5 mb-1 text-gray-700 group-hover:text-rose-600 dark:group-hover:text-rose-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
            </svg>
            <span className="sr-only">Settings</span>
        </a>
        <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Settings
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        
    </div>
</div>
  )
}
