import Header from '../common/Header'
import Notification from './Notification'
import CommonButton from '../common/CommonButton'
import Icon from '../common/Icons'

const Hero = () => {
    return (
        <div className='bg-hero-layer bg-center bg-cover bg-no-repeat min-h-[851px]'>
            <Notification />
            <Header />
            <div className="container pt-14 lg:pt-24">
                <p className='text-light-blue font-normal mt-1 text-center text-xl'>A PARTNER THAT WON'T SELL YOUR COMPETITORS</p>
                <p className='font-normal text-5xl lg:text-custom-xl text-white text-center'><span className='font-bold italic text-light-blue'>Dominate</span> Your Category on Amazon</p>
                <p className='max-w-[785px] w-full mx-auto text-center font-normal mt-3.5 text-white text-xl'>We are the Amazon reseller that partners <span className='italic'>only</span> with you, not your competitors, and grows your brand to the <span className='font-bold'>#1 spot</span> in your category.</p>
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
                    <a href="/" className='flex w-fit'><Icon className='duration-300 ease-linear hover:shadow-4xl' iconName='amazonIcon' /></a>
                </div>
            </div>
        </div>
    )
}

export default Hero;