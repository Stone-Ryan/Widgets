import React, { Component } from 'react';

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
    }

    this.matches = this.matches.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.selectName = this.selectName.bind(this);
  }

  handleInput(e) {
    this.setState({ inputVal: e.currentTarget.value });
  }

  selectName(event) {
    let name = event.currentTarget.innerText;
    this.setState({inputVal: name});
  }

  matches() {
    const matches = [];

    if (this.state.inputVal.length === 0) {
      return this.props.names;
    }

    this.props.names.forEach(name => {
      let substring = name.slice(0, this.state.inputVal.length);
      if (substring.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push("No Matches");
    }

    return matches;
  }

  render() {
    let results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>{result}</li>
      );
    });
    return(
      <div className="autocomplete">
        <h2>Autocomplete</h2>
        <input onChange={this.handleInput} value={this.state.inputVal} placeholder="Search..."/>
        <ul>
          {results}
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
