import React, { Component } from 'react';
import Form from './components/Form';
import Overview from './components/Overview';

export default class App extends Component {
  constructor() {
    super();
    this.state = { tasks: [] };

    this.updateTasks = this.updateTasks.bind(this);
    this.orderTasks = this.orderTasks.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  };

  updateTasks(newTask) {
    this.setState((prevState) => {
      return { tasks: [...prevState.tasks, newTask] };
    })
  };

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

    for (let i = 0; i < tasks.length; i += 1){
      tasks[i].number = i + 1;
    }

    this.setState({ tasks: tasks });
  };

  async deleteTask(taskNumber) {
    const { tasks } = { ...this.state };
    console.log('deleted')
    await this.setState({ tasks: tasks.filter( task => task.number !== taskNumber)});
    this.orderTasks();
  };

  render() {
    return (
      <div>
        <Overview tasks={this.state.tasks} deleteTask={this.deleteTask} />
        <Form updateTasks={this.updateTasks} orderTasks={this.orderTasks} />
      </div>
    )
  }
}

