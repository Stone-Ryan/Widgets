import React, { Component } from 'react';

class Autocomplete extends Component {
  constructor(props) {
    super(props)
    state = {
      inputVal: '',
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ inputVal: e.currentTarget.value })
  }

  matches() {
    const matches = [];

    if (this.state.inputVal.length === 0) {
      return this.props.names;
    }

    this.props.names.forEach(name => {
      let sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push("No Matches");
    }

    return matches;
  }

  render() {
    <div className="autocomplete">
      <input onChange={this.handleInput} value={this.state.inputVal} placeholder="Search..."/>
      <ul>
        matches().forEach( (match) => {
          <li>
            match
          </li>
        })
      </ul>
    </div>
  }
}

export default Autocomplete;
