import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../data/pokeContext";
import PokeType from "../components/pokeType";
import Resistance from "../components/resistance";

/**
 * PokemonPage component: Renders a detailed page for a single Pokémon, including its name, image, category, types, statistics, and resistances.
 * Fetches Pokémon data from the provided context using a dynamic route parameter.
 */
function PokemonPage() {

    /**
     * Fetch Pokémon data from context and extract ID from route parameters:
     */
    const data = useContext(PokemonContext);
    const {id} = useParams();

    const pokemon = data[id - 1];
    const imgPath = pokemon.sprites.regular
    
    return(
        <div className="min-h-screen flex justify-center items-center bg-[url('./assets/forest.jpeg')] py-11">
            <div className="flex flex-col min-[940px]:grid min-[940px]:grid-cols-3 min-[940px]:grid-rows-1 gap-4 m-auto w-10/12">
                <div className="flex flex-col min-[590px]:flex-row min-[940px]:flex-col justify-center items-center bg-white rounded-lg p-11 h-fit min-[940px]:sticky min-[940px]:top-11">
                    <div className="flex flex-col items-center min-[590px]:mr-8 min-[940px]:mr-0">
                        <h2 className="text-xl">{pokemon.name.jp}</h2>
                        <h1 className="text-xl">{pokemon.name.fr}</h1>
                        <div className="bg-white rounded-lg mb-4 text-center">
                            <img 
                                className="size-36 min-[940px]:w-full min-[940px]:mb-8"
                                src={imgPath} 
                                alt={pokemon.name.fr} 
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-medium text-lg mb-2">{pokemon.category}</p>    
                        <div className="flex justify-center gap-2">
                            {pokemon.types.map((type, index) => (
                                    <PokeType key={index} type={type} size="large"/>
                            ))}
                        </div>    
                        <div className="w-full mt-4 bg-slate-100 p-4 rounded-lg">
                            <p className="font-medium">Taille : {pokemon.height}</p>
                            <p className="font-medium">Poid : {pokemon.weight}</p>
                        </div>  
                    </div>
                </div>
                <div className="col-span-2 bg-white rounded-lg p-11">
                    <h2 className="mb-4">Statistiques</h2>
                    <div className="grid grid-col-1 min-[590px]:grid-cols-2 gap-4 mb-8 min-[1140px]:grid-cols-3">
                        <div className="flex justify-between bg-slate-100 p-2  px-4 rounded-lg">
                            <p className="font-bold">Attaque :</p>
                            <p>{pokemon.stats.atk}</p>
                        </div>
                        <div className="flex justify-between bg-slate-100 p-2  px-4 rounded-lg">
                            <p className="font-bold">Défense :</p>
                            <p>{pokemon.stats.def}</p>
                        </div>
                        <div className="flex justify-between bg-slate-100 py-2 px-4 rounded-lg">
                            <p className="font-bold">Vie :</p>
                            <p>{pokemon.stats.hp}</p>
                        </div>
                        <div className="flex justify-between bg-slate-100 p-2  px-4 rounded-lg">
                            <p className="font-bold">Spe-Attaque :</p>
                            <p>{pokemon.stats.spe_atk}</p>
                        </div>
                        <div className="flex justify-between bg-slate-100 p-2  px-4 rounded-lg">
                            <p className="font-bold">Spe-Défense :</p>
                            <p>{pokemon.stats.spe_def}</p>
                        </div>
                        <div className="flex justify-between bg-slate-100 p-2  px-4 rounded-lg">
                            <p className="font-bold">Vitesse :</p>
                            <p>{pokemon.stats.vit}</p>
                        </div>
                    </div>
                    <h2 className="mb-4">Résistances</h2>
                    <div className="grid grid-col-1 min-[590px]:grid-cols-2 gap-4 mb-4 min-[1140px]:grid-cols-3">
                        {pokemon.resistances.map((res, index) => (
                            <Resistance key={index} data={res}/>
                        ))}
                    </div>
                </div>
                
            </div>

        </div>
        
    )
}

export default PokemonPage;