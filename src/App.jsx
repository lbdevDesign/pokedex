import React, { useContext } from "react";
import PokeCard from "./components/card";
import logo from "./assets/Pokémon_logo.png";
import { PokemonContext } from "./data/pokeContext";
  
function App() {
  const pokemons = useContext(PokemonContext)

//  console.log(pokemons);

  return (
    <div className="flex flex-col items-center bg-[url('./assets/forest.jpeg')] ">
      <div className="w-11/12 bg-white p-4 max-w-7xl flex justify-center rounded-b-lg">
        <img src={logo} alt="Logo" className="h-32" />
      </div>
      <div className="grid grid-cols-1 gap-8 w-11/12 max-w-7xl my-8 min-[768px]:grid-cols-2 min-[1140px]:grid-cols-3 ">
        {pokemons.map((pokemon, index) => (
            <PokeCard key={index} data={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
