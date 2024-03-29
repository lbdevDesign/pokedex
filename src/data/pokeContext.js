import { createContext, useContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
        const response = await fetch('https://tyradex.tech/api/v1/gen/1');
        const data = await response.json();
        setPokeData(data);
      };
      fetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={pokeData}>
      {children}
    </PokemonContext.Provider>
  );
};

const usePokemonData = () => {
  return useContext(PokemonContext);
};