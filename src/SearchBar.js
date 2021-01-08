import React, { Component } from 'react'
import './styles/SearchBar.css'
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
        this.props.refreshMovies(response, this.state.searchTerm)
    }

    render() {
        return (
            <div className="form-group has-search container w-50 SearchBar">
                <label htmlFor='searchTerm'>Movie title</label>
                <span className="fa fa-search form-control-feedback"></span>
                <input
                    type="text"
                    className="form-control"
                    id="searchTerm"
                    name="searchTerm"
                    placeholder="Search"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
