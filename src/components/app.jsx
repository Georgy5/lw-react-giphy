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
            <Gif id="l10bV0Vt2MiyucTMjZ"/>
          </dir>
        </dix>
        <dix className="right-scene"></dix>
      </div>
    );
  }
}
