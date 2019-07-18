import React from 'react';
import './EventUnic.scss'

function EventUnic(props) {
  return(
    <div className="EventUnic">
      <h2>{props.events.title}</h2>
      <img src={props.events.picture} alt="pict"/>
      <p>{props.events.article}</p>
      <h4>{props.events.artist_id}</h4>
    </div>
  )
}

export default EventUnic;