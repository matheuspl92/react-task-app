import React, { Component } from 'react'
import Task from './Task'

export default class Overview extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task, id) => {
            return <Task task={task} key={id} />
        })}
      </ul>
    )
  }
}
