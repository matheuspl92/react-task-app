import React, { Component } from 'react'
import Task from './Task'

export default class Overview extends Component {
  render() {
    const { tasks, deleteTask, editTask } = this.props;
    return (
      <ul>
        {tasks.map((task, id) => {
            return <Task task={task} key={id} deleteTask={deleteTask} editTask={editTask} />
        })}
      </ul>
    )
  }
}
