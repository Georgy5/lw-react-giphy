import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class SearchBar extends Component {
  handleUpdate = (event) => {
    console.log(event.target.value);
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
