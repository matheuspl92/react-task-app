import React, { Component } from 'react'
import Task from './Task'

export default class Overview extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((content, id) => {
            return <Task content={content} key={id} />
        })}
      </ul>
    )
  }
}
