import React, { Component } from 'react';
import MediaItem from './mediaItem.jsx';

export default class MediaList extends Component {
  constructor (props) {
    super(props);
  };

  render () {

    return (
      <div className="col-md-8 col-md-offset-2">
        <ul className="list-group">
          {this.props
               .mediaList
               .map((item, idx) => <MediaItem item={item} idx={idx} /> )
          }
        </ul>
      </div>
    )
  };

};
