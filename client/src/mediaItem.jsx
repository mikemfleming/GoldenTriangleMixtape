import React, { Component } from 'react';
import Helpers from '../../helpers.js';
import YouTube from './youtube.jsx';

export default class MediaItem extends Component {
  constructor (props) {
    super(props);
  };

  genYTCoverPhoto(id) {
    const parsedId = Helpers.parseYouTubeId(id)
    return `http://img.youtube.com/vi/${parsedId}/0.jpg`
  }

  render () {
    return (

      this.props.currentMediaId === this.props.id
        ? <YouTube link={this.props.id} />
        : (<li className="" data-id={this.props.id} key={this.props.id}>
            <img onClick={this.props.selectMedia.bind(null, this.props.id)} data-id={this.props.id} className="" src={this.genYTCoverPhoto(this.props.item.media.link)} alt={`cover-img-${this.props.id}`} />
          </li>)
    )
  };

};
