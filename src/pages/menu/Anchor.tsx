import React from 'react'
type AnchorProps = {
  section:string,
}
function Anchor(props:AnchorProps) {
  return (
      <a className='px-4 py-2 text-maintext bg-[#0a0b0a] hover:bg-zinc-800 rounded-lg border border-zinc-700 transition duration-300' href={`#${props.section}`}>{props.section}</a>
  )
}

export default Anchor
