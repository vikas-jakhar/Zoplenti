const CommonHeading = (props) => {
    return (
        <h2 className={`text-white md:text-4xl md:leading-[50px] text-3xl xl:text-5xl xl:leading-[64px] font-bold ${props.className}`}>{props.text}</h2>
    )
}

export default CommonHeading