import React, { useState } from 'react'
import Icon from '../common/Icons'

const Notification = () => {
    const [hide, setHide] = useState(false);
    const handleToggle = () => {
        setHide(!hide)
    }
    return (
        <div className={`w-full bg-notification-layer bg-center bg-no-repeat bg-cover py-3.5 px-3 sm:px-[30px] flex items-center overflow-hidden duration-300 ease-linear justify-between ${hide ? "max-h-0 !p-0" : ""}`}>
            <label className='border border-white py-0.5 px-3 sm:px-[18px] rounded-[70px] font-normal text-white text-xs sm:text-lg'>New</label>
            <div className="flex items-center flex-col md:flex-row justify-center max-w-[250px] w-full sm:max-w-fit sm:w-fit md:gap-1">
                <p className='font-bold text-xs md:text-sm lg:text-lg text-center text-white'>Discover Zoplenti's Vision for Long-Term Success — </p>
                <a href="/" className='font-bold text-xs md:text-sm lg:text-lg duration-300 ease-linear  hover:text-off-black text-white relative group'> Read A Message from Our Founder <span className='-bottom-px absolute duration-300 ease-linear group-hover:bg-off-black left-0 flex w-full h-0.5 bg-white'></span></a>
            </div>
            <div onClick={handleToggle} className={`border border-white rounded-full flex w-7 h-7 justify-center items-center cursor-pointer`}><Icon className={`duration-300 ease-linear ${hide ? "rotate-90" : ""}`} iconName='crossIcon' /></div>
        </div>
    )
}

export default Notification