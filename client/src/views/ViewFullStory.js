import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Card, Button, CardImg, CardLink, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import AdCorner from './Home/Home/adComponent';
import { connect } from 'react-redux';
import loading from '../images/loading.gif';


class ViewStory extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        console.log('mosima', this.props.match.params.filter)
        return (
            <Container>

                <Row>
                    <Col md={9}>

                    </Col>
                    <Col md={3}>

                    </Col>
                </Row>

                <hr />
                <Row>
                    <Col xs="9">
                        


                        {this.props.articles ? <Row>
                            {
                                this.props.articles.map((a, i) => {
                                    if (this.props.match.params.filter === a._id) {
                                        return (
                                            

                                                <Card>
                                                    <CardText><h2>{a.title}</h2></CardText>
                                                    <CardImg top src="https://cdn.cnn.com/cnnnext/dam/assets/180710080327-01-thai-cave-rescue-0710-overlay-tease.jpg" alt="Card image cap" /> 
                                                    <CardBody> {renderHTML(a.body)}
                                                    </CardBody>
                                                </Card>


                                             
                                        )
                                    }

                                })

                            }
                        </Row>
                            :
                            <img src={loading} alt="loading" style={{ height: 200, width: 'auto' }} />
                        }

                        <Row>
                            <Col md={12}>

                            </Col>
                        </Row>
                    </Col>
                    <Col xs="3">
                    <AdCorner/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles,
        categores: state.category
    }
}

export default connect(mapStateToProps)(ViewStory);








