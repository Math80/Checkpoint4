import React, {Component} from 'react';
import './Contact.scss';


class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      email: '',
      topic: '',
      comment: '',
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

  render(){
    return(
      <div className="Contact">
        <div>
          <h1>Contact</h1>
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
                Prénom:
              </span>
              <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
            </label>
            <label>
              <span>
                Email:
              </span>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
            </label>
            <label>
              <span>
                Sujet:
              </span>
              <input type="text" name="topic" value={this.state.topic} onChange={this.handleChange} />
            </label>
            <label>
              <span>
                Commentaire:
              </span>
              <textarea name="comment" value={this.state.comment} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;