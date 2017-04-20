import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor (props) {
    super(props)

    this.state= {
      term: ''
    }; 

  }

  render () {
    return (
      <input
        value={this.state.term}
        onChange={ e => this.onInputChange(e.target.value) } />
    );
  }

  onInputChange (term) {
    this.setState({term})
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
