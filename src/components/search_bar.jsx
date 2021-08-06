import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}
