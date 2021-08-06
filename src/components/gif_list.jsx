/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Gif from './gif';

export default class GifList extends Component {
  renderList = () => {
    // eslint-disable-next-line arrow-parens
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} />;
    });
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}
