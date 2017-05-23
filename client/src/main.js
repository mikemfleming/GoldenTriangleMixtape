import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YT from './youtube.jsx';
import MediaList from './mediaList.jsx';
import Helpers from '../../helpers.js';
import Nav from './nav.jsx';

// TODO: rename submission => media

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      media: []
    } 

    fetch('/api/media/day', { method: 'get' })
      .then(res => res.json())
      .then(data => {
        this.setState({media: data})
      })
      .catch(err => console.log(err));
  };

  render () {

    return (
      <div>
        <Nav />
        {this.state.media.length > 0
          ? <MediaList mediaList={this.state.media} />
          : <h1>Loading...</h1>
        }
      </div>
    )
  };

};

ReactDOM.render(<App />, document.getElementById('main'));
