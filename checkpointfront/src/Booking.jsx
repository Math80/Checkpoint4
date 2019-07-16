import React, {Component} from 'react';
import './Booking.scss';


class Booking extends Component {
  constructor(props){
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      email: '',
      topic: '',
      date: '',
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
      <div className="Booking">
        <div>
          <h1>Booking</h1>
        </div>
        <div className="BookingForm">
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
                Choisissez votre spectacle :
              </span>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="surprise">Surprise</option>
                <option value="circus">Circus</option>
                <option value="circus_carrousel">Circus Carrousel</option>
                <option value="cirque_mexicain">Cirque Mexicain</option>
              </select>
            </label>
            <label>
              <span>
                Email:
              </span>
              <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    )
  }
}

export default Booking;