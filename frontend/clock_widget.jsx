import React, { Component } from 'react';

class ClockWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    this.intervalId.clearInterval();
  }

  tick() {
    this.setState( { time: new Date() } );
  }

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    hours = (hours < 10) ? (`0${hours}`): hours;
    minutes = (minutes < 10) ? (`0${minutes}`): minutes;
    seconds = (seconds < 10) ? (`0${seconds}`): seconds;

    return (
      <div className="clock">
        <h2>Clock</h2>
        <div>
          <p>Time</p>
          <p>{hours}:{minutes}:{seconds} PDT</p>
        </div>
        <div>
          <p>{this.state.time.toDateString()}</p>
        </div>
      </div>
    );
  }
}
export default ClockWidget;
