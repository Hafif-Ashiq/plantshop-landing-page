import React, { useEffect, useState } from 'react'

import { InputField } from '../components'
import { arrowDown } from '../constants'


const Hero = () => {

  const [top,setTop] = useState(true)

  useEffect(()=>{
    const handleTop = () =>{
      window.scrollY === 0 ? setTop(true) : setTop(false)
    }
    window.addEventListener("scroll",handleTop)

    return () => window.removeEventListener("scroll",handleTop)
  },[])

  return (
    <section className={`main-padding bg-hero-image bg-center  bg-cover top-[-30%] bg-no-repeat flex flex-col justify-center items-center text-white gap-[30px] h-screen`}>
        <h2 className='xl:text-[82px] md:text-[64px] sm:text-[48px] text-[32px] font-bold w-full text-center'>Bring Serenity to Your Place
 With Interior Plants</h2>
        <p  className='md:text-[24px] text-[18px] text-center md:w-[60%] w-full'>find your dream plant for you home decoration with us, and we will make it happen.</p>
        <InputField isSearch={true} />
        <div className={`${top? "opacity-1" : "opacity-0"} h-[80px] w-[80px] md:flex hidden justify-center items-center transition-all duration-400 bg-white rounded-full absolute bottom-[50px] cursor-pointer z-10`} onClick={() => window.scrollBy(0,window.innerHeight)}>
          <img src={arrowDown} className='w-[72px] h-[72px]' alt="" />
        </div>
        <div className='absolute bg-gradient-to-t from-white to-transparent bottom-0 h-[15vh] w-full'></div>
     </section>
  )
}

export default Hero