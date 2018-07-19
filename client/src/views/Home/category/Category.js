import React from 'react';
import { Row, Col, Container, Jumbotron } from 'reactstrap';
import { ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import AdComp from '../Home/adComponent';

class Category extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">

                        <hr />
                        <Jumbotron>
                            <h3 className="lead">{(this.props.match.params.category).toUpperCase()}</h3>
                        </Jumbotron>
                        <Row>
                            <Col md={12}>
                                <ListGroup flush>
                                    <ListGroupItem className="lead" disabled tag="a" href="#">Headlines</ListGroupItem>
                                    <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                                    <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                                    <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                                </ListGroup>
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








