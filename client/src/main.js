import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputBar from './inputBar.js'
import MediaList from './mediaList.jsx'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      submission: ''
    }; 

    this.addToCatalog = this.addToCatalog.bind(this)

  }

  handleChange(e) {
    this.setState({submission: e.target.value})
  }

  addToCatalog() {
    alert(this.state.submission)
  }

  render () {
    return (
      <div>
        <InputBar add={this.addToCatalog.bind(this)} handleChange={this.handleChange.bind(this)}/>
        <MediaList media={this.state.submission} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('main'));
