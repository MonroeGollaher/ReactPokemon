import React from 'react';
import './Header.css'; 
import logo from './pokemonLogo.png'

function Header() {
  return (
    <header>
      <div className="col-md-6 pt-3">
        <img src={logo} alt="" className="logo"/>
      </div>
    </header>
  )
}

export default Header