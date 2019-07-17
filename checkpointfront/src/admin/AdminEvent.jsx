import React, { Component } from 'react';
import './AdminEvent.scss';

class AdminEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      picture: '',
      article: '',
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
              <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
            </label>
            <label>
              <span>
                Image:
              </span>
              <input type="text" name="picture" value={this.state.picture} onChange={this.handleChange} />
            </label>
            <label>
              <span>
                Article:
              </span>
              <textarea name="article" value={this.state.article} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        </div>

      </div>
    )
  }
}

export default AdminEvent;