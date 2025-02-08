import React from 'react';

type AboutSectionProps = {
  children: React.ReactNode,
  style?:React.CSSProperties,
  flex?:boolean,
  grid?:boolean,
  cols?:number,
  rows?:number,
  gap?:number,
}

function AboutSection(props:AboutSectionProps) {

  return (
    <div>
      <div className={`${props.grid ? "grid" :""} grid-rows-${props.rows} gap-${props.gap}
      h-full bg-center bg-cover
      ${props.flex ? "flex flex-col gap-3" :""}
      `}
      style={props.style}
      >
      {props.children}
      </div>
    </div>
   
  )
}

export default AboutSection
