import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ClockWidget from './clock_widget';
import Autocomplete from './autocomplete';

const Names = [
  'Ana',
  'Bastion',
  'D.Va',
  'Doomfist',
  'Genji',
  'Hanzo',
  'Junkrat',
  'Lucio',
  'McCree',
  'Mei',
  'Mercy',
  'Orisa',
  'Phara',
  'Reaper',
  'Reinhardt',
  'Roadhog',
  'Solider76',
  'Sombra',
  'Symmetra',
  'Torbjörn',
  'Tracer',
  'Widowmaker',
  'Winston',
  'Zarya',
  'Zenyatta'
]

class Root extends Component {
  render() {
    return (
      <div>
        <h1>Widgets</h1>
        <div>
          <ClockWidget />
        </div>
        <div>
          <Autocomplete names={Names} />
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
