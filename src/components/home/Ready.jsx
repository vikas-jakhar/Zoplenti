import { DOMINATE_LIST } from "../common/Helper";
import CommonButton from "../common/CommonButton";
import CommonHeading from "../common/CommonHeading";

const Ready = () => {
    return (
        <div className="lg:py-24 md:py-16 py-14 relative">
            <div className="container my-11">
                <div className="xl:flex grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-[90px] lg:gap-24">
                    <div className="xl:max-w-[548px]">
                        <CommonHeading className='text-center sm:text-left xl:leading-[64px]' text=' Ready to dominate your category?' />
                        <p className="text-white text-center sm:text-left font-normal text-xl leading-9 mt-4 pt-0.5">
                            We choose new subcategories quarterly, and aim to find the right
                            partner within 90 days. If you're here you probably received an
                            invitation to explore our vision together.
                        </p>
                        <CommonButton className="mt-12 block mx-auto sm:mx-0" text="LET'S TALK" />
                    </div>
                    <div className="grid sm:grid-cols-2 xl:max-w-[507px] gap-x-5 sm:gap-x-[38px] gap-y-6 sm:gap-y-12 md:gap-y-[79px]">
                        {DOMINATE_LIST.map((item, index) => (
                            <div key={index}>
                                <p className="lg:text-4xl max-sm:text-center lg:leading-[64px] text-3xl text-light-blue font-bold">
                                    {item.amount}
                                </p>
                                <p className="font-normal max-sm:text-center text-sm sm:text-lg text-white mt-[5px] !leading-170">
                                    {item.about}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <span className="flex w-full max-w-[1140px] left-1/2 bottom-0 opacity-20 bg-light-blue -translate-x-1/2 absolute h-0.5"></span>
        </div>
    );
};

export default Ready;