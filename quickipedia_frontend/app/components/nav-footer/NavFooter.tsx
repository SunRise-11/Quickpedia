import Link from 'next/link'
import React from 'react'

export const NavFooter = () => {
  return (
    <div className=" p-2 backdrop-blur-sm drop-shadow-xl fixed z-50 w-[90%] h-16 max-w-lg -translate-x-1/2 bg-white/70  rounded-2xl bottom-4 left-1/2">
    <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
        <a href={"/"} data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-4 rounded-xl hover:bg-rose-400/30 group">
            <svg className="w-5 h-5 text-gray-700 group-hover:text-rose-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            <span className="sr-only">Home</span>
        </a>
        <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        
        
        <a href={"/articles/all"} data-tooltip-target="tooltip-new" type="button" className="inline-flex flex-col items-center justify-center px-4 rounded-xl hover:bg-rose-400/30 group">
            <svg className="w-6 h-6 text-gray-700 group-hover:text-rose-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16 8L9.5 9.5L8 16L14.5 14.5L16 8Z"/>
            </svg>
            <span className="sr-only">New item</span>
        </a>
        <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Create new item
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a href={"/search"} data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center rounded-xl justify-center px-4 hover:bg-rose-400/30 group">
            <svg className="w-5 h-5 text-gray-700 group-hover:text-rose-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"/>
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
