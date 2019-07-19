import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';
import Event from './Event';
import Artist from './Artist';
import Contact from './Contact';
import Booking from './Booking';
import AdminGeneral from './admin/AdminGeneral';
import AdminA from './admin/AdminA';
import AdminE from './admin/AdminE';
import AdminArtist from './admin/AdminArtist';
import AdminEvent from './admin/AdminEvent';
import AdminDeleteArtist from './admin/AdminDeleteArtist';
import AdminDeleteEvent from './admin/AdminDeleteEvent';
import AdminManageEvent from './admin/AdminManageEvent';
import AdminManageArtist from './admin/AdminManageArtist';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/event" component={Event} />
        <Route path="/artist" component={Artist} />
        <Route path="/booking" component={Booking} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin/AdminGeneral" component={AdminGeneral} />
        <Route path="/admin/AdminA" component={AdminA} />
        <Route path="/admin/AdminE" component={AdminE} />
        <Route path="/admin/AdminManageArtist" component={AdminManageArtist} />
        <Route path="/admin/AdminManageEvent" component={AdminManageEvent} />
        <Route path="/admin/AdminArtist" component={AdminArtist} />
        <Route path="/admin/AdminEvent" component={AdminEvent} />
        <Route path="/admin/AdminDeleteArtist" component={AdminDeleteArtist} />
        <Route path="/admin/AdminDeleteEvent" component={AdminDeleteEvent} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
