import React, { useEffect, useState } from 'react';
import CommonHeading from '../common/CommonHeading';
import { ROADMAP_DATA } from '../common/Helper';
import CommonButton from '../common/CommonButton';
import roadmap from '../../assets/images/webp/roadmap-line.webp';
import box from '../../assets/images/webp/roadmap-box.webp';

const RoadMap = () => {
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const roadMapSection = document.getElementById('roadMapSection');
            const rect = roadMapSection?.getBoundingClientRect();
            if (rect) {
                const isTopVisible = rect.top <= -70;
                const isBottomVisible = rect.bottom >= 370;

                if (isTopVisible && isBottomVisible) {
                    setIsFixed(true);
                } else {
                    setIsFixed(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="sm:pt-16 pt-14 relative" id="roadMapSection">
            <div className="container mt-3 pb-2 md:pb-0 relative">
                <div className="xl:max-w-[481px] lg:max-w-[400px] pl-20 sm:pl-36 lg:pl-0 w-full ml-auto lg:ml-0 mb-8 pb-0.5">
                    <CommonHeading className="text-left" text="A strategic partner, not another Amazon reseller" />
                    <p className="mt-6 font-normal sm:text-xl text-white sticky text-base sm:leading-9">
                        We are a complete solution to capturing market share from competitors and executing a winning Amazon strategy, while you focus on building great products.
                    </p>
                </div>
                {ROADMAP_DATA.map((items, index) => (
                    <div key={index} className={`xl:max-w-[450px] lg:max-w-[400px] pl-20 sm:pl-36 lg:pl-0 w-full ml-auto ${index === 0 ? 'pt-10 lg:pt-5' : 'lg:mt-24 sm:mt-10 mt-5 pt-6'}`}>
                        <p className="text-white font-bold text-2xl sm:text-custom-sm mb-4">{items.title}</p>
                        <p className="pt-0.5 font-normal text-white sm:text-lg text-sm sm:leading-[30px]">{items.text}</p>
                        {index !== 0 && index !== 4 && <CommonButton className="mt-[18px]" text={items.button} />}
                    </div>
                ))}
                <img
                    src={roadmap}
                    alt="roadmap"
                    className={`top-0 w-14 sm:w-[100px] lg:left-1/2 left-4 sm:left-7 lg:-translate-x-1/2 h-full absolute`}
                />
                <img
                    src={box}
                    alt="box"
                    className={`sm:w-[92px] w-12 h-12 sm:h-[92px] lg:left-1/2 left-5 sm:left-8 lg:-translate-x-1/2 z-10 absolute top-16 ${isFixed ? 'lg:!fixed' : ''}`}
                />
            </div>
            <span className='flex w-full h-0.5 bg-light-blue relative z-10 opacity-20 md:mt-24 sm:mt-16 mt-14 max-w-[1140px] mx-auto lg:mt-[140px]'></span>
        </div>
    );
};

export default RoadMap;