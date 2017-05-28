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

    this.getLinksFromToday()

  };

  getLinksFromToday() {
    console.log('***')
    fetch('/api/media/day', { method: 'get' })
      .then(res => res.json() )
      .then(media => this.setState({media}) )
      .catch(err => console.log(err) ); 
  }

  getLinksFromThisWeek() {
    console.log('***')
    fetch('/api/media/week', { method: 'get' })
      .then(res => res.json() )
      .then(media => this.setState({media}) )
      .catch(err => console.log(err) ); 
  }

  getLinksFromThisMonth() {
    console.log('***')
    fetch('/api/media/month', { method: 'get' })
      .then(res => res.json() )
      .then(media => this.setState({media}) )
      .catch(err => console.log(err) ); 
  }

  render () {
    console.log(this.state.media)
    return (
      <div>
        <Nav getToday={this.getLinksFromToday.bind(this)} 
             getWeek={this.getLinksFromThisWeek.bind(this)} 
             getMonth={this.getLinksFromThisMonth.bind(this)} />

        {this.state.media.length > 0
          ? <MediaList media={this.state.media} />
          : <h1>Loading...</h1>
        }
      </div>
    )
  };

};

ReactDOM.render(<App />, document.getElementById('main'));
