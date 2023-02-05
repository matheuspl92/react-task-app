import React, { Component } from 'react';
import Form from './components/Form';
import Overview from './components/Overview';

export default class App extends Component {
  constructor() {
    super();
    this.state = { tasks: [] };

    this.updateTasks = this.updateTasks.bind(this);
    this.orderTasks = this.orderTasks.bind(this);
  }

  updateTasks(newTask) {
    this.setState((prevState) => {
      return { tasks: [...prevState.tasks, newTask] };
    })
  }

  orderTasks() {
    const { tasks } = { ...this.state };
    tasks.sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return -1;
      }
      if (a.createdAt > b.createdAt) {
        return 1;
      }
      return 0;
    })
    console.log(tasks)

    this.setState({ tasks: tasks })
  }

  render() {
    return (
      <div>
        <Overview tasks={this.state.tasks} />
        <Form updateTasks={this.updateTasks} orderTasks={this.orderTasks} />
      </div>
    )
  }
}

