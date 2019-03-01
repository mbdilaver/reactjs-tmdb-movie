import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Container } from 'react-bootstrap';
import MainContainer from "./containers/mainContainer";

const App = () => {

    return (
        <Container>
            <MainContainer />
        </Container>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);