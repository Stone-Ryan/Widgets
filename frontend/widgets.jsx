import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ClockWidget from './clock_widget';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<ClockWidget />, document.getElementById('root'));
});
