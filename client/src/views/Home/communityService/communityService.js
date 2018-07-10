import React from 'react';
import { Row,Col,Card,CardBody,CardTitle,CardText, CardSubtitle, CardLink} from 'reactstrap';
import {CardImg,CardDeck} from 'reactstrap';
import { Link } from 'react-router-dom';

 class communityService extends React.Component {
  render() {
    return (
        <div className='Container'>
           <Row>
             <Col md="9">
              <br/>
                {/* <Media className='CM_Media'>
                  <Media left href="#">
                  <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                  </Media>
                  <Media body>
                    <Media heading>
                      Media heading
                    </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains
                  </Media>
                </Media> */}

              <CardDeck className='Cards'>
                  <Card>
                     <div className='CardsInfo'>
                        <CardTitle>Title</CardTitle>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                     </div>
                        <CardBody>
                          <h6>Date</h6>
                          <h6>Author</h6>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
                        </CardBody>
                    </Card>   
               
                    <Card>
                      <div className='CardsInfo'>
                          <CardTitle>Title</CardTitle>
                          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                      </div>
                         <CardBody>
                          <h6>Date</h6>
                          <h6>Author</h6>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
                        </CardBody>
                    </Card>   
                </CardDeck>
              </Col>
           <Col md="3">
            <div>
            <Card>
              <CardBody>
                <CardTitle>Advertisments</CardTitle>
                <CardSubtitle>Hey there!</CardSubtitle>
              </CardBody>
              <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <CardLink href="#">Button</CardLink>
              
              </CardBody>
            </Card>
          </div>
           </Col>
          </Row>
      </div>
    );
  }
}
export default communityService;          
