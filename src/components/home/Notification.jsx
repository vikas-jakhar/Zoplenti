import React, { useState } from 'react'
import Icon from '../common/Icons'

const Notification = () => {
    const [hide, setHide] = useState(false);
    const handleToggle = () => {
        setHide(!hide)
    }
    return (
        <div className={`w-full bg-notification-layer bg-center bg-no-repeat bg-cover py-3.5 px-[30px] flex items-center overflow-hidden duration-300 ease-linear justify-between ${hide ? "max-h-0 !p-0" : ""}`}>
            <button className='border border-white py-0.5 px-[18px] rounded-[70px] font-normal text-white text-lg'>New</button>
            <div className="flex items-center gap-1">
                <p className='font-bold text-lg text-white'>Discover Zoplenti's Vision for Long-Term Success — </p>
                <a href="/" className='font-bold text-lg text-white relative'> Read A Message from Our Founder <span className='-bottom-px absolute left-0 flex w-full h-0.5 bg-white'></span></a>
            </div>
            <div onClick={handleToggle} className={`border border-white rounded-full flex w-7 h-7 justify-center items-center cursor-pointer `}><Icon className={`duration-300 ease-linear ${hide ? "rotate-90" : ""}`} iconName='crossIcon' /></div>
        </div>
    )
}

export default Notification