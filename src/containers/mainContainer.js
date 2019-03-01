import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Top from '../containers/top';
import Content from '../containers/content';
import changeBackgroundImage from "../helpers/changeBackgroundImage";
import { getMovieDetails } from "../api/tmdb";

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie_id: 950,
            movie_details: null,
        }

        this.handleMovieChange = this.handleMovieChange.bind(this);
    }

    handleMovieChange(id) {
        this.setState({movie_id: id});
    }

    async componentDidMount() {
        const json = await getMovieDetails(this.state.movie_id);
        this.setState({ movie_details: json });
    }

    async componentDidUpdate(prevProps, prevState) {
        if (this.state.movie_id === prevState.movie_id) {
            return null;
        }
        console.log("MBD");
        const json = await getMovieDetails(this.state.movie_id);
        this.setState({
            movie_details: json
        });
    }

    render() {
        const movie_details = this.state.movie_details;
        if (!movie_details) {
            return null;
        }

        changeBackgroundImage("https://image.tmdb.org/t/p/w780/" + movie_details.backdrop_path);

        const logoSrc='https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg';

        return (
            <Row className="justify-content-center py-4">
                <Col lg="10">
                    <Top logoSrc={logoSrc}
                         onMovieChange={this.handleMovieChange}/>
                    <Content
                        movieDetails={movie_details} />
                </Col>
            </Row>
        );
    }
}

export default MainContainer;