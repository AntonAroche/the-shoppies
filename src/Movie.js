import React, { Component } from 'react'

export default class Movie extends Component {
    handleNomination = () => {
        this.props.nominateMovie(this.props.id)
    }

    render() {
        const { name, year, nominated } = this.props

        return (
            <div className="Movie">
                <li>
                    {name}{" "}
                    {year}
                    <button disabled={nominated} onClick={this.handleNomination}>Nominate</button>
                </li>
            </div>
        )
    }
}
