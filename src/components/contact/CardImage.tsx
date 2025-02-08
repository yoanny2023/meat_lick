import Image from 'next/image'
import React from 'react';
import img1 from "@/assets/grilled-steak-kabobs.jpg"
import img2 from "@/assets/Wagyu_Steak.jpg"
import img3 from "@/assets/cocktail-juice.jpg"
import img4 from "@/assets/lamp_chpo2.jpg";

function CardImage() {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-2 bg-[#0A0B0A]'>
      <Image className='object-cover w-[300px] h-[150px] rounded-md' src={img1} width={1024} height={1024} alt='img1' />
      <Image className='object-cover w-[300px] h-[150px] rounded-md' src={img2} width={1024} height={1024} alt='img2' />
      <Image className='object-cover w-[300px] h-[150px] rounded-md' src={img3} width={1024} height={1024} alt='img3' />
      <Image className='object-cover w-[300px] h-[150px] rounded-md' src={img4} width={1024} height={1024} alt='img4' />
    </div>
  )
}

export default CardImage
