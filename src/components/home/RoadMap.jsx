import React, { useEffect, useState } from 'react';
import CommonHeading from '../common/CommonHeading';
import { ROADMAP_DATA } from '../common/Helper';
import CommonButton from '../common/CommonButton';
import roadmap from '../../assets/images/png/roadmap-line.png';
import box from '../../assets/images/png/roadmap-box.png';

const RoadMap = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const roadMapSection = document.getElementById('roadMapSection');
            const rect = roadMapSection?.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect?.top <= 0 && rect?.bottom > windowHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="py-16 relative" id="roadMapSection">
            <div className="container mt-3 relative">
                <div className={`xl:max-w-[481px] lg:max-w-[400px] pl-36 lg:pl-0 w-full ml-auto lg:ml-0 mb-8 pb-0.5 relative ${isFixed ? 'lg:fixed top-10 z-50' : ''}`}>
                    <CommonHeading className="xl:leading-[64px]" text="A strategic partner, not another Amazon reseller" />
                    <p className="mt-6 font-normal text-xl text-white leading-9">
                        We are a complete solution to capturing market share from competitors and executing a winning Amazon strategy, while you focus on building great products.
                    </p>
                </div>
                {ROADMAP_DATA.map((items, index) => (
                    <div key={index} className={`xl:max-w-[450px] lg:max-w-[400px] pl-36 lg:pl-0 w-full ml-auto ${index === 0 ? 'pt-10 lg:pt-0' : 'lg:mt-24 mt-10 pt-6'}`}>
                        <p className="text-white font-bold text-custom-lg mb-4">{items.title}</p>
                        <p className="pt-0.5 font-normal text-white text-lg leading-[30px]">{items.text}</p>
                        {index !== 0 && index !== 4 && <CommonButton className="mt-[18px]" text={items.button} />}
                    </div>
                ))}
                <img
                    src={roadmap}
                    alt="roadmap"
                    className={`top-0 w-[100px] lg:left-1/2 left-7 lg:-translate-x-1/2 h-full absolute`}
                />
                <img
                    src={box}
                    alt="box"
                    className={`w-[92px] h-[92px] lg:left-1/2 left-8 lg:-translate-x-1/2 z-50 top-16 ${isFixed ? 'fixed' : 'absolute'}`}
                />
            </div>
        </div>
    );
};

export default RoadMap;