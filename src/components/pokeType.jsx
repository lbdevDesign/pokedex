function PokeType(props) {

    const type = props.type.name;
    const iconUrl = require(`../assets/type/${type}.svg`);
    let sizeType;
    if (props.size === "small") sizeType = 'h-5';
    if (props.size === "large") sizeType = 'h-6';

    return(
        <>
            <img src={iconUrl} alt={type} className={sizeType} />
            {/* <p>{props.type.name}</p> */}
        </>
    )
}

export default PokeType;