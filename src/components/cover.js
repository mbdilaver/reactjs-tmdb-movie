import React from "react";
import { Col, Image } from "react-bootstrap";

const Cover = ({src}) => {

    return (
        <Col lg="5" className="pl-0">
            <Image src={src} fluid />
        </Col>
    );
};

export default Cover;