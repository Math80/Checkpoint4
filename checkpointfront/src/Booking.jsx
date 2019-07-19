import React, {Component} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './Booking.scss';


class Booking extends Component {
  constructor(props){
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      email: '',
      name: '',
      date: '',
      event_id: '',
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
      const url = `http://localhost:3000/api/booking`;
      fetch(url, config)
        .then((res) => {
          if (res.ok) {
            NotificationManager.success('', 'Réservation réalisée avec succès!');
          } else {
            NotificationManager.warning('', 'Erreur lors de la réservation.', 3000);
          }
        }).catch(() => {
          NotificationManager.error('', 'Erreur lors de l\'ajout de la réservation.', 5000);
        });
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
                Date:
              </span>
              <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
            </label>
            <label>
              <span>
                Event:
              </span>
              <input name="event_id" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
        <NotificationContainer />
      </div>
    )
  }
}

export default Booking;