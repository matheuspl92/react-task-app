import React, { Component } from "react";

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = { value: this.props.task.text, isBeingEdited: false };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleClickSubmit = this.handleClickSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClickEdit() {
        this.setState({ isBeingEdited: true });
    }

    handleClickSubmit(number, editTask) {
        editTask(number, this.state.value);
        this.setState({ isBeingEdited: false });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleEdit({ number, text, createdAt }, deleteTask, editTask, isBeingEdited) {

        if (isBeingEdited) {
            return (
                <li>
                    Task number: {number} - <input type="text" value={this.state.value} onChange={this.handleChange} /> - Created at: {createdAt.toUTCString()}
                    <button onClick={() => this.handleClickSubmit(number, editTask)}>Submit</button>
                    <button key={number} onClick={() => deleteTask(number)}>Delete</button>
                </li>

            )
        } else {
            return (
                <li>
                    Task number: {number} - {text} - Created at: {createdAt.toUTCString()}
                    <button onClick={this.handleClickEdit}>Edit</button>
                    <button key={number} onClick={() => deleteTask(number)}>Delete</button>
                </li>

            )
        }
    }

    render() {
        const { task, deleteTask, editTask } = this.props;

        return this.handleEdit(task, deleteTask, editTask, this.state.isBeingEdited);
    }
}

export default Task;