import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './AdminManageEventList.scss';

class AdminManageEventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
  }


  componentDidMount(){
    fetch(`http://localhost:3000/api/events`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          events: data
        });
      });
      console.log(this.state);
  }

  render() {
    const { events } = this.state;
    console.log(this.state.events.id)
    return(
      <div className="AdminManageEventList">
        <ul>
            {events.map(item => (
            <li key={item.id}>
              {item.title} <img src={item.picture} alt='pict'></img> {item.article} {item.artist_id}<NavLink to={`/admin/AdminManageEvent/${item.id}`}><button>Modifier</button></NavLink>
            </li>))}
        </ul>
      </div>
    )
  }
}

export default AdminManageEventList;