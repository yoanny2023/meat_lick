import React, { useContext } from 'react'
import bg_tile from "@/assets/bg-tile.jpg"
import MenuBar from '@/components/menuBar/MenuBar'
import { contextNavBar } from '@/data/context/NavbarProvider'
import OpenMenu from '@/components/menuBar/OpenMenu';
import Text from '@/components/Text';
import reserve from "@/assets/reservation/reservation.jpg"
import Form from '@/components/reservation/Form';
import Footer from '@/components/Footer/Footer';

function Reservation() {
  const{menuOpen,openMenuHandler} = useContext(contextNavBar);
  
  return (
    <div>
     {!menuOpen ?
     (<div className='flex flex-col min-h-screen xl:grid xl:grid-cols-2 xl:h-screen  gap-2 bg-[#0A0B0A] p-3 bg-center bg-cover 
      overflow-x-hidden sm:overflow-hidden w-full' 
      style={{backgroundImage:`url(${bg_tile.src})`}}>
      <div className='text-white bg-center bg-cover rounded-xl 
       w-full h-full min-h-[300px]' 
       style={{
        backgroundImage:`url(${reserve.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'}}
      >
      {!menuOpen && <MenuBar onClick={openMenuHandler} />} 
      <Text text='BOOK A TABLE'
      color="#EFE7D2"
      size="6xl"
      fontForum
      />
      </div>
      <div className='flex flex-col gap-3 text-white p-1 sm:p-3 md:px-5 lg:pb-1 
      border border-dashed border-zinc-500 rounded-xl w-full'>
        <Form />
        <div className='flex justify-center items-center flex-grow'> 
          <Footer  />
        </div>
      </div>
    </div>)
    :
    <OpenMenu onClick={openMenuHandler} />
    }
    </div>
   
  )
}

export default Reservation
