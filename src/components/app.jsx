import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    const gifs = [
      { id: "l10bV0Vt2MiyucTMjZ" },
      { id: "xT9IgDEI1iZyb2wqo8" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <dir className="selected-gif">
            <Gif id="l10bV0Vt2MiyucTMjZ" />
          </dir>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}
