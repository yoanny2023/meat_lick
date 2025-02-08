import React from 'react'
type AboutCardProps = {
  children?: React.ReactNode
  rounded:boolean,
  className?:string,
}
function AboutCard(props:AboutCardProps) {
  return (
    <div className={`${props.className ? props.className:""}
    ${props.rounded?"rounded-md" :""}
    text-maintext`}>
      {props.children}
    </div>
  )
}

export default AboutCard
