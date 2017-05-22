import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YT from './youtube.jsx';
import MediaList from './mediaList.jsx';
import Helpers from '../../helpers.js';

// TODO: rename submission => media

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      submissions: []
    } 

    window.io.on('submission', this.addIoToSubmissions.bind(this));

  };

  addToSubmissions(req) {
    const submissions = this.state.submissions.slice(),
          user = req.user,
          link = req.link;

    submissions.push({user, link});
    this.setState({submissions: submissions});
  };

  addIoToSubmissions(req) {
    const submissions = this.state.submissions.slice(),
          user = req.user_name,
          link = req.text;

    submissions.push({user, link});
    this.setState({submissions: submissions});
  };

  componentWillMount() {
    fetch('/api/media/all', { method: 'get' })
      .then(res => res.json())
      .then(data => {
        return data.forEach(record => {
          const user = record.media.user,
                link = record.media.link;
          this.addToSubmissions({user, link});
        })
      })
      .catch(err => console.log(err));
  };

  render () {
    const submissions = this.state.submissions,
          lastSubmission = submissions[submissions.length - 1],
          media = {
            user: lastSubmission ? lastSubmission.user : '',
            link: submissions.length > 0 ? Helpers.parseYouTubeId(lastSubmission.link) : ''
          }

    return (
      <div>
        <div className="page-header">
          <h1 className="text-center">Mixed Media: Slack As Remote Control</h1>
        </div>
        <YT media={media} />
        <MediaList mediaList={this.state.submissions} />
      </div>
    )
  };

};

ReactDOM.render(<App />, document.getElementById('main'));
