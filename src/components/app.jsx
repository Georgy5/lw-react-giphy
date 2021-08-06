import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div>
        <dix className="left-scene">
          <SearchBar />
          <dir className="selected-gif">
            <Gif />
          </dir>
        </dix>
        <dix className="right-scene"></dix>
      </div>
    );
  }
}
