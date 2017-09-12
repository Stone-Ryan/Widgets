import React, { Component } from 'react';

class Headers extends Component {
  render() {
    let selected = this.props.currentTab;
    let headers = this.props.panes.map((pane, i) => {
      let title = pane.title;
      let klass = '';

      if (i === selected) {
        klass = 'active';
      }

      return (
        <li key={i}
            className={klass}
            onClick={this.props.onTabChosen.bind(null, i)}>
          {title}{''}
        </li>
      );
    });
    return(
      <ul>
        {headers}
      </ul>
    );
  }
}

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
    }

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(idx) {
    this.setState({currentTab: idx});
  }

  render() {
    let pane = this.props.panes[this.state.currentTab];

    return (
      <div>
        <div>
          <Headers currentTab={this.state.currentTab}
                  onTabChosen={this.selectTab}
                  panes={this.props.panes} />
        </div>
        <div className={`tab-content${this.state.currentTab}`}>
          <article>
            {pane.content}
          </article>
        </div>
      </div>
    );
  }
}


export default Tabs;
