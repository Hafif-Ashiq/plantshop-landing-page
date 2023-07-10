import React from 'react'
import { InputField, Links } from '../components'
import { addressLinks, menuLinks, supportLinks, usefulLinks } from '../constants'

const Footer = () => {
  return (
    <section className='main-padding flex flex-col gap-[70px] justify-between items-center  bg-gradient-primary text-white' >
        <div className='flex flex-row md:flex-nowrap flex-wrap justify-between items-start md:gap-0 gap-[60px] w-full'>
            <div className='flex flex-col justify-center items-start gap-[30px]'>
                <h2 className='sm:text-[48px] text-[32px] px-[12px]'>NewsLetter</h2>
                <InputField subscribe={true} />
                
            </div>
            <Links heading={"Support"} array={supportLinks} />
            <Links heading={"Useful Links"} array={usefulLinks} />
            <Links heading={"Our Menu"} array={menuLinks} />
            <Links heading={"Address"} array={addressLinks} address={true} />
        </div>
        <div className='w-full h-[2px] bg-white  rounded-full'></div>
        <div className='flex justify-center items-center sm:text-[24px] text-[16px]'>
            © 2022 Daunku - All rights reserved.
        </div>
    </section>
  )
}

export default Footer