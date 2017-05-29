import React, { Component } from 'react';
import Helpers from '../../helpers.js';
import YouTube from './youtube.jsx';

export default class MediaItem extends Component {
  constructor (props) {
    super(props);
  };

  getYTCoverPhoto(id) {
    const parsedId = Helpers.parseYouTubeId(id)
    return `http://img.youtube.com/vi/${parsedId}/0.jpg`
  }

  render () {
    return (

      this.props.currentMediaId === this.props.id
        ? <YouTube link={this.props.id} />
        : (<li data-id={this.props.id} key={this.props.id}>
            <img onClick={this.props.selectMedia.bind(null, this.props.id)} 
                 src={this.getYTCoverPhoto(this.props.source.link)} 
                 alt={`cover-img-${this.props.id}`} />
          </li>)
    )
  };

};
