import React, { Component } from "react";

class Task extends Component {

    render() {
        const { text , createdAt, number } = this.props.task;

        return (
            <li>
                Task number: {number} - {text} - Created at: {createdAt.toUTCString()}
            </li>
        );
    }
}

export default Task;