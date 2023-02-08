import React, { Component } from "react";

class Task extends Component {

    render() {
        const { task, deleteTask } = this.props;
        const { text , createdAt, number } = task;

        return (
            <li>
                Task number: {number} - {text} - Created at: {createdAt.toUTCString()}
                <button key={number} onClick={() => deleteTask(number)}>Delete</button>
            </li>
        );
    }
}

export default Task;