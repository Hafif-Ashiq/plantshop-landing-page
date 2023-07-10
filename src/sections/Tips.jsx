import React from 'react'
import { tipsImage, tipsPlants } from '../constants'
import { Tiles } from '../components'

const Tips = () => {
  return (
    <section className='main-padding flex justify-between items-center '>

        <div className='flex flex-col gap-[80px] justify-between items-start max-md:w-full'>
            <div className='flex flex-col gap-[24px] md:items-start items-center w-full'>
                <h2 className='sm:text-[64px] text-[48px] text-font-color md:text-left text-center font-medium'>How to care for plants</h2>
                <p className='sm:text-[22px] text-[18px] text-font-light '>Take care of plants with all your heart</p>
            </div>
            <div className='flex flex-col justify-between items-start gap-[30px]'>
            {tipsPlants.map((tip)=>(
                <Tiles
                 key={tip.id}
                logo={tip.img}
                heading={tip.heading}
                exp={tip.exp}
                 />
            ))}
            </div>
        </div>
        <div className='rounded-[50px] md:flex hidden'>
            <img src={tipsImage} alt=""  className='w-full h-full'/>
        </div>
    </section>
  )
}

export default Tips