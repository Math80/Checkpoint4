import React, {Component} from 'react';
import EventUnic from './EventUnic'
import './Event.scss';


class Event extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/events')
      .then(res => res.json())
      .then(data => {
        this.setState({
          events: data
        });
      });
  }

  render(){
    const { events } = this.state;
    return(
      <div className="Event">
        <div className="title">
          <h1>Les Évènements</h1>
        </div>
        <div className="artistMap">
          {events.map(item => <EventUnic events={item} />)}
        </div>

      </div>
    )
  }
}

export default Event;