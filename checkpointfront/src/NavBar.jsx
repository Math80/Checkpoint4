import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return(
    <div className="NavBar">
      <div className="title">
        <NavLink activeClassName="active" exact to="/"><img src="/image/Logo.png" alt="Logo" /></NavLink>
      </div>
      <div>
      <h1>WILD CIRCUS</h1>
      </div>
      <nav className="navi">
        <ul className="Header">
          <li><NavLink activeClassName="active" exact to="/">Accueil</NavLink></li>
          <li><NavLink activeClassName="active" to="/booking">Réservation</NavLink></li>
          <li><NavLink activeClassName="active" to="/contact">Contactez-nous</NavLink></li>
        </ul>
      </nav>

    </div>
  )
}

export default NavBar;