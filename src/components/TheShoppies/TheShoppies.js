import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Movie from '../Movie/Movie'
import './TheShoppies.css'
import { Modal, Button } from 'react-bootstrap'
import MovieList from '../MovieList/MovieList'

export default class TheShoppies extends Component {
    state = {
        searchTerm: "",
        movies: [],
        nominations: JSON.parse(localStorage.getItem("nominations")) || [],
        showModal: false
    }

    refreshMovies = (response, searchTerm) => {
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
        }), () => {
            localStorage.setItem("nominations", JSON.stringify(this.state.nominations))
            this.checkOpenModal()
        })
    }

    removeNomination = id => {
        this.setState(state => ({
            nominations: state.nominations.filter((nom) => nom.imdbID !== id)
        }), () => {
            localStorage.setItem("nominations", JSON.stringify(this.state.nominations))
        })
    }

    checkOpenModal = () => {
        if (this.state.nominations.length === 5) {
            this.setState({
                showModal: true
            })
        }
    }

    handleSubmitModal = () => {
        this.setState(state => ({
            showModal: false,
            nominations: []
        }))
    }

    handleCloseModal = () => {
        this.setState(state => ({
            showModal: false
        }))
    }

    render() {
        const movieList = this.state.movies.map(movie => {
            const nominated = this.state.nominations.some(nomination => nomination.imdbID === movie.imdbID)
            const nominationsFull = this.state.nominations.length === 5
            return (
                <Movie
                    key={movie.imdbID}
                    id={movie.imdbID}
                    name={movie.Title}
                    year={movie.Year}
                    imgSrc={movie.Poster}
                    nominated={nominated || nominationsFull}
                    isNomination={false}
                    nominateMovie={this.nominateMovie}
                />
            )
        })

        const nominatedMovies = this.state.nominations.map(nomination => {
            return (
                <Movie
                    key={nomination.imdbID}
                    id={nomination.imdbID}
                    name={nomination.Title}
                    year={nomination.Year}
                    imgSrc={nomination.Poster}
                    isNomination={true}
                    removeNomination={this.removeNomination}
                />
            )
        })

        return (
            <div className="TheShoppies">
                <header className="TheShoppiesHeader">
                    The Shoppies
                </header>
                <SearchBar refreshMovies={this.refreshMovies} />
                <div className="MovieListContainer">
                    <MovieList
                        header={this.state.movies.length === 0 ? "Results" : `Results for "${this.state.searchTerm}"`}
                        movies={movieList}
                    />
                    <MovieList
                        header="Nominations"
                        movies={nominatedMovies}
                    />
                </div>

                <Modal show={this.state.showModal} onHide={this.handleCloseModal} animation={false}>
                    <Modal.Header>
                        <Modal.Title>You're ready to submit this year's 5 nominations!</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleSubmitModal}>
                            Submit to the academy
                        </Button>
                        <Button variant="secondary" onClick={this.handleCloseModal}>
                            I want to change my nominations
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        )
    }
}
