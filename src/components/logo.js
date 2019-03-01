import React from "react";
import { Col, Row, Image } from "react-bootstrap";

const Logo = ({src}) => {

    return (
        <Col lg="5">
            <Row>
                <Col lg="6">
                    <a href="https://www.themoviedb.org/documentation/api">
                        <Image src={src} />
                    </a>
                </Col>
            </Row>
        </Col>
    );
};

export default Logo;