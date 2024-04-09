import PokeType from "./pokeType";
import { Link } from "react-router-dom";

/**
 * PokeCard component: Renders a card for a single Pokemon, including its name, number, image, and types.
 * Links to a dedicated Pokémon page when clicked.
 *
 * @param {object} props - The props object containing the Pokémon data.
 * @prop {object} props.data - The data for the Pokémon to display.
 */
function PokeCard(props) {

    const { data } = props; // Destructure the data prop
    if (!data) return null; // Handle potential missing data

    const pokedexId = props.data.pokedex_id;
    const pokePath = '/pokedex/pokemon/' + pokedexId;

    // Format the Pokédex number with leading zeros:
    const pokeNumber = pokedexId.toString().padStart(3, "0");;
    
    //Array for types of pokemon
    const typesArray = props.data.types;

    return(
        <Link to={pokePath}> {/* Wrap the card in a link to the Pokémon page */}
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
    )
}

export default PokeCard;