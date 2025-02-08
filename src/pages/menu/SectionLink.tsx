import React from 'react'
import Anchor from './Anchor'

function SectionLink() {
  return (
   <div className='flex flex-wrap sm:flex-nowrap flex-row gap-3 justify-center items-center mb-5'>
   <Anchor section='Meat' />
   <Anchor section='Chicken' />
   <Anchor section='Juicy' />
   <Anchor section='Alcohol' />  
   </div>
  )
}

export default SectionLink
