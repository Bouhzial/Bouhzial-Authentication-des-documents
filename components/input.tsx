import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { devNull } from 'os';
import React from 'react'


interface Props {
    type: string;
    placeholder: string;
    icon: any;
    onChange: (val: string) => void;
}
export default function Input({type,placeholder,icon,onChange}:Props) {

const [value,setValue] = React.useState<string>('')
   function handelChange(e:any){
       const val = e.target.value
       if(val){
           setValue(val)
           onChange(val)
       }
   }
  return (
    <div className='w-96 h-16 text-black text-lg font-medium m-4'>
        <input type={type} onChange={handelChange}  placeholder={placeholder} className='w-96 outline-none text-lg font-medium h-16 py-3 px-5 rounded-xl shadow-lg pointer-events-auto  focus:shadow-xl transition-all '/>
        <FontAwesomeIcon icon={icon} className='cursor-pointer relative h-6 bottom-2/3 left-80'/>
    </div>
  )
}