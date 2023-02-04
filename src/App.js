import React, { Component } from 'react';
import Form from './components/Form';
import Overview from './components/Overview';

export default class App extends Component {
  constructor() {
    super();
    this.state = { tasks: [] };

    this.updateTasks = this.updateTasks.bind(this);
  }

  updateTasks(newTask) {
    this.setState((prevState) => {
      return { tasks: [...prevState.tasks, newTask] };
    })
  }

  render() {
    return (
      <div>
        <Overview tasks={this.state.tasks} />
        <Form updateTasks={this.updateTasks}/>
      </div>
    )
  }
}

