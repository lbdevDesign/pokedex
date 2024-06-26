import React, { useContext } from "react";
import PokeCard from "./components/card";
import logo from "../src/assets/pokemon_logo.png";
import { PokemonContext } from "./data/pokeContext";
  
/**
 * App component: Renders the main application UI, including the logo and Pokemon cards.
 * Fetches Pokemon data from the provided context.
 */
function App() {
  const pokemons = useContext(PokemonContext) // Get Pokemon data from context

  return (
    <div className="flex flex-col items-center bg-[url('./assets/forest.jpeg')] ">
      <div className="w-11/12 bg-white p-4 max-w-7xl flex justify-center rounded-b-lg">
        <img src={logo} alt="Logo" className="h-32" />
      </div>
      <div className="grid grid-cols-1 gap-8 w-11/12 max-w-7xl my-8 min-[768px]:grid-cols-2 min-[1140px]:grid-cols-3 ">
        {pokemons.map((pokemon, index) => (
            <PokeCard key={index} data={pokemon} /> // Pass Pokemon data to PokeCard component
        ))}
      </div>
    </div>
  );
}

export default App;
