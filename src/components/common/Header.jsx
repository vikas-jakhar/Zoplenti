import React, { useEffect, useState } from 'react';
import { HEADER_DATA } from './Helper';
import Icon from './Icons';
import CommonButton from './CommonButton';

const Header = () => {
  const [open, setOpen] = useState(false);
  const ToggleOpen = () => {
    if (window.innerWidth < 640) {
      setOpen((prevOpen) => !prevOpen);
    }
  };
  useEffect(() => {
    const handleOverflow = () => {
      document.body.style.overflow = open && window.innerWidth < 640 ? "hidden" : "";
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [open]);
  return (
    <div className="border border-off-gray max-w-[1350px] mx-auto py-4 px-5 bg-off-black rounded-[10px] shadow-3xl mt-5">
      <nav className="flex items-center justify-between">
        <a href="/" className='font-inter font-normal text-3xl text-white tracking-[0.03em]'>Logo</a>
        <div className={`${open ? "left-0 bg-white" : "-left-full"} flex items-center z-10 sm:bg-transparent absolute flex-col w-full h-screen pt-[108px] sm:pt-0 gap-12 top-0 sm:relative sm:bg-none sm:flex-row sm:gap-11 sm:h-fit sm:w-fit sm:left-auto duration-300 ease-linear`}>
          {HEADER_DATA.map((i, index) => (
            <a key={index} href='/' aria-label={i.heading} onClick={ToggleOpen} className="text-white font-normal text-xl">
              {i.heading}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <button className='font-normal text-white text-lg flex items-center gap-0.5 duration-300 ease-linear hover:scale-95'><Icon iconName='userIcon' /> Log in</button>
          <CommonButton text="LET' S Talk" />
        </div>
        <div role="button" aria-label="menu icon" aria-expanded={open} onClick={ToggleOpen} className={`${open ? "shadow-5xl h-6" : ""} w-6 h-4 rounded-full relative sm:hidden flex z-20 cursor-pointer duration-300 ease-linear`}>
          <div className="">
            <span className={`${open ? "top-[45.8%] rotate-45 left-1/2 -translate-x-1/2" : "top-0 right-0"} absolute w-[18px] h-1 rounded-md bg-offBlack duration-300 ease-linear`}></span>
            <span className={`${open ? "hidden" : "top-0"} left-0 absolute w-1 h-1 rounded-full bg-offBlack duration-300 ease-linear`}></span>
          </div>
          <div className="">
            <span className={`${open ? "opacity-0" : "opacity-100 right-0"} top-1/2 -translate-y-1/2 absolute w-[18px] h-1 rounded-md bg-offBlack duration-300 ease-linear`}></span>
            <span className={`${open ? "hidden" : ""} left-0 top-1/2 -translate-y-1/2 absolute w-1 h-1 rounded-full bg-offBlack duration-300 ease-linear`}></span>
          </div>
          <div className="">
            <span className={`${open ? "top-[45.8%] -rotate-45 left-1/2 -translate-x-1/2" : "bottom-0 right-0"} absolute w-[18px] h-1 rounded-md bg-offBlack duration-300 ease-linear`}></span>
            <span className={`${open ? "hidden" : "bottom-0"} left-0 absolute w-1 h-1 rounded-full bg-offBlack duration-300 ease-linear`}></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;