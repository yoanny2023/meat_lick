import React from 'react'

type FormInputProps = {
  type:string,
  placeholder:string,
  min?:string,
  max?:string,
  step?:string,
  value?:string,
  onChange?:(event:React.ChangeEvent<HTMLInputElement>) => void,
}
  
function FormInput(props:FormInputProps) { 

  return (
   <input className='p-2 bg-gray-800 bg-opacity-30 text-white placeholder-gray-400 
   border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600' 
   type={props.type} min={props.min} max={props.max}
    step={props.step} value={props.value}
     placeholder={props.placeholder}
     onChange={props.onChange}
     />
  )
}

export default FormInput
