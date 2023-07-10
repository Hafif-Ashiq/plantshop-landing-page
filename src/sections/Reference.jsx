import React from 'react'
import { ReferenceImage } from '../components'
import { bedroom, livingRoom, office } from '../constants'

const Reference = () => {
  return (
    <section className='main-padding flex flex-col justify-between items-center '>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='sm:text-[64px] text-[48px] font-medium text-font-color text-center'>Interior Plant Reference</h2>
            <p className='sm:text-[22px] text-[18px] text-center  text-font-light'>Make your home so comfortable with refreshing plants.</p>
        </div>
        <div className='flex flex-row justify-between gap-[30px] h-[1200px] py-[70px] w-full'>
            <div className='flex flex-col w-full gap-[30px]'>
               <ReferenceImage heading={"Living Room"} img={livingRoom} />
               <ReferenceImage heading={"Office"} img={office} />
            </div>
            <div className='h-full w-full md:flex hidden'>
            <ReferenceImage heading={"Bedroom"} img={bedroom} />
            </div>
        </div>
    </section>
  )
}

export default Reference