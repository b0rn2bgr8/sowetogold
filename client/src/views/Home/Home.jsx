import React, { Component } from "react";
import { Container, Row, Col, Jumbotron,CardDeck,Card,CardTitle,CardImg,CardBody,CardText,Button,Media } from "reactstrap";

class Home extends Component{
    render(){
        return(
            <div>
                <Jumbotron>
                    <h1>Welcome to Soweto Observer</h1>
                </Jumbotron>
            </div>
        )
    }
}

export default Home;