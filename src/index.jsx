import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
};

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
