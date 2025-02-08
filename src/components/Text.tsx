import React, { useEffect } from 'react';
import { forum } from "@/styles/fonts"; // Import the font
import gsap from 'gsap';

type TextProps = {
  text:string,
  color?:string,
  size?:string,
  fontForum?:boolean,
}
function Text(props:TextProps) {
 
useEffect(()=>{
gsap.timeline({delay:1})
.fromTo(".gsap_home_text",{x:-100,opacity:0},{x:0,opacity:1,stagger:0.5})
},[])

  return (
    <div className={ props.fontForum ? forum.className : ""}>
      <p className={`gsap_home_text text-maintext inline-flex flex-wrap w-[50%]
       text-2xl sm:text-7xl lg:text-8xl ml-2 sm:ml-16 mt-28 sm:mt-64 
       drop-shadow-lg text-${props.size ?? ""}
        `}>{props.text}</p> 
    </div>
  )
}

export default Text

//ml-16 mt-64 --was in p tag