import React, { Component } from 'react';
import SearchBar from './search_bar';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div>
        <dix className="left-scene">
          <SearchBar />
        </dix>
        <dix className="right-scene"></dix>
      </div>
    );
  }
}
