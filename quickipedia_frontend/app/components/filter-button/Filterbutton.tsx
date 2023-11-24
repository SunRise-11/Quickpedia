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
    className="flex flex-row flex-wrap focus:outline-none text-white bg-secondary hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-small rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
        <a href={url}>
    {topic.toUpperCase()}
    </a>
    </button>
    </>
  )
}

