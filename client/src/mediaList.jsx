import React, { Component } from 'react';
import MediaItem from './mediaItem.jsx';
import YouTube from './youtube.jsx';
import Helpers from '../../helpers.js';

export default class MediaList extends Component {
  constructor (props) {
    super(props);

    this.state= {
      currentMediaId: null,
    };
  };

  selectMedia(id) {
    this.setState({currentMediaId: id})
  }

  render () {

    return (
      <div className="">
        <ul className="">
          {this.props.mediaList.map((item, idx) => {
            const id = Helpers.parseYouTubeId(item.link)

            return (<MediaItem 
              currentMediaId={this.state.currentMediaId} 
              item={item} 
              key={idx} 
              id={id} 
              selectMedia={this.selectMedia.bind(this)} 
            />)
         })
          }
        </ul>
      </div>
    )
  };

};
