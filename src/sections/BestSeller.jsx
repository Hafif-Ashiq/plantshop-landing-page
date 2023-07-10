import React from 'react'
import { arrowRight, bestPlants } from '../constants'
import PlantTiles from '../components/PlantTiles'
import PlantsCarousel from '../components/PlantsCarousel'

const BestSeller = () => {
  return (
    <section className='main-padding flex md:flex-row flex-col justify-between items-center text-font-color'>
        <div className='flex flex-col  md:items-start items-center'>
            <h1 className='md:text-[64px] text-[48px] font-medium'>Best Seller </h1>
            <h1 className='md:text-[64px] text-[48px] font-medium'>Products</h1>
            <button className='flex justify-start gap-[20px] items-center text-font-light hover:underline '>
                <p className='md:text-[24px] text-[18px]'>See All collection</p>
                <img src={arrowRight} alt="" />
            </button>
        </div>

        
        {bestPlants.map((plant) => (
            <PlantTiles
            key={plant.id}
            name={plant.name}
            price={plant.price}
            img={plant.img}
            display={"md:flex hidden"}
             />
        ))}

        <PlantsCarousel array={bestPlants} />
    </section>
  )
}

export default BestSeller