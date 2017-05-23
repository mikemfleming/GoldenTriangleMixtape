import React, { Component } from 'react';
import MediaItem from './mediaItem.jsx';
import YouTube from './youtube.jsx';
import Helpers from '../../helpers.js';

export default class MediaList extends Component {
  constructor (props) {
    super(props);
  };

  render () {

    return (
      <div className="">
        <ul className="">
          {this.props
               .mediaList
               .map((item, idx) => {
                  const id = Helpers.parseYouTubeId(item.media.link)
                  return <MediaItem item={item} key={idx} data-id={id} />
               })
          }
        </ul>
      </div>
    )
  };

};
