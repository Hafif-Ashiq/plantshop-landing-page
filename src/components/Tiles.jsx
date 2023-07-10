import React from 'react'

const Tiles = ({logo,heading,exp}) => {
  return (
    <div className='flex justify-start items-center md:gap-[30px] gap-[20px] font-work-sans text-font-color'>
      <div className='md:w-[84px] md:h-[84px] sm:w-[64px] sm:h-[64px] w-[48px] h-[48px] flex justify-center items-center'>
        <img src={logo} alt="" className='w-full h-full ' />
      </div>
      <div className='flex flex-col justify-between items-start'>
        <h2 className='md:text-[24px] sm:text-[20px] text-[18px] font-medium'>{heading}</h2>
        <p className='md:text-[18px] text-[16px] max-w-[500px]'>{exp}</p>
      </div>

    </div>
  )
}

export default Tiles