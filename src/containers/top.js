import React from "react";
import { Row } from "react-bootstrap";
import Logo from "../components/logo";
import SearchBar from "../components/search-bar";

const Top = ({logoSrc, onMovieChange}) => {
    return (
        <Row className="top align-items-center pt-3 pb-4">
            <Logo src={logoSrc}/>
            <SearchBar onMovieChange={onMovieChange}/>
        </Row>
    );
};

export default Top;