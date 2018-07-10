
import React, { Component } from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';



class Sport extends React.Component {
  render() {
    return (
      <div className='Container'>
        <Row>
          <Col>
                <div>
                <Card inverse>
                        <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                        <CardImgOverlay>
                        <CardTitle>Soccer</CardTitle>
                        <Link to="Soccer">
                           See Soccer news
                        </Link>
                        </CardImgOverlay>
                </Card>
                </div>
                <div>
                <Card inverse>
                        <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                        <CardImgOverlay>
                        <CardTitle>Cricket</CardTitle>
                        <Link to="Cricket">
                           See Cricket news
                        </Link>
                        </CardImgOverlay>
                </Card>
                </div>
         </Col>

          <Col>
          <div>
                <Card inverse>
                        <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                        <CardImgOverlay>
                        <CardTitle>Netball</CardTitle>
                        <Link to="Netball">
                           See Netball news
                        </Link>
                        </CardImgOverlay>
                </Card>
                </div>
                <div>
                <Card inverse>
                        <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                        <CardImgOverlay>
                        <CardTitle>Rugby</CardTitle>
                        <Link to="Rugby">
                           See Rugby news
                        </Link>
                        </CardImgOverlay>
                </Card>
                </div>
          </Col>

          <Col>
          <div>
                <Card inverse>
                        <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                        <CardImgOverlay>
                        <CardTitle>Hockey</CardTitle>
                        <Link to="Hockey">
                           See Hockey news
                        </Link>
                        </CardImgOverlay>
                </Card>
                </div>
                <div>
                <Card inverse>
                        <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                        <CardImgOverlay>
                        <CardTitle>Other</CardTitle>
                        <Link to="Other">
                           See Other news
                        </Link>
                        </CardImgOverlay>
                </Card>
                </div>
          </Col>

          <Col>Ads</Col>
        </Row>
      </div>
    );
  }
}

   
             








//             <div className='Container'>
//             <Container>
//             <Row>
//                 <Col s="auto">
//                     <Row>
//                         <Col xs="9">
//                         <Card inverse className= "Card_SC">
//                                 <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
//                                 {/* <CardImg width="100%" src= "https://markbersoncarolinasoccercamp.com/images/camps/camps-3.jpg" alt="Card image cap" /> */}
//                                 <CardImgOverlay>
//                                 <CardTitle>Soccer News</CardTitle>
//                                 <Link to="Soccer">
//                                 See soccer news
//                                 </Link>
//                                 </CardImgOverlay>
//                         </Card>
//                         </Col>

//                         <Col xs="9">
//                         <Card inverse className= "Card_SC">
//                               <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />     
//                                 {/* <CardImg width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJA9bGvPOZsPUbXYp2UFUkdT8W-fqI37x7w7dxQpY5pJtKL-Aj7g" alt="Card image cap" /> */}
//                                 <CardImgOverlay>
//                                 <CardTitle>Cricket News</CardTitle>
//                                 <Link to="Cricket">
//                                 See cricket news
//                                 </Link>
//                                 </CardImgOverlay>
//                         </Card>
//                         </Col>

//                         <Col xs="9">
//                         <Card inverse className= "Card_SC">
//                                 <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
//                                 {/* <CardImg width="100%" src= "https://markbersoncarolinasoccercamp.com/images/camps/camps-3.jpg" alt="Card image cap" /> */}
//                                 <CardImgOverlay>
//                                 <CardTitle>Hockey News</CardTitle>
//                                 <Link to="Hockey">
//                                 See hockey news
//                                 </Link>
//                                 </CardImgOverlay>
//                         </Card>
//                         </Col>
//                         </Row>

//                         <Row>
//                         <Col xs="9">
//                         <Card inverse className= "Card_SC">
//                               <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />     
//                                 {/* <CardImg width="100%" src="https://d2cx26qpfwuhvu.cloudfront.net/premier/wp-content/uploads/2016/08/01181647/2PremRugbyBalls.jpg" alt="Card image cap" /> */}
//                                 <CardImgOverlay>
//                                 <CardTitle>Rugby News</CardTitle>
//                                 <Link to="Rugby">
//                                 See rugby news
//                                 </Link>
//                                 </CardImgOverlay>
//                         </Card>
//                         </Col>

//                         <Col xs="9">
//                         <Card inverse className= "Card_SC">
//                                 <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
//                                 {/* <CardImg width="100%" src= "https://markbersoncarolinasoccercamp.com/images/camps/camps-3.jpg" alt="Card image cap" /> */}
//                                 <CardImgOverlay>
//                                 <CardTitle>Soccer News</CardTitle>
//                                 <Link to="Soccer">
//                                 See soccer news
//                                 </Link>
//                                 </CardImgOverlay>
//                         </Card>
//                         </Col>

//                         <Col xxs="9">
//                         <Card inverse className= "Card_SC">
//                         <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"alt="Card image cap" />
//                                 {/* <CardImg width="100%" src="https://as1.ftcdn.net/jpg/01/57/38/90/500_F_157389057_ORgSeYg3N8PUxL8o10pWqee2yEbw137G.jpg" alt="Card image cap" /> */}
//                                 <CardImgOverlay>
//                                 <CardTitle>Other Sports</CardTitle>
//                                 <CardText>
//                                 <Link to="Other">
//                                 See Other sport news
//                                 </Link>
//                                 </CardText>
//                                 </CardImgOverlay>
//                          </Card>
//                         </Col>
//                     </Row>
//                </Col>
//             <Col xs="3">Advert space</Col>
//             </Row>
//             </Container>
//             </div>

//             )
//         }
// }

export default Sport;