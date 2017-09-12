import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ClockWidget from './clock_widget';
import Autocomplete from './autocomplete';
import Tabs from './tabs';

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
  'Solider 76',
  'Sombra',
  'Symmetra',
  'Torbjörn',
  'Tracer',
  'Widowmaker',
  'Winston',
  'Zarya',
  'Zenyatta'
]

const Panes = [
  {title: 'one', content: 'first one'},
  {title: 'two', content: 'second one'},
  {title: 'three', content: 'Third one'},
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
        <div>
          <Tabs panes={Panes} />
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
