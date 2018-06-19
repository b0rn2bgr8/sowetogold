import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";

class Home extends Component{
    render(){
        return(
            <div>
                <Jumbotron>
                    <h1>Welcome to Soweto Observer</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;