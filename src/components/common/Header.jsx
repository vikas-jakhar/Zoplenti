import React, { useEffect, useState } from 'react';
import { HEADER_DATA } from './Helper';
import Icon from './Icons';
import CommonButton from './CommonButton';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const ToggleOpen = () => {
    if (window.innerWidth < 1024) {
      setOpen((prevOpen) => !prevOpen);
    }
  };
  useEffect(() => {
    const handleOverflow = () => {
      document.body.style.overflow = open && window.innerWidth < 1024 ? 'hidden' : '';
    };
    handleOverflow();
    window.addEventListener('resize', handleOverflow);
    return () => {
      window.removeEventListener('resize', handleOverflow);
    };
  }, [open]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  return (
    <div className="mx-auto max-w-[1350px] w-full px-3">
      <div className="border border-off-gray max-w-[1350px] w-full relative py-4 px-5 bg-off-black rounded-[10px] shadow-3xl mt-5">
        <nav className="flex items-center justify-between">
          <a href="/" className="font-inter font-normal text-2xl sm:text-3xl text-white tracking-[0.03em]">Logo</a>
          <div
            className={`${open ? 'left-0' : '-left-full'} flex items-center bg-black lg:bg-transparent z-50 fixed justify-center lg:absolute flex-col w-full h-screen top-0 lg:bg-none lg:flex-row lg:h-fit lg:w-fit lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 gap-[18px] duration-300 ease-linear`}
          >
            <a href='#roadMapSection'
              aria-label='Strategy'
              onClick={ToggleOpen}
              className="text-white font-normal text-xl"
            >
              Strategy
            </a>
            {HEADER_DATA.map((item, index) => (
              <div key={index} className="relative dropdown">
                <button
                  aria-label={item.heading}
                  onClick={item.dropdown ? () => toggleDropdown(index) : ToggleOpen}
                  className="text-white font-normal text-xl flex items-center gap-2"
                >
                  {item.heading}
                  <div className={`${activeDropdown === index ? "rotate-180" : ""} duration-300 flex right-0 mt-2 ease-linear relative`}><Icon iconName='downIcon' /></div>
                </button>
                {item.dropdown && (
                  <div
                    className={`${activeDropdown === index ? 'block' : 'hidden'} absolute top-full left-0 bg-white text-off-black py-2 mt-2 rounded-lg z-50 shadow-lg`}
                  >
                    {item.dropdown.map((dropdownItem, i) => (
                      <a
                        key={i}
                        href={dropdownItem.link}
                        className="block px-4 py-2 text-sm text-nowrap hover:bg-gray-100"
                      >
                        {dropdownItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="font-normal text-white text-lg sm:hidden flex items-center gap-0.5 duration-300 ease-linear hover:scale-95">
              <Icon iconName="userIcon" /> Log in
            </button>
            <CommonButton className='sm:hidden flex' text="LET'S Talk" />
          </div>
          <div className="flex items-center gap-5">
            <button className="font-normal text-white text-lg hidden sm:flex items-center gap-0.5 duration-300 ease-linear hover:scale-95">
              <Icon iconName="userIcon" /> Log in
            </button>
            <CommonButton className='hidden sm:flex' text="LET'S Talk" />
            <div
              role="button"
              aria-label="menu icon"
              aria-expanded={open}
              onClick={ToggleOpen}
              className="w-7 h-5 rounded-full relative lg:hidden flex z-[100] cursor-pointer duration-300 ease-linear"
            >
              <span className={`${open ? "top-1/2 rotate-45 -translate-y-1/2" : "top-0"} bg-white h-1 flex w-full absolute duration-300 ease-linear left-0`}></span>
              <span className={`${open ? "opacity-0" : ""} bg-white h-1 flex w-full absolute duration-300 ease-linear left-0 top-1/2 -translate-y-1/2`}></span>
              <span className={`${open ? "top-1/2 -rotate-45 -translate-y-1/2" : "bottom-0"} bg-white h-1 flex w-full absolute duration-300 ease-linear left-0`}></span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;