import React from "react";
import { Container } from "react-bootstrap";
import "./Home_Main.css";

function Home_Main(){
    return (
        <Container fluid>
            <Container id="card-container">
                <div className="wrapper">
                    <div className="img one text-center">Img goes here</div>
                    <div className="img two text-center">Img goes here</div>
                    <div className="img three text-center">Img goes here</div>
                </div>
            </Container>
        </Container>
    )
}

export default Home_Main;