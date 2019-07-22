import React from 'react';
import './ArtistUnic.scss'

function ArtistUnic(props) {
  return(
    <div className="ArtistUnic">
      <h2>{props.artists.name}</h2>
      <img src={props.artists.logo} alt="logo"/>
      <p>{props.artists.presentation}</p>
      <h4>{props.artists.discipline}</h4>
    </div>
  )
}

export default ArtistUnic;