import React, { Component } from 'react'
import './styles/Nomination.css'

export default class Nomination extends Component {
    handleRemove = () => {
        this.props.removeNomination(this.props.id)
    }

    render() {
        const { name, year } = this.props;

        return (
            <div className="Nomination">
                <li className="NominationRow">
                    <span>{name} {year}</span>
                    <button classname="NominationRemoveButton" onClick={this.handleRemove}>Remove</button>
                </li>
            </div>
        )
    }
}
