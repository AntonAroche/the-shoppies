import React, { Component } from 'react'
import './Movie.css'

export default class Movie extends Component {
    handleNomination = () => {
        this.props.nominateMovie(this.props.id)
    }

    handleRemove = () => {
        this.props.removeNomination(this.props.id)
    }

    render() {
        const { name, year, nominated, isNomination, imgSrc } = this.props

        return (
            <li className="Movie">
                <img
                    src={imgSrc}
                    alt={''}
                    className="MoviePoster"
                />
                <div className="MovieInfo">
                    <span>{name}</span>
                    <span>{year}</span>
                </div>
                {
                    isNomination ?
                        <button disabled={nominated} onClick={this.handleRemove}>Remove</button>
                        :
                        <button disabled={nominated} onClick={this.handleNomination}>Nominate</button>
                }
            </li>
        )
    }
}
