/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [
        { id: "l10bV0Vt2MiyucTMjZ" },
        { id: "xT9IgDEI1iZyb2wqo8" },
        { id: "ozf26DV8FqaCpkYt6n" }
      ],
      selectedGifId: "l10bV0Vt2MiyucTMjZ"
    };
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <dir className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </dir>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}
