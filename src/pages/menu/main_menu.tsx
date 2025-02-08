"use-client";
import React, { useContext, useEffect } from 'react'
import bg_tile from "../../assets/bg-tile.jpg"
import MenuBar from '@/components/menuBar/MenuBar'
import { contextNavBar } from '@/data/context/NavbarProvider'
import OpenMenu from '@/components/menuBar/OpenMenu'
import Image from 'next/image'
import main_meal from "../../assets/main_dish.jpg"
import { forum } from '@/styles/fonts'
import MenuItem from './MenuItem';
import SectionLink from './SectionLink';
import Footer from '@/components/Footer/Footer';
import gsap from 'gsap';

function MainMenu() {
let {menuOpen,openMenuHandler} = useContext(contextNavBar);
useEffect(()=>{
  gsap.timeline({delay:0.5})
  .fromTo(".gsap_main_meal",
    {scale: 0.5, opacity: 0 },{scale:1,opacity:1,duration:2, ease:"power2.out",stagger:0.5})
},[])

  return (
    <div className='flex flex-col items-center bg-[#0A0B0A] h-screen
     px-2 sm:px-5 bg-center bg-cover overflow-x-hidden'
    style={{backgroundImage:`url(${bg_tile.src})`}}   
    >
      {!menuOpen && <MenuBar onClick={openMenuHandler} />}
      
      {menuOpen ?
        <OpenMenu onClick={openMenuHandler} /> 
        : 
        <div className='w-full'>
          <video className='gsap_main_meal h-[45vh] sm:h-[70vh] mt-7 mx-auto border border-[#EFE7D250] rounded-2xl object-cover shadow-xl'
           src="/video_bg.mp4"
          controls autoPlay loop muted
          ></video>
          <h1 className={`mt-7 mb-7 text-center text-[#EFE7D2] text-4xl sm:text-7xl ${forum.className}`}>MENU</h1>
          <SectionLink />
          <MenuItem category='Meat' />
          <MenuItem category='Chicken' />
          <MenuItem category='Juicy' />
          <MenuItem category='Alcohol' />
        </div>        
        }
        <Footer />
    </div>
  )
}

export default MainMenu;

