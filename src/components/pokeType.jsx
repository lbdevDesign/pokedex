function PokeType(props) {

    const type = props.type.name;
    const iconUrl = require(`../assets/type/${type}.svg`);

    return(
        <>
            <img src={iconUrl} alt={type} className="h-5" />
            {/* <p>{props.type.name}</p> */}
        </>
    )
}

export default PokeType;