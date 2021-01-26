import React, {useState, useEffect} from 'react';
import './App.css';
import { getPokemon, setPokemon } from "./services/PokemonService";
import Card from './components/Card'; 

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [preUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initUrl = 'https://pokeapi.co/api/v2/pokemon'; 

  useEffect(() => {
    async function fetchData() {
      let res = await getPokemon(initUrl);
      setNextUrl(res.next);
      setPrevUrl(res.previous);
      await loadingPokemon(res.results);
      setLoading(false);
    }
    fetchData();
  }, []); 

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await setPokemon(pokemon.url);
      return pokemonRecord;
    }))

    setPokemonData(_pokemonData);
  }
  console.log(pokemonData);
  return (
    <div className="App">
      { 
        loading  ? <h1>Loading...</h1> : (
          <>
          <div className="grid-container">
            { pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />
            })}
          </div>
          </>
        )
      }
    </div>
  );
}

export default App;
