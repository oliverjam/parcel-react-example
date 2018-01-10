import React from 'react';
import ReactDOM from 'react-dom';
import root from './getRoot';
import icon from './icon.svg';

const App = props => (
  <h1>
    Hello world<img src={icon} width="64px" />
  </h1>
);

ReactDOM.render(<App />, root);

