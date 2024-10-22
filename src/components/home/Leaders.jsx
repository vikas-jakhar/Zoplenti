import CommonHeading from '../common/CommonHeading'
import graph from "../../assets/images/webp/graph-img.webp";
import blackLayer from "../../assets/images/webp/black-layer.webp";
import Building from './Building';

const Leaders = () => {
    return (
        <div className='md:pb-16 pb-2 relative'>
            <div className="container relative z-10">
                <span className='flex w-full h-0.5 bg-light-blue relative z-10 opacity-20'></span>
                <CommonHeading className='text-center mt-20 pt-2 relative z-10' text="We're building a family of category leaders" />
                <Building />
                <div className="max-w-[1039px] w-full mx-auto mt-10 bg-medium-blue border-s mb-[88px] border-light-blue backdrop-blur-3xl relative z-10 px-8 py-5">
                    <p className='font-normal text-lg sm:text-xl sm:leading-9 text-white max-w-[963px] w-full'>Each quarter, we identify new subcategories to dominate based on our customer interests and existing partner synergy, then find the right brands to collaborate with. We select brands that have quality products and the potential to lead their category, but need the right Amazon partner to get them there.</p>
                </div>
                <span className='flex w-full h-0.5 bg-light-blue opacity-20 relative z-10'></span>
                <img src={graph} alt="graph" className='top-0 right-0 absolute max-w-[1224px] w-full' />
                <img src={blackLayer} alt="blackLayer" className='top-0 right-0 absolute' />
            </div>
        </div>
    )
}

export default Leaders