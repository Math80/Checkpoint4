import React, {Component} from 'react';
import './Artist.scss';


class Artist extends Component {
  constructor(props){
    super(props);
    this.state = {
      artists: [{name: 'Gogo', logo: 'img1', presentation: 'Gogo est un clown joyeux et triste à la fois', discipline: 'clown'},
      {name: 'Yasa', logo: 'img2', presentation: 'Spectaculaire dressage de fauves', discipline: 'dressage'},
      {name: 'BingBong', logo: 'img3', presentation: 'Les balles rebondissent à n\'en plus finir.', discipline: 'jonglerie'}
    ],
    }
  }
  render(){
    return(
      <div className="Artist">
        <h1>ARTIST</h1>

      </div>
    )
  }
}

export default Artist;