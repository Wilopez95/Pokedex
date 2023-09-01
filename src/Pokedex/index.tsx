import React, { useState } from "react";
import logo from "../logo.svg";
import "./style.css";
import axios from "axios";
import { Pokemon } from "./interfaces";

const Pokedex = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<Pokemon>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value.toLocaleLowerCase());
  };

  const searchPokemon = async (input: string) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;

    try {
      const pokemon = await axios.get(url);
      setPokemonData(pokemon.data);
    } catch (error) {
      setPokemonData(undefined);
      console.log(error);
    }
  };

  return (
    <div className="App">
      <body className="App-body">
        <img
          src={pokemonData ? pokemonData?.sprites?.front_default : logo}
          className="App-logo"
          alt="logo"
        />
        <h1>Pokedex</h1>
        <div>
          <input value={searchText} onChange={handleInputChange}></input>
          <button onClick={() => searchPokemon(searchText)}>Buscar</button>
        </div>
        <p>{searchText}</p>
      </body>
    </div>
  );
};

export default Pokedex;
