import React, { useEffect, useState } from "react";
import { cartIcon, menu, navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [navTop, setNavTop] = useState(true);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.screenY);
      console.log(window.innerHeight);
      window.scrollY <= window.innerHeight / 6
        ? setNavTop(true)
        : setNavTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 w-[100%] sm:px-[60px] px-[20px] z-10 flex flex-col gap-0 ">
      <div
        className={`${
          (!toggle && navTop) ? "bg-transparent" : "bg-gradient-primary"
        } px-[20px] py-2 sm:my-2 mt-2  text-white flex  items-center justify-between ${toggle? "rounded-b-0 rounded-t-[20px]" : "rounded-full"} z-10`}
      >
        <div
          className="flex items-center justify-start gap-[10px] md:w-[200px] w-[20%] cursor-pointer"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="/logo.svg"
            alt=""
            className="md:w-[34px] md:h-[34px] h-[20px] w-[20px]"
          />
          <p className="font-poppins md:text-[32px] text-[18px] font-semibold ">
            Danuku
          </p>
        </div>

        <ul className="flex-row md:gap-[70px] gap-[30px] sm:flex hidden">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`md:text-[24px] text-[16px] ${
                active === index ? "green-blue-gradient-text font-bold" : ""
              }`}
            >
              <button href={link.link} onClick={() => setActive(index)}>
                {link.id}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:w-[200px] w-[20%] flex justify-end relative">
          <div>
            <img
              src={cartIcon}
              alt=""
              className="md:w-[34px] md:h-[34px] h-[20px] w-[20px]"
            />
          </div>
          <div className="absolute green-blue-gradient w-[20px] h-[20px] flex justify-center items-center rounded-full top-0 right-[-4px] text-[12px] leading-0 tracking-0 font-bold">
            <p>2</p>
          </div>
        </button>
        <button
          className="p-[6px] sm:hidden flex justify-end relative"
          onClick={() => setToggle(!toggle)}
        >
          <div>
            <img
              src={menu}
              alt=""
              className="md:w-[34px] md:h-[34px] h-[20px] w-[20px]"
            />
          </div>
        </button>
      </div>
      <div className={`sm:hidden ${toggle? "flex" : "hidden"} bg-gradient-primary z-10 text-white rounded-b-[20px]`}>
        <ul className="flex-col  flex  items-start justify-center  w-full">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`md:text-[24px] text-[16px] py-[15px] px-[20px]   ${
                active === index ? "green-blue-gradient-text font-bold" : ""
              }`}
            >
              <button href={link.link} onClick={() => setActive(index)} >
                {link.id}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
