import React, { Component } from 'react';
import Form from './components/Form';
import Overview from './components/Overview';

export default class App extends Component {
  constructor() {
    super();
    this.state = { tasks: [] };
  }

  render() {
    return (
      <div>
        <Overview tasks={this.state.tasks} />
        <Form/>
      </div>
    )
  }
}

