import React, { Component } from "react";

class Task extends Component {

    render() {
        const { text , createdAt } = this.props.task;

        return (
            

            <li>
                {text} - Created at: {createdAt.toUTCString()}
            </li>
        );
    }
}

export default Task;