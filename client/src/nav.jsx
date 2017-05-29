import React, { Component } from 'react';

export default class Nav extends Component {
  constructor (props) {
    super(props);
  };

  render () {

    return (
      <div className="">
        <h1 className="">Mixed Media: Slack Is Mind Control</h1>
        <h3>See Links From:</h3>
        <button onClick={this.props.getLinksFrom.bind(null, 'today')}>Today</button>
        <button onClick={this.props.getLinksFrom.bind(null, 'thisWeek')}>This Week</button>
        <button onClick={this.props.getLinksFrom.bind(null, 'thisMonth')}>This Month</button>
        <button onClick={this.props.getLinksFrom.bind(null, 'thisYear')}>This Year</button>
      </div>
    )
  };

};
