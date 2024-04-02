import PokeType from "./pokeType";
import { Link } from "react-router-dom";

function PokeCard(props) {
    const pokedexId = props.data.pokedex_id;
    const pokePath = '/pokemon/' + pokedexId;
    const singlePokeData = props.data[pokedexId - 1]


    let pokeNumber;
    if (pokedexId < 10) pokeNumber = `00${pokedexId}`;
    if (pokedexId < 100 && pokedexId >= 10) pokeNumber = `0${pokedexId}`;
    if (pokedexId >= 100) pokeNumber = pokedexId

    const typesArray = props.data.types;
    // console.log(typesArray);


    return(
        <>
            {props.data && (
                <Link to={pokePath}>
                    <div className="flex items-end justify-between bg-white px-4 pb-6 pt-3 rounded-lg">
                        <div className='flex items-end'>
                            <img 
                                className="size-16 mr-4"
                                src={props.data.sprites.regular} 
                                alt={props.data.name.fr} 
                            />
                            <div className='self-center mt-2'>
                                <h3>{props.data.name.fr}</h3>
                                <p>#{pokeNumber}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 justify-start">
                            {typesArray.map((type, index) => (
                                <PokeType key={index} type={type} size="small"/>
                            ))}
                        </div>
                    </div>
                </Link>
            )} 
        </>
    )
}

export default PokeCard;