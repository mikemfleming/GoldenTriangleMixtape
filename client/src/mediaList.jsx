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
          {this.props.media.map((source, idx) => {
            const id = Helpers.parseYouTubeId(source.link)

            return (<MediaItem 
              {...this.state}
              source={source} 
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
