import React from "react";

const ReferenceImage = ({ img, heading, link }) => {
  return (
    <a href={link} className="relative h-full w-full cursor-pointer ">
      {/* <img src={img} alt="" className='absolute object-fit w-full' /> */}
      <div
        className={`object-fit h-full w-full rounded-[50px] group`}
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <h2 className=" md:h-full h-[20%] bg-black md:opacity-0 opacity-[0.85] bottom-0 absolute w-full
        md:group-hover:opacity-[0.5] flex justify-center items-center md:rounded-[50px] rounded-b-[50px] text-white md:text-[48px] text-[24px] font-semibold transition-all duration-[400ms]">{heading}</h2>
      </div>
    </a>
  );
};

export default ReferenceImage;
