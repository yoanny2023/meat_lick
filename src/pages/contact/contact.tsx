import React, { useContext } from 'react'
import bg_tile from "@/assets/bg-tile.jpg"
import MenuBar from '@/components/menuBar/MenuBar'
import { contextNavBar } from '@/data/context/NavbarProvider'
import OpenMenu from '@/components/menuBar/OpenMenu';
import Text from '@/components/Text';
import Footer from '@/components/Footer/Footer';
import contact from "@/assets/grilled-steak-kabobs.jpg"
import ContactDetail from '@/components/contact/ContactDetail';
import CardImage from '@/components/contact/CardImage';
import { IconArrowLeftCircle, IconArrowRightCircle } from '@tabler/icons-react';
import { forum } from '@/styles/fonts';

function Contact() {
  const{menuOpen,openMenuHandler} = useContext(contextNavBar);
  return (
    <div>
     {!menuOpen ?
     (<div className='flex flex-col sm:grid lg:grid-cols-2 gap-2 bg-[#0A0B0A] min-h-screen md:min-h-screen p-3 bg-center bg-cover overflow-hidden' 
      style={{backgroundImage:`url(${bg_tile.src})`}}>
      <div className='text-white bg-center bg-cover rounded-xl w-full h-full min-h-[300px]' 
      style={{backgroundImage:`url(${contact.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'}}
      >
      {!menuOpen && <MenuBar onClick={openMenuHandler} />} 
      <Text text='CONTACT'
      color="#EFE7D2"
      size="6xl"
      fontForum
      />
      </div>
      <div className='flex flex-col gap-3 text-white p-3 border border-dashed border-zinc-500 rounded-xl'>
      <div className="flex flex-col md:flex-row gap-2">
        <ContactDetail >
          <div className={`flex flex-col justify-center items-center p-2 h-full rounded-lg text-maintext border border-zinc-500 ${forum.className}`} >
            <div className="flex gap-1 justify-center items-center ">
            {<IconArrowRightCircle size={32} stroke={1} />}
            <h2 className='text-2xl'>OPENING HOURS</h2>
            {<IconArrowLeftCircle size={32} stroke={1} />}
            </div>  
            <div className='flex flex-col gap-1'>
              <span>Mon ----- 9:00  -  22:30</span>
              <span>Tue ----- 9:00  -  22:30</span>
              <span>Thu ----- 9:00  -  22:30</span>
              <span>Fri ----- 9:00  -  22:30</span>
              <span>Sat ----- 9:00  -  21:00</span>
            </div>
          </div>
        </ContactDetail>
        <CardImage />
      </div>
      <div className={`flex flex-col gap-3 justify-center items-center flex-grow rounded-lg bg-[#0A0B0A] border border-zinc-500 text-maintext ${forum.className}`}>
      <ContactDetail>
        <div className='flex flex-col justify-center items-center gap-2 '>
        <div className="flex gap-1 justify-center items-center ">
        {<IconArrowRightCircle size={32} stroke={1} />}
        <h2 className='text-2xl'>OPENING HOURS</h2>
        {<IconArrowLeftCircle size={32} stroke={1} />}
       </div>
        <div className='flex gap-2'>
        <span>ADDRESS:</span>
        <p>47A Kilamba-street, Angola-Luanda</p>
        </div>
        <div className='flex gap-2'>
        <span>EMAIL:</span>
        <p>meatleak_2025@gmail.com</p>
        </div>
        <div className='flex gap-2'>
        <span>PHONE:</span>
        <p>+244943997788</p>
        </div>
        </div>
      </ContactDetail>
      </div>
      <div className='w-full flex justify-center items-center'>
      <Footer />
      </div>
     
      </div>
    </div>)
    :
    <OpenMenu onClick={openMenuHandler} />
    }
    </div>
  )
}

export default Contact
