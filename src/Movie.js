import React, { Component } from 'react'
import './styles/Movie.css'

export default class Movie extends Component {
    handleNomination = () => {
        this.props.nominateMovie(this.props.id)
    }

    render() {
        const { name, year, nominated } = this.props

        return (
            <div className="Movie">
                <li className="MovieRow">
                    {name}{" "}
                    {year}
                    <button disabled={nominated} onClick={this.handleNomination}>Nominate</button>
                </li>
            </div>
        )
    }
}
