import Header from '../common/Header'
import Notification from './Notification'
import CommonButton from '../common/CommonButton'
import Icon from '../common/Icons'
import iconRight from "../../assets/images/webp/right-ellipse.webp";
import iconLeft from "../../assets/images/webp/left-ellipse.webp";
import Partner from './Partner';

const Hero = () => {
    return (
        <div className='bg-hero-layer bg-center bg-cover bg-no-repeat'>
            <div className="flex flex-col justify-between h-full w-full pb-14 relative min-h-1100 min-h-screen mx-auto max-w-[1920px]">
                <div className="">
                    <Notification />
                    <Header />
                </div>
                <div className="container relative z-10 pt-10 sm:pt-14 lg:pt-24 hero">
                    <p className='text-light-blue font-normal mt-1 text-center text-base sm:text-xl sm:leading-[34px]'>A PARTNER THAT WON'T SELL YOUR COMPETITORS</p>
                    <p className='font-normal text-4xl sm:text-5xl lg:leading-[80px] lg:text-custom-xl text-white text-center'><span className='font-bold italic text-light-blue'>Dominate</span> Your Category on Amazon</p>
                    <p className='max-w-[780px] w-full mx-auto text-center font-n text-white text-base sm:leading-[34px] sm:text-xl'>We are the Amazon reseller that partners <span className='italic'>only</span> with you, not your competitors, and grows your brand to the <span className='font-bold'>#1 spot</span> in your category.</p>
                    <CommonButton className='lg:mt-12 mt-7 mx-auto' text='DISCOVER OUR STRATEGY' />
                    <div className="flex items-center gap-1.5 w-fit mx-auto mt-6">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, index) => (
                                <div key={index} className="flex">
                                    <Icon iconName='starIcon' />
                                </div>
                            ))}
                        </div>
                        <p className='text-white text-base font-normal'><span className='font-bold'>4,000+</span> reviews on</p>
                        <a href="https://www.amazon.in/" target='_blank' rel="noreferrer" className='flex w-fit'><Icon className='duration-300 ease-linear hover:shadow-4xl' iconName='amazonIcon' /></a>
                    </div>
                </div>
                <Partner />
                <img src={iconRight} alt="iconRight" className='absolute opacity-40 sm:opacity-100 right-0 top-1/2 -translate-y-1/2' />
                <img src={iconLeft} alt="iconLeft" className='absolute opacity-40 sm:opacity-100 left-0 top-1/2 -translate-y-1/2' />
            </div>
        </div>
    )
}

export default Hero;