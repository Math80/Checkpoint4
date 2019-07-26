import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './home/Home';
import NavBar from './navbar_footer/NavBar';
import Footer from './navbar_footer/Footer';
import Event from './events/Event';
import Artist from './artists/Artist';
import Contact from './contact/Contact';
import Booking from './booking/Booking';
import AdminGeneral from './admin/AdminGeneral';
import AdminA from './admin/adminartist/AdminA';
import AdminE from './admin/adminevent/AdminE';
import AdminArtist from './admin/adminartist/AdminArtist';
import AdminEvent from './admin/adminevent/AdminEvent';
import AdminDeleteArtist from './admin/adminartist/AdminDeleteArtist';
import AdminDeleteEvent from './admin/adminevent/AdminDeleteEvent';
import AdminManageEvent from './admin/adminevent/AdminManageEvent';
import AdminManageArtist from './admin/adminartist/AdminManageArtist';
import AdminManageArtistList from './admin/adminartist/AdminManageArtistList';
import AdminManageEventList from './admin/adminevent/AdminManageEventList';
 


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
        <Route path="/admin/AdminManageArtist/:id" component={AdminManageArtist} />
        <Route path="/admin/AdminManageEvent/:id" component={AdminManageEvent} />
        <Route path="/admin/AdminArtist" component={AdminArtist} />
        <Route path="/admin/AdminEvent" component={AdminEvent} />
        <Route path="/admin/AdminDeleteArtist" component={AdminDeleteArtist} />
        <Route path="/admin/AdminDeleteEvent" component={AdminDeleteEvent} />
        <Route path="/admin/AdminManageArtistList" component={AdminManageArtistList} />
        <Route path="/admin/AdminManageEventList" component={AdminManageEventList} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
