import React,{ useEffect} from 'react'
import { forum } from '@/styles/fonts'
import { IconMenu3 } from '@tabler/icons-react'
import Link from 'next/link'
import gsap from "gsap";

type MenuBarProps = {
  onClick: () => void,
  width?:string,
  gap?:number,

}

function MenuBar(props:MenuBarProps) {

  useEffect(()=>{
    gsap.timeline({delay:0.5})
    .fromTo(".gsap-menubar",{y:-100,opacity:0},{y:0,opacity:1,stagger:0.5})
    },[]);

  return (
    <div className={`inline-flex w-full sm:w-[87%] md:w-[95%] text-maintext ml-2 mt-8 sm:ml-16 md:ml-16 ${forum.className}
    
    `}>
      <ul className={`gsap-menubar bg-[#b8860b20] backdrop-blur-md border border-[#b8860b50] rounded-lg shadow-md text-maintext flex items-center gap-3 sm:gap-${props.gap??3} 
      py-2 px-4 sm:px-7 md:p-2 lg:py-2 lg:px-4 border border-[#EFE7D2] rounded-lg w-[${props.width}] 
      `}>
        <li className='rounded-md p-[2px] border border-[#EFE7D2]
        hover:cursor-pointer'>
          {<IconMenu3 onClick={props.onClick} size={24} stroke={1}/>}
        </li>
        <li className='mr-auto tracking-widest text-lg sm:text-xl'><Link href="/">MeatLick</Link></li>
        <Link className='hidden md:block' href="/menu/main_menu"><li className='px-4 py-2 hover:bg-zinc-800 transition duration-300 hover:rounded-md'>MENU</li></Link>
        <Link className='hidden md:block' href="/about/about/"><li className="px-4 py-2 hover:bg-zinc-800 transition duration-300 hover:rounded-md">ABOUT</li></Link>
        <Link href="/reservation/reservation"><li className='bg-[#181818] px-4 py-2 text-[12px] sm:px-4 sm:text-base hover:bg-zinc-800 transition duration-300 rounded-md' >BOOK A TABLE</li></Link>
      </ul>
    </div>
  )
}

export default MenuBar
