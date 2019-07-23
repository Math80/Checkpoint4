import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './AdminManageArtistList.scss';

class AdminManageArtistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    }
  }


  componentDidMount(){
    fetch(`http://localhost:3000/api/artists`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          artists: data
        });
      });
      console.log(this.state);
  }

  render() {
    const { artists } = this.state;
    return(
      <div className="AdminManageArtistList">
        <ul>
            {artists.map(item => (
            <li key={item.id}>
              {item.name} <img src={item.logo} alt='logo'></img> {item.presentation} {item.discipline}<NavLink to={`/admin/AdminManageArtist/${item.id}`}><button>Modifier</button></NavLink>
            </li>))}
        </ul>
      </div>
    )
  }
}

export default AdminManageArtistList;