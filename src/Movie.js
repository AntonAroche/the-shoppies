import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        const { name, year } = this.props

        return (
            <div className="Movie">
                {name}
                {year}
            </div>
        )
    }
}
