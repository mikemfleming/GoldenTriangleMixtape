import React, { Component } from 'react';
import Helpers from '../../helpers.js';

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
      <li className="" data-id={this.props.id} key={this.props.id}>
        <img className="" src={this.genYTCoverPhoto(this.props.item.media.link)} alt={`cover-img-${this.props.id}`} />
      </li>
    )
  };

};
