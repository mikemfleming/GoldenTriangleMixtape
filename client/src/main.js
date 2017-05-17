import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import InputBar from './inputBar.js'
import MediaList from './mediaList.jsx'
import YT from './youtube.jsx'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      submissions: []
    } 

    
    window.io.on('submission', this.addToSubmissions.bind(this))

  }

  parseYouTubeId(link) {
    return link.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/)[1].replace('>', '')
  }

  addToSubmissions(req) {
    const submissions = this.state.submissions.slice()

    submissions.push(req)
    this.setState({submissions: submissions})
    console.log(submissions)
  }

  render () {
    const submissions = this.state.submissions,
          lastSubmission = submissions[submissions.length - 1],
          media = submissions.length > 0 ? this.parseYouTubeId(lastSubmission.text) : ''

    return (
      <div>
        <h1>List of Submissions</h1>
        <YT media={media} />
        <ul>
          {this.state.submissions.map((req, idx) => <li key={idx}>{req.user_name}: {req.text}</li> )}
        </ul>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('main'))
