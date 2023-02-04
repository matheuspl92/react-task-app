import React, { Component } from "react";

class Task extends Component {
    render() {
        return (
            <li>
                {this.props.content}
            </li>
        );
    }
}

export default Task;