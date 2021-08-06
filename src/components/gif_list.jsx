/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-render-return */
import React, { Component } from 'react';

import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
export default class GifList extends Component {
  render() {
    // eslint-disable-next-line arrow-parens
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} />;
    });
  }
}
