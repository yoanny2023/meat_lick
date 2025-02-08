import React,{useState} from 'react'
import FormInput from './FormInput'
import { forum } from '@/styles/fonts'
import { IconArrowLeftCircle, IconArrowRightCircle } from '@tabler/icons-react';

function Form() {
  const[people,setPeople] = useState("1");

  function inputChangeHandler(e:React.ChangeEvent<HTMLInputElement>){
    setPeople(e.target.value);
  }

  return (
    <div className='flex flex-col p-5 sm:p-11 lg:p-9'>
      <div className='flex flex-col justify-center items-center'>
      <div className="flex gap-1 justify-center items-center">
      {<IconArrowRightCircle size={32} stroke={1} />}
      <h1 className={`${forum.className} text-maintext text-4xl sm:text-5xl mb-2`}>RESERVATION</h1>
      {<IconArrowLeftCircle size={32} stroke={1} />}
      </div>
      <p className='text-[#e5e5e5]'>Juicy, smoky, and sizzling — meat lovers rejoice here!</p>
      </div>
      <form className='flex flex-col justify-end self-center gap-3 mt-11 md:max-w-[600px] w-full'>
        <FormInput type="text" placeholder='Enter your name' /> 
        <FormInput type="tel" placeholder='Phone' /> 
        <FormInput type="email" placeholder='Email' />
        <div className='flex flex-col md:flex-row gap-2 justify-between'>
        <FormInput type="number" placeholder='1-10' min="1" step="1" max="10"
         value={people} onChange={inputChangeHandler} 
        />
        <FormInput type="date" placeholder='mm/dd/yyyy' />
        <FormInput type="time" placeholder='HH:MM:SS' />
        </div>
        <button className={`rounded-lg px-4 py-2 mt-4 text-black font-medium bg-[#d5d5d5] hover:bg-maintext`} type="submit">RESERVE</button>
      </form>
    </div>
  )
}

export default Form
