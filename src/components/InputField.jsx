import React from 'react'
import { search } from '../constants'


const InputField = ({subscribe,isSearch}) => {
  return (
    <div className='relative'>
        
            <input type="text" placeholder={`${isSearch? "Search plant" : "Enter your email"}`}  className='sm:px-[40px] px-[20px] md:w-[400px] w-[350px] md:py-[20px] py-[15px] sm:text-[22px] text-[18px] rounded-full bg-[rgba(255,255,255,0.25)] placeholder-white   border-[1px] border-white outline-none text-white caret-white'/>
            <button className='md:p-[12px] p-[10px] green-blue-gradient rounded-full flex items-center justify-center absolute right-[10px] top-[50%] translate-y-[-50%]'>
                <img src={search} alt="" className={`${isSearch ? "block" : "hidden"} md:w-[24px] md:h-[24px] w-[18px] h-[18px] `} />
                <p className={`${subscribe ? "block" : "hidden"} text-white text-semibold md:px-[8px] px-[4px] md:text-[18px] sm:text-[16px] text-[14px] `}>Subscribe</p>
            </button>
    </div>
  )
}

export default InputField