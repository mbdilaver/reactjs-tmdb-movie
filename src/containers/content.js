import React from "react";
import { Row } from "react-bootstrap";

import Cover from '../components/cover';
import Info from '../components/info';

const Content = ({movieDetails}) => {
    const coverSrc = "https://image.tmdb.org/t/p/w500/" + movieDetails.poster_path;

    const {
        title,
        tagline,
        overview,
        release_date,
        runtime,
        revenue,
        vote_average
    } = movieDetails;

    return (
        <Row className="content">
            <Cover src={coverSrc}/>
            <Info
                title={title}
                tagline={tagline}
                overview={overview}
                release_date={release_date}
                runtime={runtime}
                revenue={revenue}
                vote_average={vote_average} />
        </Row>
    );
};

export default Content;