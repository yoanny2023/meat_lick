import React, {useEffect } from 'react'
import { forum } from '@/styles/fonts'
import { IconArrowLeftRhombusFilled, IconArrowRightRhombusFilled, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import { contextNavBar } from '@/data/context/NavbarProvider'
import gsap from 'gsap';

type MenuBarProps = {
  onClick: () => void
}

function OpenMenu(props:MenuBarProps) {
  /* let{menuOpen,openMenuHandler} = useContext(contextNavBar); */
  useEffect(()=>{
    gsap.timeline({delay:0.5})
    .fromTo(".gsap_open_menu",
      {scale: 0.5, opacity: 0 },{scale:1,opacity:1,duration:1, ease:"power2.out",stagger:0.5})
  },[])

  return (
    <div className='gsap_open_menu h-screen w-full bg-[#0a0b0a] p-12 sm:px-16 lg:px-40'>
      <div className={`relative flex justify-center items-center bg-[#111]
      border border-zinc-500 text-3xl sm:text-5xl h-full rounded-lg text-[#EFE7D2] ${forum.className}`} >
        
      <div className={`absolute top-4 left-4 rounded-md border border-[#EFE7D2]
        hover:cursor-pointer
        `}> 
          <IconX size={32} stroke={1} onClick={props.onClick}/>
      </div>

        <ul className='flex flex-col justify-center items-center gap-4 p-5 
        [&>li:not(:nth-child(1)):not(:nth-child(8)):hover]:text-amber-200 [&>li:not(:nth-child(1)):not(:nth-child(8)):hover]:cursor-pointer
        '>
          <li className='text-[#EFE7D290]'><IconArrowLeftRhombusFilled size={32} stroke={1} /></li> 
          <li onClick={props.onClick}><Link href="/menu/main_menu">MENU</Link></li>
          <li onClick={props.onClick}><Link href="/reservation/reservation">RESERVATION</Link></li>
          <li onClick={props.onClick}><Link href="/about/about">ABOUT US</Link></li>
          <li onClick={props.onClick}><Link href="/contact/contact">CONTACT</Link></li>
          <li className='text-[#EFE7D290]'><IconArrowRightRhombusFilled size={32} stroke={1} /></li>
        </ul>
      </div>
    </div>
  )
}

export default OpenMenu
