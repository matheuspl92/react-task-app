import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    async handleSubmit(event) {
        await this.props.updateTasks({ text: this.state.value, createdAt: new Date()});
        this.props.orderTasks();
        event.preventDefault();
        this.setState({ value: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Type your task:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
