import React from 'react';
import './ArtistUnic.scss'

function ArtistUnic(props) {
  return(
    <div className="ArtistUnic">
      <img src={props.artists.logo} alt="logo"/>
      <h2>{props.artists.name}</h2>
      <p>{props.artists.presentation}</p>
      <h4>{props.artists.discipline}</h4>
    </div>
  )
}

export default ArtistUnic;