import React, { Component } from "react";
import { Card, CardTitle, CardImg, CardImgOverlay, Container, Row, Col, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../assets/scss/now-ui-dashboard.css';
import '../../../assets/css/demo.css';




class classified extends Component {
    render() {
        return (
          <div className='Container'>
              <Row>
                <Col s="auto">
                    <Row>
                      <Col xs="6">
                        <Card inverse className="Card_SC">
                        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                          {/* <CardImg width="100%" src="https://workplacepsychology.files.wordpress.com/2011/10/jobs.jpg" alt="Card image cap"              class="cardHover" /> */}
                             <div class="middle">
                               </div>
                                <CardImgOverlay>
                                 <CardTitle>Jobs</CardTitle>
                                  <Link to="Job">
                                   View Jobs
                                 </Link>
                               </CardImgOverlay>
                          </Card>
                         </Col>

                        <Col xs="6">
                         <Card inverse className= "Card_SC">
                         <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                          {/* <CardImg width="100%" src="https://www.google.co.za/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjSncHS_4DcAhUNyKQKHfDgB1AQjRx6BAgBEAU&url=http%3A%2F%2Ftransformsa.co.za%2F2014%2F09%2Fmore-sa-women-buying-property-4%2F&psig=AOvVaw0kKYwEh97oCbKpbW4DMN2M&ust=1530640843948086"alt="Card image cap" /> */}
                             <CardImgOverlay>
                               <CardTitle>Properties</CardTitle>
                                <Link to="Property">
                                 View Properties
                                </Link>
                             </CardImgOverlay>
                          </Card>
                        </Col>
                     </Row>

                      <Row>
                        <Col xs="6">
                           <Card inverse className= "Card_SC">
                           <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                           {/* <CardImg width="100%" src="https://workplacepsychology.files.wordpress.com/2011/10/jobs.jpg" alt="Card image cap" /> */}
                              <CardImgOverlay>
                                <CardTitle>Businesses</CardTitle>
                                <Link to="Business">
                                View Business
                                </Link>
                             </CardImgOverlay>
                          </Card>
                        </Col>

                        <Col xs="6">
                           <Card inverse className= "Card_SC">
                           <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                           {/* <CardImg width="100%" src="https://workplacepsychology.files.wordpress.com/2011/10/jobs.jpg" alt="Card image cap" /> */}
                              <CardImgOverlay>
                                <CardTitle>Other</CardTitle>
                                <Link to="Other">
                                View Other
                                </Link>
                             </CardImgOverlay>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  <Col xs="3">Advert space</Col>
                </Row>
              </div>
            )
        }
}

export default classified;


