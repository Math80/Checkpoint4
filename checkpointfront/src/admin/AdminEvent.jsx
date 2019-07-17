import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './AdminEvent.scss';

class AdminEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      picture: '',
      article: '',
      artist_id: '',
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
    console.log(this.state);
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      };
      const url = `http://localhost:3000/api/newevent`;
      fetch(url, config)
        .then((res) => {
          console.log(res);
          if (res.ok) {
            NotificationManager.success('', 'Évènement ajouté avec succès!');
          } else {
            NotificationManager.warning('', 'Erreur lors de l\'ajout de l\'évènement.', 3000);
          }
        }).catch(() => {
          NotificationManager.error('', 'Erreur lors de l\'ajout de l\'évènement.', 5000);
        });
  }

  render() {
    return(
      <div className="AdminEvent">
        <div>
          <h1>Admin Event</h1>
        </div>
        <div className="contactForm">
          <form onSubmit={this.handleSubmit}>
            <label>
              <span>
                Nom de l'évènement:
              </span>
              <input type="text" name="title" onChange={this.handleChange} />
            </label>
            <label>
              <span>
                Image:
              </span>
              <input type="text" name="picture" onChange={this.handleChange} />
            </label>
            <label>
              <span>
                Article:
              </span>
              <textarea name="article" onChange={this.handleChange} />
            </label>
            <label>
              <span>
                Artiste:
              </span>
              <input name="artist_id" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
        <NotificationContainer />
      </div>
    )
  }
}

export default AdminEvent;