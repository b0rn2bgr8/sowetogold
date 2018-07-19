import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Card, Button, CardImg, CardLink, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import AdCorner from './Home/Home/adComponent';
import { connect } from 'react-redux';
import loading from '../images/Loading_icon.gif';
import Moment from 'react-moment';
import * as FontAwesome from 'react-icons/lib/fa'


class ViewStory extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        //console.log('mosima', this.props.match.params.filter)
        return (
            <Container style={{paddingTop: 100}}>
                <Row>
                    <Col xs={12} md={9} sm={12}>
                        {this.props.articles ? <Row>
                            {
                                this.props.articles.map((a, i) => {
                                    if (this.props.match.params.filter === a._id) {
                                        return (
                                                <Card>
                                                    <CardImg top src={a.picture} alt="Card image cap" /> 
                                                    <CardText><h2>{a.title}</h2></CardText>
                                                    <div class="container">
                                                            <Row>
                                                                <Col><span className="float-right"><i class="fa fa-clock"></i><Moment  format="DD MMM YYYY HH:mm a">{a.createdAt}</Moment></span></Col>
                                                             </Row>
                                                            
                                                        </div>
                                                    <CardBody> {renderHTML(a.body)}
                                                    </CardBody>

                                                </Card>


                                             
                                        )
                                    }

                                })

                            }
                        </Row>
                            :
                            <img src={loading} alt="loading" style={{ paddingLeft: '35%', height: 200, width: 'auto' }} />
                        }

                        <Row>
                            <Col md={12}>

                            </Col>
                        </Row>
                    </Col>
                    <Col xs="3">
                    <AdCorner/>
                    <div class="fb-page" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs">Soweto Observer</a></blockquote></div>
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








