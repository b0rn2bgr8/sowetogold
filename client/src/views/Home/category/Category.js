import React from 'react';
import { Row, Col, Container, Jumbotron } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import AdComp from '../Home/adComponent';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import SmallCard from '../../../components/SmallCard/SmallCard';

class Category extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <div className="Jumbotron">
                            <Jumbotron>
                                <h3 className="lead">{(this.props.match.params.category).toUpperCase()}</h3>
                            </Jumbotron>
                        </div>
                        <Row>
                            <Col md={12}>

                                <div>
                                    <Card className="CategoryImage">
                                        <img width="100%" height="300" src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" alt="Card image cap" />
                                    </Card>
                                    <SmallCard />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="3">
                        <AdComp />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Category;








