import { useParams } from "react-router-dom";


function PokemonPage() {
    const {id} = useParams()

    return(
        <h1>pokemon {id}</h1>
    )
}

export default PokemonPage;