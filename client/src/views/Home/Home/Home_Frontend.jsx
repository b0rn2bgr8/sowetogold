import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Card, Button, CardImg, CardLink, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import TopHead from './carouselComponent';
import AdCorner from './adComponent';
import { connect } from 'react-redux';
import loading from '../../../images/loading.gif';


class Home extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Container>

        <Row>
          <Col md={9}>
            <TopHead />
          </Col>
          <Col md={3}>
            <AdCorner />
          </Col>
        </Row>

        <hr />
        <Row>
          <Col xs="9">
            <h3 className="lead">Top Stories</h3>

            
              {this.props.articles ? <Row>
                {
                  this.props.articles.map((a, i) => {
                    return (
                      <Col md={4} key={i}>
                        <Card>
                          <CardImg top src="https://cdn.cnn.com/cnnnext/dam/assets/180710080327-01-thai-cave-rescue-0710-overlay-tease.jpg" alt="Card image cap" />
                          <CardText>{a.title}</CardText>
                        </Card>
                      </Col>
                    )
                  })
                }
                </Row>
              :
              <img src={loading} alt="loading" style={{height: 200, width: 'auto'}} />
              }
            
            <Row>
              <Col md={12}>
                <ListGroup flush>
                  <ListGroupItem className="lead" disabled tag="a" href="#">Headlines</ListGroupItem>
                  {this.props.articles ? <div>
                    {
                  this.props.articles.map((a, i) => {
                    return (
                      <ListGroupItem key={i}>{a.title}</ListGroupItem>
                    )
                  })
                }
                  </div>
                  :
                  
              <img src={loading} alt="loading" style={{height: 200, width: 200}}/>
                  }
                </ListGroup>
              </Col>
            </Row>
          </Col>
          <Col xs="3">

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

export default connect(mapStateToProps)(Home);








