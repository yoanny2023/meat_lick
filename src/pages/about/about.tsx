import React, { useContext } from 'react';
import AboutSection from '@/components/about/AboutSection'
import about_bg from "../../assets/about_us.jpg"
import Text from '@/components/Text';
import { forum } from '@/styles/fonts';
import { contextNavBar } from '@/data/context/NavbarProvider';
import MenuBar from '@/components/menuBar/MenuBar';
import OpenMenu from '@/components/menuBar/OpenMenu';
import AboutCard from '@/components/about/AboutCard';
import Footer from '@/components/Footer/Footer';
import { IconArrowLeftCircle, IconArrowRightCircle} from '@tabler/icons-react';
import AboutSectionCard from '@/components/about/AboutSectionCard';
import ImageSlider from '@/components/about/ImageSlider';
import { slides } from '@/data/slides/slides';
import { slides2 } from '@/data/slides/slides'; 

const containerStyle:React.CSSProperties = {
  width:"300px",
  height:"150px",
  margin:"0 auto",
  overflow: "hidden", // Ensures images don't overflow
}
function About() {
  let{menuOpen,openMenuHandler} = useContext(contextNavBar)
  return (
    <div>
    {!menuOpen ?
    (<div className="bg-[#0A0B0A] min-h-screen px-2 sm:px-3 lg:h-screen pt-3 overflow-x-hidden w-full">
     <div className={`flex flex-col lg:grid xl:grid-cols-2 gap-3 w-full h-full 
      min-h-[300px] overflow-x-hidden`}>

     <AboutSection style = {{
      backgroundImage:`url(${about_bg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
     >
      <MenuBar width="100%" gap={3} onClick={openMenuHandler} />
      <Text text='ABOUT' 
      color="#EFE7D2"
      size="7xl"
      fontForum/>
     </AboutSection>
     <AboutSection flex rows={3} gap={3} >
      <div className='grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-2 md:grid-rows-1 lg:flex-row gap-2 '>
      <AboutCard className='flex flex-col justify-center gap-1
       bg-[#202120] border border-zinc-600 w-full px-2 ' rounded>
        <h2 className={`text-3xl ${forum.className}`}>Meat Matery </h2>
        <h2 className={`text-3xl ${forum.className}`}>Redefined</h2>
        <p className="text-zinc-400">Where culinary craftsmanship meets</p>
      </AboutCard>
      <AboutCard className='mx-auto' rounded>
        <div className='w-full' style={containerStyle}>
          <ImageSlider slides={slides}/> 
        </div>
      </AboutCard>  
      </div>
      <AboutSectionCard />
      <div className='grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-2'>
      <AboutCard className='mx-auto h-full' rounded>
         <div className='w-full h-full object-cover' style={containerStyle}> 
          <ImageSlider slides={slides2}/> 
        </div>
      </AboutCard>
      <AboutCard rounded className='flex flex-col sm:gap-2 items-center justify-center p-2 border border-zinc-400'>
        <h2 className={`text-3xl flex flex-wrap sm:flex-nowrap justify-center items-center gap-2 ${forum.className}`}>
          <IconArrowRightCircle size={32} stroke={1}  />
          <span>OUR STORY</span>
          <IconArrowLeftCircle size={32} stroke={1}  />
        </h2>
        <p className="text-zinc-400">Founded with a passion for quality meats, our restaurant began as a small grill spot and grew into a beloved destination for meat lovers.</p>
      </AboutCard>
      </div>
     <div className='flex justify-center items-center'>
      <Footer /> 
     </div>
     </AboutSection>
     </div>
    </div>)
    :
    <OpenMenu onClick={openMenuHandler} />
  }
  </div>
  ) 
}

export default About
