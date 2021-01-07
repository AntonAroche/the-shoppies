import React, { Component } from 'react'

export default class Nomination extends Component {
    handleRemove = () => {
        this.props.removeNomination(this.props.id)
    }

    render() {
        const { name, year } = this.props;

        return (
            <div className="Nomination">
                <li>
                    {name}{" "}
                    {year}
                    <button onClick={this.handleRemove}>Remove</button>
                </li>
            </div>
        )
    }
}
