import React, {Component} from 'react';
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

  render(){
    const { artists } = this.state;
    return(
      <div className="AdminDeleteArtist">
        <div className="title">
          <h1>ARTISTES</h1>
        </div>
        <div className="ArtistList">
          <ul>
            { artists.map(item => (
              <li key={item.id}>
                {item.name} {item.discipline} <button type="button">Supprimer</button>
              </li>
            ))}
          </ul> 
        </div>
      </div>
    )
  }
}

export default AdminDeleteArtist;