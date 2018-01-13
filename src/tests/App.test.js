import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Main from '../components/Main';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
});