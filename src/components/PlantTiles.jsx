import React from 'react'
import { plus, rating } from '../constants'

const PlantTiles = ({name,price,img,display}) => {
  return (
    <div className={`h-[600px] min-w-[270px] ${display} items-end relative `}>
        <div className='h-[500px] bg-[#C1D0E4] relative rounded-[50px] flex flex-col justify-between items-center w-full shadow-gray-200 shadow-sm'>
            <div className='h-[270px] min-w-[200px]  absolute  top-[-100px]'>

            <img src={img} alt="" className='h-full w-full object-fit' />    
            </div>
            <div className='h-[250px] rounded-[50px] px-[40px] py-[20px] absolute w-full bottom-0 bg-white flex flex-col justify-between shadow-gray-300 shadow-md'>
                <div className=''>
                    <h2 className='text-font-color font-[500] text-[32px]'>{name}</h2>
                    <img src={rating} alt="rating" />
                </div>
                <div className='flex justify-between items-center font-[500] text-[24px]'>
                    <h2>${price}</h2>
                    <button className='w-[64px] h-[64px] green-blue-gradient rounded-full flex justify-center items-center'>
                        <img src={plus} alt="+" />
                    </button>
                </div>

            </div>

        </div>
    </div>
  )
}

export default PlantTiles