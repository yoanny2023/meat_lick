import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'
import React from 'react'
type FooterProps = {
  width?:string,
}

function Footer(props:FooterProps) { 
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-2 rounded-[24px] 
    border border-zinc-500 text-zinc-400 w-full sm:w-[75%] text-sm py-2 px-4 mb-3`}>
      <span>Allrights&copy;yoanny_{new Date().getFullYear()}</span>
      <div className='flex flex-wrap sm:flex-nowrap gap-3'>
        <a href="https://www.linkedin.com/in/yoanny-vasco-358399132/" target="_blank">{<IconBrandLinkedin className='hover:text-amber-500 rounded-full' size={24} stroke={1} />}</a>
        <a href="https://www.instagram.com/yoanny_vaal/" target="_blank">{<IconBrandInstagram className='hover:text-amber-500 rounded-full' size={24} stroke={1} />}</a>
        <a href="https://www.facebook.com/yoannyvaal.vasco" target="_blank">{<IconBrandFacebook className='hover:text-amber-500 rounded-full' size={24} stroke={1} />}</a>
      </div>
    </div>
  )
}

export default Footer
