import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './AdminManageArtist.scss';

class AdminManageArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: 
      {name: '',
      logo: '',
      presentation: '',
      discipline: '',}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const id = this.props.match.params.id
    fetch(`http://localhost:3000/api/artist/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          artists: data[0],
        });
      });
      console.log(this.state);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    const id = this.props.match.params.id;
    event.preventDefault();
      const config = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.artists),
      };
      const url = `http://localhost:3000/api/artist/${id}`;
      fetch(url, config)
        .then((res) => {
          if (res.ok) {
            NotificationManager.success('', 'Artiste modifié avec succès!');
          } else {
            NotificationManager.warning('', 'Erreur lors de la modification de l\'artiste.', 3000);
          }
        }).catch(() => {
          NotificationManager.error('', 'Erreur lors de la modification de l\'artiste.', 5000);
        });
  }

  render() {
    const { artists: {name, logo, presentation, discipline} } = this.state;
    return(
      <div className="AdminManageArtist">
        <div>
          <h1>MODIFIER UN ARTISTE</h1>
        </div>
        <div className="contactForm">
          <form onSubmit={this.handleSubmit}>
            <label>
              <span>
                Nom:
              </span>
              <input type="text" name="name" onChange={this.handleChange} placeholder={name} />
            </label>
            <label>
              <span>
                logo:
              </span>
              <input type="text" name="logo" onChange={this.handleChange} placeholder={logo} />
            <label>
              <span>
                Presentation:
              </span>
              <textarea name="presentation" onChange={this.handleChange} placeholder={presentation} />
            </label>
            </label>
            <label>
              <span>
                Discipline:
              </span>
              <input type="text" name="discipline" onChange={this.handleChange} placeholder={discipline} />
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

export default AdminManageArtist;