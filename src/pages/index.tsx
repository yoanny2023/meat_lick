"use-client";
import Image from "next/image";
import Text from "../components/Text";
import home_img from "../assets/Image_Wrapper.jpg";
import land_img from "../assets/bg-nomark.jpeg";
import menu_intro from "../assets/menu_plate.jpg"
import book_us from "../assets/reservation.jpg";
import about_us from "../assets/about_us.jpg";
import MenuBar from "@/components/menuBar/MenuBar";
import { useContext, useEffect} from "react";
import OpenMenu from "@/components/menuBar/OpenMenu";
import { contextNavBar } from "@/data/context/NavbarProvider";
import gsap from "gsap";
import Button from "@/utils/Button";

export default function Home() { 

let {menuOpen,openMenuHandler} = useContext(contextNavBar);
  useEffect(()=>{
gsap.timeline({delay:1})
.fromTo(".gsap_home_menu",{x:100,opacity:0},{x:0,opacity:1,stagger:1})
.fromTo(".gsap_home_book",{x:100,opacity:0},{x:0,opacity:1,stagger:1})
.fromTo(".gsap_home_about",{x:100,opacity:0},{x:0,opacity:1,stagger:1})

  },[])  

 return (
    <div>
      {!menuOpen ?
        (<div className="flex flex-col overflow-x-hidden sm:flex-row gap-3 bg-[#0A0B0A] 
        min-h-screen sm:h-screen px-3 pt-3" >
          <div className={`h-[450px] sm:w-full sm:h-full rounded-lg
          bg-center bg-cover
          `} 
          style={{backgroundImage:`url(${land_img.src})`}}
          >
          <MenuBar onClick={openMenuHandler} /> 
          <Text 
            text="MEAT MASTERY" 
            color="#EFE7D2" 
            fontForum 
            size="7xl"
            />
          </div>
          <div className="grid grid-rows-3 gap-2 sm:gap-5 h-full w-full sm:w-[60%] md:w-[50%] lg:w-[40%] rounded-lg overflow-x-hidden">
           <Image className="gsap_home_menu h-[350px] sm:h-full  rounded-md object-cover" src={menu_intro} width={1024} height={1024} alt="image_wrapper" />
            <Image className="gsap_home_book h-[350px] sm:h-full  rounded-md object-cover " src={book_us} width={1024} height={596} alt="image_wrapper" />
            <Image className="gsap_home_about h-[350px] sm:h-full rounded-md object-cover " src={about_us} width={1024} height={1152} alt="image_wrapper" /> 
          </div> 
      </div>) : 
      <OpenMenu onClick={openMenuHandler} />
    }
  </div>  
  );
}
