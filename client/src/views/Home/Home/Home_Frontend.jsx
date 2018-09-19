import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Card, Button, CardImg, CardLink, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import TopHead from './carouselComponent';
import AdCorner from './adComponent';
import { connect } from 'react-redux';
import loading from '../../../images/Loading_icon.gif';
//import renderHTML from 'react-render-html';
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
      <Container style={{paddingTop: 100}}>

        <Row>
          <Col md={9} sm={12} xs={12}>
            <TopHead />
          </Col>

          
          <Col md={3} sm={12} xs={12}>
            <AdCorner />
          </Col>
        </Row>



        <hr />
        <Row>
          <Col md={9} sm={12} xs={12}>
            <h3 className="lead">Top Stories</h3>


            {this.props.articles ?
              <div className="news-h-scroll">
                {
                  this.props.articles.map((a, i) => {
                    return (
                      <Link to={"/viewstory/"+ a._id}>
                      <div style={{ height: 250, width: 250, margin: 5 }}>
                        <img style={{ height: 200, minWidth: 250}}  src={a.picture || "https://cdn.cnn.com/cnnnext/dam/assets/180710080327-01-thai-cave-rescue-0710-overlay-tease.jpg"} alt="Card image cap"  />
                        <p>{a.title}</p>
                      </div>
                      </Link>
                    )
                  })
                }
              </div>
              :
              <img src={loading} alt="loading" style={{ paddingLeft: '35%', height: 200, width: 'auto' }} />
            }
            <hr />
            <Row>
              <Col md={12}>
              <h3 className="lead">Headlines</h3>
                <ListGroup flush className="headlines" style={{height: 400, overflowY: 'scroll'}}>
                  
                  {this.props.articles ? <div>
                    {
                      this.props.articles.map((a, i) => {
                        return (
                          <Link to={"/viewstory/"+ a._id}>                 
                              <ListGroupItem key={i}>{a.title}</ListGroupItem>
                          </Link>
                        )
                      })
                    }
                  </div>
                    :

                    <img src={loading} alt="loading" style={{paddingLeft: '35%', height: 200, width: 200 }} />
                  }
                </ListGroup>
              </Col>
            </Row>
            
          </Col>
          <Col md={3} sm={12} xs={12}>
          <div class="fb-page" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs">Soweto Observer</a></blockquote></div>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.allarticles,
    categores: state.category
  }
}

export default connect(mapStateToProps)(Home);








