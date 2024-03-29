import React, { useEffect, useState } from "react";
import PokeCard from "./components/card";
import logo from "./assets/Pokémon_logo.png";
  
function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://tyradex.tech/api/v1/gen/1');
      const pokeData = await response.json();
      setPokemons(pokeData);
    };
    fetchPokemons();
    
  }, []);

 console.log(pokemons);

  return (
    <div className="flex flex-col items-center bg-[url('./assets/forest.jpeg')] ">
      <h1>Là je modifie le fichier</h1>
      <div className="w-11/12 bg-white p-12 max-w-7xl flex justify-center rounded-b-lg">
        <img src={logo} alt="Logo" className="h-44" />
      </div>
      <div className="grid grid-cols-3 gap-8 w-11/12 max-w-7xl my-8">
        {pokemons.map((pokemon, index) => (
            <PokeCard key={index} data={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
