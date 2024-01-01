import Link from 'next/link'
import React from 'react'

type Props ={
  topic: string;
  selected: boolean;
}

export const Filterbutton = ({topic, selected}: Props) => {

    let url:string = "/articles/" + topic;

    let colorScheme = selected ? "bg-secondaryB text-white" : "bg-primaryB text-secondary ";
  return (
    <>
      <button type="button"
        className={colorScheme + "flex flex-row flex-wrap focus:outline-none betterhover:hover:bg-ternary betterhover:hover:text-primaryB rounded-xl text-sm px-3 py-1.5 me-2 mb-2"}>
        <Link href={url}>
    {topic.toUpperCase()}
    </Link>
    </button>
    </>
  )
}

