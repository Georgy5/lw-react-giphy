import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: true
    };
  }

  handleClick = () => {
    console.log('clicked');
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    // Build and return HTML
    return (
      <div className={this.state.clicked ? 'clicked' : null}
      onClick={this.handleClick}>
      Hello 
      {this.props.name}</div>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <>
      <h1>nested content</h1><br />
      <h2><Hello name="Karl" /></h2>
      <h3><Hello name="B" /></h3><br />
      <p>First paragraph</p>
      <p><Hello name="World" /></p><br />
    </>, root
  );
}
