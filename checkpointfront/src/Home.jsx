import React from 'react';
import './Home.scss';
import Artist from './Artist';
import Event from './Event';

function Home() {
  return (
    <div className="Home">
      <Event />
      <Artist />
    </div>
  );
}

export default Home;