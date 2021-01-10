import './MovieList.css'

import React from 'react'

export default function MovieList(props) {
    const { movies, header } = props
    return (
        <div className="MovieList">
            <h5 className="MovieListHeader">
                {header}
            </h5>
            <ul className="list-group">
                {movies}
            </ul>
        </div>
    )
}
