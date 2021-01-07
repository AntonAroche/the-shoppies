import React, { Component } from 'react'
import './SearchBar.css'
import axios from "axios"

const omdbApiUrl = "http://www.omdbapi.com/?apikey=8b01dc14&";

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    state = {
        searchTerm: ''
    }

    async handleChange(evt) {
        await this.setState({
            searchTerm: evt.target.value
        })
        const response = await axios.get(`${omdbApiUrl}s=${this.state.searchTerm}&type=movie`)
        this.props.refreshMovies(response)
    }

    render() {
        return (
            <form className="SearchBar">
                <label htmlFor='searchTerm'>Movie title</label>
                <input
                    id="searchTerm"
                    name="searchTerm"
                    placeholder="Search"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}
