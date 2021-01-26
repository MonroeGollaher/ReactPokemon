import React, {useState, useEffect} from 'react';
import './App.css';
import { getPokemon, setPokemon } from "./services/PokemonService";
import Card from './components/Card/Card'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initUrl = 'https://pokeapi.co/api/v2/pokemon'; 

  useEffect(() => {
    async function fetchData() {
      let res = await getPokemon(initUrl);
      setNextUrl(res.next);
      setPrevUrl(res.previous);
      await loadPokemon(res.results);
      setLoading(false);
    }
    fetchData();
  }, []); 

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await setPokemon(pokemon.url);
      return pokemonRecord;
    }))
    setPokemonData(_pokemonData);
  }

  const next = async () => {
    setLoading(true);
    let data = await getPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }
  console.log(pokemonData);
  return (
    <div className="App">
      { 
        loading  ? <h1>Loading Pokemon...</h1> : (
          <>
          <div className="container">
            { pokemonData.map((pokemon) => {
              return (
                <Card 
                  key={pokemon.id}
                  name={pokemon.name}
                  imgUrl={pokemon.sprites.other["official-artwork"].front_default}
                  rank={pokemon.id}
                  stats={pokemon.stats}
                  pokeType={pokemon.types[0].type.name}
                />
              )
            })}
          </div>
          <div className="btn">
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
