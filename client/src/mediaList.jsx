import React, { Component } from 'react';
import MediaItem from './mediaItem.jsx';

export default class MediaList extends Component {
  constructor (props) {
    super(props);
  };

  render () {

    return (
      <div className="col-md-4 col-md-offset-half">
        <ul className="list-group">
          {this.props
               .mediaList
               .reverse()
               .map((item, idx) => <MediaItem item={item} idx={idx} /> )
          }
        </ul>
      </div>
    )
  };

};
