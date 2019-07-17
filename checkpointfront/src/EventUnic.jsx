import React from 'react';
import './EventUnic.scss'

function EventUnic(props) {
  return(
    <div className="EventUnic">
      <img src={props.events.picture} alt="pict"/>
      <h2>{props.events.title}</h2>
      <p>{props.events.article}</p>
      <h4>{props.events.artist_id}</h4>
    </div>
  )
}

export default EventUnic;