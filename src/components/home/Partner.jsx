import Marquee from "react-fast-marquee";
import { PARTNERS_LIST } from "../common/Helper";

const Partners = () => {
    return (
        <div id="brands" className="relative z-[10] pt-24">
            <div className="relative h-[76px]">
                <div className="max-w-[1920px] mx-auto absolute top-0 left-0">
                    <Marquee speed="100" direction="left" gradient={false}>
                        {PARTNERS_LIST.map((obj, i) => (
                            <div key={i} className="mx-7 move-slider sm:mx-[37px]">
                                <img
                                    src={obj.image}
                                    sizes="100vw"
                                    alt={obj.image}
                                    className="grayscale-[1]  brightness-50 invert-[0.2] hover:invert-0 hover:brightness-[1] hover:grayscale-0 duration-300"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Partners;