import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './AdminManageEvent.scss';

class AdminManageEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events:
      {title: '',
      picture: '',
      article: '',
      artist_id: '',}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const id = this.props.match.params.id
    fetch(`http://localhost:3000/api/event/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          events: data[0],
        });
      });
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    const id = this.props.match.params.id;
    const data = { ...this.state.events }
    console.log(data);
    event.preventDefault();
      const config = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      const url = `http://localhost:3000/api/event/${id}`;
      fetch(url, config)
        .then((res) => {
          if (res.ok) {
            NotificationManager.success('', 'Évènement modifié avec succès!');
          } else {
            NotificationManager.warning('', 'Erreur lors de la modification de l\'évènement.', 3000);
          }
        }).catch(() => {
          NotificationManager.error('', 'Erreur lors de la modification de l\'évènement.', 5000);
        });
  }

  render() {
    console.log(this.state);
    const { events: {title, picture, article, artist_id}} = this.state;
    return(
      <div className="AdminManageEvent">
        <div>
          <h1>MODIFIER UN ÉVÈNEMENT</h1>
        </div>
        <div className="contactForm">
          <form onSubmit={this.handleSubmit}>
            <label>
              <span>
                Nom de l'évènement:
              </span>
              <input type="text" name="title" onChange={this.handleChange} placeholder={title}/>
            </label>
            <label>
              <span>
                Image:
              </span>
              <input type="text" name="picture" onChange={this.handleChange} placeholder={picture}/>
            </label>
            <label>
              <span>
                Article:
              </span>
              <textarea name="article" onChange={this.handleChange} placeholder={article} />
            </label>
            <label>
              <span>
                Artiste:
              </span>
              <input name="artist_id" onChange={this.handleChange} placeholder={artist_id} />
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
        <div className="crud">
          <NavLink activeClassName="active" to="/admin/AdminE"><button>Retour Admin</button></NavLink>
        </div>
        <NotificationContainer />
      </div>
    )
  }
}

export default AdminManageEvent;