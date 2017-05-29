import React from 'react';
import YouTube from 'react-youtube';
import Helpers from '../../helpers.js';


export default class YT extends React.Component {
  render() {
    const opts = {
      height: '360',
      width: '480',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 1
      }
    };
    return (
      <div className="media-item__yt-vid" data-id={this.props.id}>
        <YouTube
          videoId={Helpers.parseYouTubeId(this.props.source.link)}
          opts={opts}
          onReady={this._onReady}
        />
        <h5>Submitted by {this.props.source.user}</h5>
      </div>
    );
  };
 
  _onReady(event) {
    // access to player in all event handlers via event.target 
    // event.target.pauseVideo();
  };
};