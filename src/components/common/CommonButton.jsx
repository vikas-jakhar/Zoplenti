import Icon from './Icons';

const CommonButton = (props) => {
    return (
        <button className={`bg-light-blue font-bold text-base h-12 px-4 duration-300 ease-linear hover:bg-transparent hover:scale-95 rounded uppercase shadow-4xl text-white flex items-center gap-2 border hover:border-light-blue border-off-blue ${props.className}`}>{props.text} <Icon iconName='rightArrowIcon' /></button>
    )
}

export default CommonButton