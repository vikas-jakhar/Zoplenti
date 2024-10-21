const CommonHeading = (props) => {
    return (
        <h2 className={`text-white text-5xl font-bold ${props.className}`}>{props.text}</h2>
    )
}

export default CommonHeading