import React from 'react'
import { IconStarFilled } from '@tabler/icons-react'
import AboutCard from '@/components/about/AboutCard';
import { forum } from '@/styles/fonts';
import CardDetails from './CardDetails';


function AboutSectionCard() {
  return (
    <div className="grid grid-rows-3 sm:flex sm:flex-row xl:flex-grow  gap-3">
      <AboutCard rounded  className='flex flex-col justify-center items-center sm:flex-grow py-2 gap-2 bg-[#202120] border border-zinc-600' >
        <CardDetails heading="Trip Advisor" subheading="Best Meat" />
      </AboutCard>
      <AboutCard rounded className='flex flex-col justify-center items-center sm:flex-grow py-2 gap-2 bg-[#202120] bg-opacity-50 backdrop-blur-md border border-white/10 rounded-lg p-6 shadow-lg' >
        <CardDetails heading="Michelin Guide" subheading="Quality Food" />
      </AboutCard>
      <AboutCard rounded className='flex flex-col justify-center items-center sm:flex-grow py-2 gap-2 bg-[#202120] border border-zinc-600' >
        <CardDetails heading="Start Dining" subheading="Cool vibe" />
      </AboutCard>
    </div>
  )
}

export default AboutSectionCard
