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
                  return idx === 0
                    ? <YouTube link={Helpers.parseYouTubeId(item.media.link)} user={item.media.user} />
                    : <MediaItem item={item} idx={idx} />
               })
          }
        </ul>
      </div>
    )
  };

};
