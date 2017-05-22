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
      <li className="" key={this.props.idx}>
        <div className="">
          <h4>{this.props.item.user}</h4>
        </div>
        <div className="">
          <img className="" src={this.genYTCoverPhoto(this.props.item.media.link)} alt={`cover-img-${this.props.idx}`} />
        </div>
      </li>
    )
  };

};
