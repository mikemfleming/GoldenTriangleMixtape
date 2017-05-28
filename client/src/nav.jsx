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
        <button onClick={this.props.getToday} >Today</button>
        <button onClick={this.props.getWeek} >This Week</button>
        <button onClick={this.props.getMonth} >This Month</button>
        <button>This Year</button>
      </div>
    )
  };

};
