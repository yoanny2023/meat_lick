import React, { useEffect } from 'react'
import menuItems from "../../data/food/food"
import Image from 'next/image'
import { forum } from '@/styles/fonts';
import { IconArrowLeftCircle, IconArrowRightCircle } from '@tabler/icons-react';

type MenuItemProps = {
  category:string,
}

function MenuItem(props:MenuItemProps) {

  return (
    <div className=' border border-dashed border-zinc-500 
    rounded-[24px] py-7 px-5 sm:px-9 sm:mx-10 mb-5' 
    >
    <div className={`flex gap-2 justify-center items-center text-maintext ${forum.className}`}>
      <IconArrowRightCircle size={32} stroke={1} />
      <h2 className={`text-5xl text-center mb-3`}>{props.category}</h2>
      <IconArrowLeftCircle size={32} stroke={1} />
    </div>
    
      {menuItems.filter((item) => {
        return item.category === props.category
      }).map((item,index) => {
        return (
          <section key={index} id={props.category} 
          className='flex flex-col gap-6 md:grid md:grid-cols-[1fr,2fr] items-center 
          mb-5 text-maintext p-2 sm:p-7 scroll-mt-20 border border-zinc-500
          rounded-md
          '
          >
            <div className='w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] border border-maintext rounded-full overflow-hidden  bg-[#0a0b0a]'>
            <Image className="w-full h-full rounded-full object-cover" 
              src={item.image} width={180} height={180} alt={item.name} />
            </div>
            <div className='flex flex-col gap-3 w-full'>
              <div className='flex gap-1 sm:gap-2 w-full'>
                <h3 className={`${forum.className} text-lg sm:text-2xl lg:text-3xl flex-grow`}>{item.name}</h3>
                <span className='text-zinc-400 sm:flex-grow'>---</span>
                <p className='pl-1 sm:pl-3 text-sm sm:text-lg font-medium text-amber-500'>$ {item.price}</p>
              </div>
              <p className="text-sm sm:text-sm lg:text-lg text-gray-300 w-full sm:w-[70%] font-serif">{item.description}</p>
            </div>
          </section>
        )
      })
      }    
    </div>
  )
}

export default MenuItem
