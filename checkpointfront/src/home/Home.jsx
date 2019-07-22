import React from 'react';
import './Home.scss';
import Artist from '../artists/Artist';
import Event from '../events/Event';
import TexteAccueil from './TexteAccueil';

function Home() {
  return (
    <div className="Home">
      <TexteAccueil />
      <Event />
      <Artist />
    </div>
  );
}

export default Home;