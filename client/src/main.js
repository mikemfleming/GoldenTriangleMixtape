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

    window.io.on('submission', this.addIoToSubmissions.bind(this))

  }

  parseYouTubeId(link) {
    return link.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/)[1].replace('>', '')
  }

  addToSubmissions(req) {
    const submissions = this.state.submissions.slice(),
          user = req.user,
          link = req.link

    submissions.push({user, link})
    this.setState({submissions: submissions})
  }

  addIoToSubmissions(req) {
    const submissions = this.state.submissions.slice(),
          user = req.user_name,
          link = req.text

    submissions.push({user, link})
    this.setState({submissions: submissions})
  }

  componentWillMount() {
    fetch('http://localhost:8080/api/submissions', { method: 'get' })
      .then(res => res.json())
      .then(data => {
        return data.forEach(record => {
          const user = record.submission.user,
                link = record.submission.link
          this.addToSubmissions({user, link})
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    console.log(this.state.submissions)
    const submissions = this.state.submissions,
          lastSubmission = submissions[submissions.length - 1],
          media = submissions.length > 0 ? this.parseYouTubeId(lastSubmission.link) : ''

    return (
      <div>
        <h1 className="text-center">Mixed Media: Slack As Remote Control</h1>
        <YT media={media} />
        <ul className="col-md-3">
          {this.state.submissions.reverse().map((req, idx) => <li key={idx}>{req.user}: {req.link}</li> )}
        </ul>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('main'))
