import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return(
    <div className="NavBar">
      <div className="title">
        <NavLink activeClassName="active" exact to="/"><img src="./image/Logo.png" alt="Logo" /></NavLink>
      </div>
      <div>
      <h1>WILD CIRCUS</h1>
      </div>
     {/*  <a href="#0" className="cd-nav-trigger">
          Menu
        <span />
      </a> */}
      <nav className="navi">
        <ul className="Header">
          <li><NavLink activeClassName="active" exact to="/">Accueil</NavLink></li>
          <li><NavLink activeClassName="active" to="/laisser-un-avis">Réservation</NavLink></li>
          <li><NavLink activeClassName="active" to="/contactez-nous">Contactez-nous</NavLink></li>
        </ul>
      </nav>

    </div>
  )
}

export default NavBar;