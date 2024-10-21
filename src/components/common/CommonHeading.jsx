const CommonHeading = (props) => {
    return (
        <h2 className={`text-white md:text-4xl text-3xl xl:text-5xl font-bold ${props.className}`}>{props.text}</h2>
    )
}

export default CommonHeading