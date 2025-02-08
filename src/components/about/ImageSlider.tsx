import { IconCircleArrowLeft, IconCircleArrowRight } from "@tabler/icons-react"
import React, { useState } from "react"

type Slide = {url:string,title:string}

type ImageSliderProps = {
slides:Slide[]
}

export default function ImageSlider(props:ImageSliderProps){
  const[currentIndex,setCurrentIndex] = useState(0);

  const slideStyles: React.CSSProperties ={
    width:"100%",
    height:"100%",
    borderRadius:"10px",
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundImage:`url(${props.slides[currentIndex].url})`,
    objectFit: "cover",
  }
  function goToPrevious(){
   const isFirstSlide = currentIndex === 0
   const nextIndex = isFirstSlide ? props.slides.length -1 : currentIndex -1
   setCurrentIndex(nextIndex);
  }
  function goToNext(){
    const isLastSlide = currentIndex === props.slides.length -1;
    const nextIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(nextIndex);
  }

  return(
    <div className="h-full relative">
      <IconCircleArrowLeft className='absolute z-1 top-1/2 left-2 cursor-pointer text-amber-700 hover:text-amber-500' size={24}
      onClick={goToPrevious}
      />
      <IconCircleArrowRight className='absolute z-1 top-1/2 right-2 cursor-pointer text-amber-700 hover:text-amber-500' size={24}
      onClick={goToNext}
      />
     <div style={slideStyles}></div>
    </div>
  )
}