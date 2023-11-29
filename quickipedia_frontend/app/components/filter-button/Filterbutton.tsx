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
    className="flex flex-row flex-wrap focus:outline-none text-secondary bg-primaryB betterhover:hover:bg-ternary betterhover:hover:text-primaryB rounded-xl text-sm px-3 py-1.5 me-2 mb-2">
        <Link href={url}>
    {topic.toUpperCase()}
    </Link>
    </button>
    </>
  )
}

