import React, { Component } from 'react';
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
    alert('Le formulaire a été soumis');
    event.preventDefault();
  }

  render() {
    return(
      <div className="AdminArtist">
        <div>
          <h1>Admin Artist</h1>
        </div>
        <div className="contactForm">
          <form onSubmit={this.handleSubmit}>
            <label>
              <span>
                Nom:
              </span>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
            <label>
              <span>
                logo:
              </span>
              <input type="text" name="logo" value={this.state.logo} onChange={this.handleChange} />
            </label>
            <label>
              <span>
                Discipline:
              </span>
              <input type="text" name="discipline" value={this.state.discipline} onChange={this.handleChange} />
            </label>
            <label>
              <span>
                Presentation:
              </span>
              <textarea name="presentation" value={this.state.presentation} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        </div>

      </div>
    )
  }
}

export default AdminArtist;