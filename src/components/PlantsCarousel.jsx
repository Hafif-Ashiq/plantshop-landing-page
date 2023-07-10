import React, { useEffect, useState } from "react";
import PlantTiles from "./PlantTiles";
import { left,right} from "../constants";

const PlantsCarousel = ({ array }) => {
  const [plant, setPlant] = useState(0);

  const handleNext = () => {
    plant === array.length - 1 ? setPlant(0) : setPlant(plant + 1);
  };
  const handlePrevious = () => {
    plant === 0 ? setPlant(array.length - 1) : setPlant(plant - 1);
  };

  return (
    <div className="md:hidden flex relative">
      
      <PlantTiles
        key={array[plant].id}
        name={array[plant].name}
        price={array[plant].price}
        img={array[plant].img}
        display={"flex"}
      />
      <button className='w-[40px] h-[40px] border-[1px] flex justify-center items-center rounded-full bg-white absolute top-[50%] right-[5px] translate-y-[-50%] z-1 shadow-gray-400 shadow-md' onClick={handleNext} >
            <img src={right} alt="" />
        </button>
        <button
        className='w-[40px] h-[40px] border-[1px] flex justify-center items-center rounded-full bg-white absolute top-[50%] left-[5px] translate-y-[-50%] z-1 shadow-gray-400 shadow-md' 
        onClick={handlePrevious}>
            <img src={left} alt="" />
        </button>
    </div>
  );
};

export default PlantsCarousel;
