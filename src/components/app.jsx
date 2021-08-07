/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'CzbNOebmLACr6Tj3RrLMFslUoQapzKNI';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "l10bV0Vt2MiyucTMjZ"
    };

    // This binding is necessary to make `this` work in the callback
    this.selectGif = this.selectGif.bind(this);
  }

  search = (query) => {
    giphy(GIPHY_API_KEY).search({
      q: query,
      rating: 'pg-13',
      limit: 20
    }, (error, result) => {
      this.setState({ gifs: result.data });
    });
  }

  selectGif(id) {
    this.setState({ selectedGifId: id });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <dir className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </dir>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}
