import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import InputBar from './inputBar.js'
import MediaList from './mediaList.jsx'
import YT from './youtube.jsx'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      submission: ''
    } 

    this.addToCatalog = this.addToCatalog.bind(this)

  }

  handleChange(e) {
    const url = e.target.value,
          id = url.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/)[1]
    this.setState({submission: id})
  }

  addToCatalog() {
    alert(this.state.submission)
  }

  render () {
    return (
      <div>
        <InputBar add={this.addToCatalog.bind(this)} handleChange={this.handleChange.bind(this)}/>
        <MediaList media={this.state.submission} />
        <YT media={this.state.submission} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('main'))
