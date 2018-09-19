import React from 'react';
import { Row, Col, Container, Jumbotron } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import AdComp from '../Home/adComponent';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import SmallCard from '../../../components/SmallCard/SmallCard';
import HeadlineComponent from '../../../components/HeadlinesComponent/HeadlinesComponent';

class Category extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <div className="Jumbotron">
                            <Jumbotron style={{ textAlign:'center', height:'60px', marginTop:"70px", paddingTop:"40px" }} >
                                <h3 className="lead">{(this.props.match.params.category).toUpperCase()}</h3>
                            </Jumbotron>
                        </div>
                        
                        
                        <Row>
                            <Col md={12}>    
                            <SmallCard/>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{paddingTop:100}} md="3">
                        <AdComp />
                        <div class="fb-page" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs">Soweto Observer</a></blockquote></div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Category;




