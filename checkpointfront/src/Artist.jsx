import React, {Component} from 'react';
import ArtistUnic from './ArtistUnic';
import './Artist.scss';


class Artist extends Component {
  constructor(props){
    super(props);
    this.state = {
      artists: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/artists')
      .then(res => res.json())
      .then(data => {
        this.setState({
          artists: data
        });
      });
  }

  render(){
    const { artists } = this.state;
    return(
      <div className="Artist">
        <div className="title">
          <h1>ARTIST</h1>
        </div>
        <div className="artistMap">
          {artists.map(item => <ArtistUnic artists={item} />)}
        </div>
      </div>
    )
  }
}

export default Artist;