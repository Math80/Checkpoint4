import React, {Component} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './AdminDeleteEvent.scss';


class AdminDeleteEvent extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: []
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/api/events/title')
      .then(res => res.json())
      .then(data => {
        this.setState({
          events: data
        });
      });
  }

  onDelete = (event) => {
    const id = event.target.value;
    console.log(id);
    const config = {
      method: 'DELETE',
    };
    const url = `http://localhost:3000/api/event/off/${id}`;
    fetch(url, config)
    .then((res) => {
      if (res.ok) {
        NotificationManager.success('', 'Évenement supprimé avec succès!');
      } else {
        NotificationManager.warning('', 'Erreur lors de suppression de l\'évènement.', 3000);
      }
    }).catch(() => {
      NotificationManager.error('', 'Erreur lors de suppression de l\'évènement.', 5000);
    });
  }

  render(){
    const { events } = this.state;
    return(
      <div className="AdminDeleteEvent">
        <div className="title">
          <h1>SUPPRESSSION ÉVÈNEMENTS</h1>
        </div>
        <div className="EventList">
          <ul>
            { events.map(item => (
              <li key={item.id}>
                {item.title} {item.article} <button type="button" value={item.id} onClick={ this.onDelete }>Supprimer</button>
              </li>
            ))}
          </ul> 
        </div>
        <NotificationContainer />
      </div>
    )
  }
}

export default AdminDeleteEvent;