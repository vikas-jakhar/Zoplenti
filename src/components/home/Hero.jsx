import Header from '../common/Header'
import Notification from './Notification'
import CommonButton from '../common/CommonButton'
import Icon from '../common/Icons'
import icon from "../../assets/images/webp/hero-icon.webp";
import Partner from './Partner';

const Hero = () => {
    return (
        <div className='bg-hero-layer bg-center bg-cover bg-no-repeat pb-10 relative lg:min-h-[851px] max-w-[1920px] mx-auto overflow-hidden'>
            <Notification />
            <Header />
            <div className="container relative z-10 pt-10 sm:pt-14 lg:pt-24 hero">
                <p className='text-light-blue font-normal mt-1 text-center text-base sm:text-xl'>A PARTNER THAT WON'T SELL YOUR COMPETITORS</p>
                <p className='font-normal text-4xl mt-3.5 sm:text-5xl lg:text-custom-xl text-white text-center'><span className='font-bold italic text-light-blue'>Dominate</span> Your Category on Amazon</p>
                <p className='max-w-[780px] w-full mx-auto text-center font-normal mt-3.5 text-white text-base sm:text-xl'>We are the Amazon reseller that partners <span className='italic'>only</span> with you, not your competitors, and grows your brand to the <span className='font-bold'>#1 spot</span> in your category.</p>
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
                    <a href="https://www.amazon.in/" className='flex w-fit'><Icon className='duration-300 ease-linear hover:shadow-4xl' iconName='amazonIcon' /></a>
                </div>
                <Partner />
            </div>
            <img src={icon} alt="icon" className='w-full absolute left-0 top-1/2 -translate-y-1/2' />
        </div>
    )
}

export default Hero;