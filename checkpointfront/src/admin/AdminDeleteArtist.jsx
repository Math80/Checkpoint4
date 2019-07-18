import React, {Component} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './AdminDeleteArtist.scss';


class AdminDeleteArtist extends Component {
  constructor(props){
    super(props);
    this.state = {
      artists: []
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/api/artists/name')
      .then(res => res.json())
      .then(data => {
        this.setState({
          artists: data
        });
      });
  }

  onDelete = (event) => {
    const id = event.target.value;
    console.log(id);
    const config = {
      method: 'DELETE',
    };
    const url = `http://localhost:3000/api/artist/off/${id}`;
    fetch(url, config)
    .then((res) => {
      if (res.ok) {
        NotificationManager.success('', 'Artiste supprimé avec succès!');
      } else {
        NotificationManager.warning('', 'Erreur lors de suppression de l\'artiste.', 3000);
      }
    }).catch(() => {
      NotificationManager.error('', 'Erreur lors de suppression de l\'artiste.', 5000);
    });
  }

  render(){
    const { artists } = this.state;
    return(
      <div className="AdminDeleteArtist">
        <div className="title">
          <h1>SUPPRESSSION ARTISTES</h1>
        </div>
        <div className="ArtistList">
          <ul>
            { artists.map(item => (
              <li key={item.id}>
                {item.name} {item.discipline} <button type="button" value={item.id} onClick={ this.onDelete }>Supprimer</button>
              </li>
            ))}
          </ul> 
        </div>
        <NotificationContainer />
      </div>
    )
  }
}

export default AdminDeleteArtist;