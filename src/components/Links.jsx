import React from 'react'

const Links = ({heading,array}) => {
  return (
    <div className='flex flex-col justify-start items-start sm:gap-[50px] gap-[30px] h-full '>
        <h2 className='sm:text-[24px] text-[18px] font-semibold'>{heading}</h2>
        <ul className='flex flex-col gap-[20px] items-start justify-start sm:text-[18px] text-[14px] h-full max-w-[350px]'>
            {array.map((item)=>(
                <li key={item.name} >
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Links