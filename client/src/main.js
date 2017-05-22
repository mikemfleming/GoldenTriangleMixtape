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
    fetch('/api/media/day', { method: 'get' })
      .then(res => res.json())
      .then(data => {
        this.setState({submissions: data})
      })
      .catch(err => console.log(err));
  };

  render () {
    const submissions = this.state.submissions,
          lastSubmission = submissions[submissions.length - 1],
          media = {
            user: lastSubmission ? lastSubmission.user : '',
            link: submissions.length > 0 ? Helpers.parseYouTubeId(lastSubmission.media.link) : ''
          }

    return (
      <div>
        <Nav />
        <MediaList mediaList={this.state.submissions} />
      </div>
    )
  };

};

ReactDOM.render(<App />, document.getElementById('main'));
