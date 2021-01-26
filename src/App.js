import React, {useState, useEffect} from 'react';
import './App.css';
import { getAllPokemon, setPokemon } from "./services/PokemonService";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [preUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initUrl = 'https://pokeapi.co/api/v2/pokemon'; 

  useEffect(() => {
    async function fetchData() {
      let res = await getAllPokemon(initUrl);
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
      { loading  ? <h1>Loading...</h1> : (
        <h1>Data is fetched</h1>
      )}
    </div>
  );
}

export default App;
