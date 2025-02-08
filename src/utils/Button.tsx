import React from 'react'

type ButtonProps = {
  children:React.ReactNode
}
function Button(props:ButtonProps) {
  return (
    <button className='absolute z-10 right-4 bottom-4 w-[250px] h-[250px] rounded-full text-white border-2 border-purple-500
    bg-red-500
    '>
      {props.children}
    </button>
  )
}

export default Button
