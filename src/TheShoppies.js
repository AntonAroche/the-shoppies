import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Movie from './Movie'

export default class TheShoppies extends Component {
    state = {
        movies: []
    }

    refreshMovies = response => {
        const data = response.data

        if (data.Response !== "False") {
            this.setState({
                movies: data.Search
            })
        }
    }

    render() {
        const movieList = this.state.movies.map(movie => {
            return (
                <Movie
                    key={movie.imdbID}
                    name={movie.Title}
                    year={movie.Year}
                />
            )
        })
        return (
            <div className="TheShoppies">
                <header className="App-header">
                    The Shoppies
                </header>
                <SearchBar refreshMovies={this.refreshMovies} />
                <ul>{movieList}</ul>
            </div>
        )
    }
}
