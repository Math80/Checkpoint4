import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './AdminArtist.scss';

class AdminArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      logo: '',
      presentation: '',
      discipline: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      };
      const url = `http://localhost:3000/api/newartist`;
      fetch(url, config)
        .then((res) => {
          if (res.ok) {
            NotificationManager.success('', 'Artiste ajouté avec succès!');
          } else {
            NotificationManager.warning('', 'Erreur lors de l\'ajout de l\'artiste.', 3000);
          }
        }).catch(() => {
          NotificationManager.error('', 'Erreur lors de l\'ajout de l\'artiste.', 5000);
        });
  }

  render() {
    return(
      <div className="AdminArtist">
        <div>
          <h1>AJOUTER UN ARTISTE</h1>
        </div>
        <div className="contactForm">
          <form onSubmit={this.handleSubmit}>
            <label>
              <span>
                Nom:
              </span>
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <label>
              <span>
                logo:
              </span>
              <input type="text" name="logo" onChange={this.handleChange} />
            </label>
            <label>
              <span>
                Discipline:
              </span>
              <input type="text" name="discipline" onChange={this.handleChange} />
            </label>
            <label>
              <span>
                Presentation:
              </span>
              <textarea name="presentation" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
        <div className="crud">
          <NavLink activeClassName="active" to="/admin/AdminA"><button>Retour Admin</button></NavLink>
        </div>
        <NotificationContainer />
      </div>
    )
  }
}

export default AdminArtist;