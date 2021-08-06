import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Gif extends Component {
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}
