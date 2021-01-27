import React, {useState, useEffect} from 'react';
import './App.css';
import { getPokemon, setPokemon } from "./services/PokemonService";
import Card from './components/Card/Card'; 
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
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

  const searchResults = pokemonData.filter( p => {
    return p.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="App">
      <div className="row justify-content-center">
        <Header />  
      </div>
      <div className="row search-box justify-content-center pt-4">
        <div className="col-md-6">
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={ e => setSearch(e.target.value) }
            className="search-bar shadow"
          />
        </div>
      </div>

      { 
        loading  ? <h1>Loading Pokemon...</h1> : (
          <>
          <div className="row justify-content-center">
            { searchResults.map((pokemon, index) => {
              return (
                <Card 
                  key={index}
                  name={pokemon.name}
                  imgUrl={pokemon.sprites.other["official-artwork"].front_default}
                  rank={pokemon.id}
                  stats={pokemon.stats}
                  pokeType={pokemon.types[0].type.name}
                />
              )
            })}
          </div>
          <div className="row justify-content-center pb-4">
            <Button 
              onClick={prev}
              className="btn mx-2"
            > 
              Prev 
            </Button>
            <Button 
              onClick={next}
              className="btn mx-2"
            >
              Next
            </Button>
          </div>
          </>
        )
      }
    </div>
  );
}

export default App;
