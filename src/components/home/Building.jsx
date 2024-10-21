import Marquee from "react-fast-marquee";
import Icon from "../common/Icons";
import { LEADER_LIST } from "../common/Helper";
const Building = () => {
    return (
        <div id="discover-strategy" className="flex items-center pl-0 sm:pl-4 xl:pl-0 my-10 gap-2.5 sm:ml-[calc((100vw-640px)/2)] ml-4 md:ml-[calc((100vw-768px)/2)] lg:ml-[calc((100vw-1024px)/2)] xl:ml-[calc((100%-1039px)/2)]">
            <Icon className="min-w-8 min-h-8" iconName="bugermenuIcon" />
            <Marquee direction="right" speed="100">
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
    );
};

export default Building;