import React from 'react'
import YouTube from 'react-youtube'
import db from '../../db.js'


export default class YT extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 1
      }
    };
     window.db = db
     console.log(db)

    return (
      <div className="col-md-6 col-md-offset-3 text-center">
        <YouTube
          videoId={this.props.media}
          opts={opts}
          onReady={this._onReady}
        />
        {this.props.media}

      </div>
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target 
    // event.target.pauseVideo();
  }
}