import React from "react";
import { Row, Col } from "react-bootstrap";

const Info = (props) => {

    return (
        <Col lg="7" className="pt-3">
            <h1>{props.title}</h1>
            <h4>{props.tagline}</h4>
            <Row className="mb-4">
                <Col>
                    <p>{props.overview}</p>
                </Col>
            </Row>
            <Row>
                <Col xs="6">
                    <h5>Vote:</h5>
                    <h3>{props.vote_average}</h3>
                    <h5>Release:</h5>
                    <h3>{props.release_date.slice(0,4)}</h3>

                </Col>
                <Col xs="6">
                    <h5>Duration:</h5>
                    <h3>{props.runtime} mins</h3>
                    <h5>Revenue:</h5>
                    <h3>${props.revenue.toLocaleString()}</h3>
                </Col>
            </Row>
        </Col>
    );
};

export default Info;