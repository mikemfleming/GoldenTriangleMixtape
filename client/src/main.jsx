import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YT from './youtube.jsx';
import MediaList from './mediaList.jsx';
import Helpers from '../../helpers.js';
import Nav from './nav.jsx';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      media: []
    } 

    this.getLinksFrom('today');

  };

  getLinksFrom(period) {
    const mediaFrom = {
      today: '/api/media/day',
      thisWeek: '/api/media/week',
      thisMonth: '/api/media/month',
      thisYear: '/api/media/year',
    };

    fetch( mediaFrom[period] , { method: 'get' })
      .then(res => res.json() )
      .then(media => this.setState({media}) )
      .catch(err => console.log(err) ); 
  }

  render () {

    console.log('got media: ', this.state.media)
    
    return (
      <div>
        <Nav getLinksFrom={this.getLinksFrom.bind(this)} />

        {this.state.media.length > 0
          ? <MediaList media={this.state.media} />
          : <h1>Loading...</h1>
        }

      </div>
    )
  };

};

ReactDOM.render(<App />, document.getElementById('main'));
