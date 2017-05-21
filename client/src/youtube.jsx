import React from 'react';
import YouTube from 'react-youtube';


export default class YT extends React.Component {
  render() {
    const opts = {
      height: '480',
      width: '854',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 1
      }
    };

    return (
      <div className="col-md-8 col-md-offset-half text-center">
        <YouTube
          videoId={this.props.media.link}
          opts={opts}
          onReady={this._onReady}
        />
        <h4>{this.props.media.user}</h4>
      </div>
    );
  };
 
  _onReady(event) {
    // access to player in all event handlers via event.target 
    // event.target.pauseVideo();
  };
};