import React, { Component } from "react";
import { Col, InputGroup, FormControl } from "react-bootstrap";
import { searchMovies } from "../api/tmdb";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { AsyncTypeahead } from "react-bootstrap-typeahead";

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allowNew: false,
            isLoading: false,
            multiple: false,
            options: [],
            top6: null
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    async handleSearch(query) {
        this.setState({isLoading: true});

        const results = await searchMovies(query);

        const top6 = results.results.slice(0, 6);

        this.setState({
            isLoading: false,
            options: top6,
        });
        console.log("MBD2")
    }

    handleSelect(selected) {
        console.log(selected);
        if (selected.length > 0) {
            this.props.onMovieChange(selected[0]["id"]);
        }
    }

    render() {
        return (
            <Col lg="7">
                <AsyncTypeahead
                    {...this.state}
                    minLength={3}
                    onSearch={this.handleSearch}
                    onChange={this.handleSelect}
                    placeholder="Search a movie..."
                    labelKey={"original_title"}
                />
            </Col>
        );
    }
}

export default SearchBar;