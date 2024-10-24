import Marquee from "react-fast-marquee";
import Icon from "../common/Icons";
import { LEADER_LIST } from "../common/Helper";

const Building = () => {
    return (
        <div id="discover-strategy" className="relative w-full my-10 xl:pl-[51px]">
            <div className="flex items-center gap-2.5 pl-0 sm:pl-4 xl:pl-0">
                <Icon className="min-w-8 min-h-8" iconName="bugermenuIcon" />
                <div className="w-full building">
                    <Marquee direction="right" speed="100" pauseOnHover={true}>
                        {LEADER_LIST.map((obj, i) => (
                            <p
                                key={i}
                                className="sm:text-xl text-sm px-[15px] sm:px-5 text-nowrap uppercase text-white text-opacity-70 !leading-115 font-normal hover:text-opacity-100 duration-300"
                            >
                                {obj.text}
                            </p>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Building;