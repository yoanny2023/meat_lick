import { forum } from '@/styles/fonts'
import { IconStarFilled } from '@tabler/icons-react'
import React from 'react'

type CardDetailsProps ={
  heading?:string,
  subheading?:string,
}

function CardDetails(props:CardDetailsProps) {
  return (
    <>
        <span className="flex gap-2" >
          <IconStarFilled size={16} color='white' stroke={1} />
          <IconStarFilled size={16} color='white' stroke={1} />
          <IconStarFilled size={16} color='white' stroke={1} />
          <IconStarFilled size={16} color='white' stroke={1} />
          <IconStarFilled size={16} color='white' stroke={1} />
          </span>
        <h2 className={`text-3xl ${forum.className}`}>{props.heading}</h2>
        <p className="text-zinc-400">{props.subheading}</p>
    </>
  )
}

export default CardDetails
