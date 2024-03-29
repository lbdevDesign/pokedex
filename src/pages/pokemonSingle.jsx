import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../data/pokeContext";


function PokemonPage() {
    const data = useContext(PokemonContext);
    const {id} = useParams();

    const pokemon = data[id - 1];
    const imgPath = pokemon.sprites.regular

    console.log(pokemon);

    return(
        <div>
            <img src={imgPath} alt={pokemon.name.fr} />
            <h1>{pokemon.name.fr}</h1>
        </div>
    )
}

export default PokemonPage;