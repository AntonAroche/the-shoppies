import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Movie from './Movie'
import Nomination from './Nomination'
import './styles/TheShoppies.css'

export default class TheShoppies extends Component {
    state = {
        searchTerm: "",
        movies: [],
        nominations: []
    }

    refreshMovies = (response, searchTerm) => {
        console.log(response)
        const data = response.data

        this.setState({
            movies: data.Response !== "False" ? data.Search : [],
            searchTerm: searchTerm
        })
    }

    nominateMovie = id => {
        const nomination = this.state.movies.filter(movie => movie.imdbID === id)

        this.setState(state => ({
            nominations: [...state.nominations, ...nomination]
        }))
    }

    removeNomination = id => {
        this.setState(state => ({
            nominations: state.nominations.filter((nom) => nom.imdbID !== id)
        }))
    }

    render() {
        const movieList = this.state.movies.map(movie => {
            const nominated = this.state.nominations.some(nomination => nomination.imdbID === movie.imdbID)
            return (
                <Movie
                    key={movie.imdbID}
                    id={movie.imdbID}
                    name={movie.Title}
                    year={movie.Year}
                    nominated={nominated}
                    nominateMovie={this.nominateMovie}
                />
            )
        })

        const nominatedMovies = this.state.nominations.map(nomination => {
            return (
                <Nomination
                    key={nomination.imdbID}
                    id={nomination.imdbID}
                    name={nomination.Title}
                    year={nomination.Year}
                    removeNomination={this.removeNomination}
                />
            )
        })

        console.log('movies', this.state.movies)
        return (
            <div className="TheShoppies">
                <header className="App-header">
                    The Shoppies
                </header>
                <SearchBar refreshMovies={this.refreshMovies} />
                <div class="list-container">
                    <div className="border movie-list">
                        <h5 class="movie-list-title">
                            {this.state.movies.length === 0 ? "Results" : `Results for "${this.state.searchTerm}"`}
                        </h5>
                        <ul>{movieList}</ul>
                    </div>
                    <div className="border movie-list">
                        <h5 class="movie-list-title">Nominations</h5>
                        <ul>{nominatedMovies}</ul>
                    </div>
                </div>
            </div>
        )
    }
}
