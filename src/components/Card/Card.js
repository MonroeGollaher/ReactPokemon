import React from 'react';
import StatsBar from '../StatsBar/StatsBar'
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Card({ imgUrl, name, rank, stats, pokeType }) {

  const bgColor = {
    normal: "#BDBDAF",
    grass : "#7eb998",
    fire:"#f09990",
    water: "#8ab7e2",
    fighting: "#cc8c7f",
    flying: "#78A1FF",
    poison: "#d183c8",
    ground: " #f1db90",
    rock : "#e4d699",
    bug: "#d9e086",
    ghost: "#9995e4",
    electric: "#f1e48e",
    psychic: "#e493bf",
    ice : "#a2dee7",
    dragon: "#9c8fe5",
    dark : "#d8a992",
    steel: "#a7a3d8",
    fairy: "#ebacf0"
  }

  let color = "#000";
  const keys = Object.keys(bgColor);
  if(keys.includes(pokeType)) {
      color = bgColor[pokeType];
  }

  function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <div className="col-md-2 card-container">
      <div className="card-face card">
        <div className="front-card" style = {{backgroundColor : color}}>
          <div className="img-container">
            <img src={ imgUrl } alt="" className="img-fluid"/>
          </div>
          <h4 className="rank"># { rank }</h4>
          <h4>{ capitalize(name) }</h4>
          <h4>{ capitalize(pokeType) }</h4>
        </div>
        <div className="card-face back-card">
          <div className="stats">
            { stats.map((pokemon, index) => (
              <StatsBar 
                key={index}
                width = {pokemon.base_stat} 
                statName= {pokemon.stat.name}
              />
          )) }
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Card;