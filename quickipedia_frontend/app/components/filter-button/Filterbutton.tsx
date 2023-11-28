import Link from 'next/link'
import React from 'react'

type Props ={
    topic:string
}

export const Filterbutton = ({topic}: Props) => {

    let url:string = "/articles/" + topic;

  return (
    <>
    <button type="button" 
    className="flex flex-row flex-wrap focus:outline-none text-white bg-rose-700 hover:bg-rose-500 focus:ring-4 focus:ring-rose-300 font-small rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-rose-900">
        <Link href={url}>
    {topic.toUpperCase()}
    </Link>
    </button>
    </>
  )
}

