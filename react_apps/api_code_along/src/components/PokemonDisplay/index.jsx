import { useEffect, useState } from "react";
import axios from 'axios';
import './index.css'

const PokemonDisplay = () => {

    const [pokemonObjects, setPokemonObjects] = useState([]);
    console.log(pokemonObjects);

    useEffect(()=>{
    // go get data
    // set state to the results array
    // rerender!
    axios('https://pokeapi.co/api/v2/pokemon').then((response) => {
        console.log(response);
        let array = response.data.results;
        setPokemonObjects(array);
    });

        console.log("next code")

    }, [])

    let pokemonJSX = pokemonObjects.map((pokemon) => {
        return (
            <div key={pokemon.url}>
                <span>{pokemon.name}</span>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`} style={{maxWidth: "100px"}}/>
            </div>
        )
    })


  return (
    <div id="pokemon-container">
        {pokemonJSX}
    </div>
  )
}

export default PokemonDisplay