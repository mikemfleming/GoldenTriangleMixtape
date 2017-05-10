import React, { Component } from 'react';

export default class InputBar extends Component {
  constructor (props) {
    super(props)

  }

  handleSubmit() {
    this.props.add()
  }

  render () {
    return (
      <div>
        <h1>Oh dang waddup</h1>
        <div className="col-md-6 col-md-offset-3">
            <div className="input-group">
              <span className="input-group-btn">
                <button onClick={this.handleSubmit.bind(this)} className="btn btn-default" type="button">Go!</button>
              </span>
              <input onChange={this.props.handleChange} type="text" className="form-control" placeholder="Search for..." />
            </div>
          </div>
      </div>
    );
  }

}