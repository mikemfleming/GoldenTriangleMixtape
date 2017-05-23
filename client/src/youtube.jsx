import React from 'react';
import YouTube from 'react-youtube';


export default class YT extends React.Component {
  render() {
    const opts = {
      height: '480',
      width: '854',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 0
      }
    };
    return (
      <div className="" data-id={this.props.id}>
        <YouTube
          videoId={this.props.link}
          opts={opts}
          onReady={this._onReady}
        />
        <h4>{this.props.user}</h4>
      </div>
    );
  };
 
  _onReady(event) {
    // access to player in all event handlers via event.target 
    // event.target.pauseVideo();
  };
};