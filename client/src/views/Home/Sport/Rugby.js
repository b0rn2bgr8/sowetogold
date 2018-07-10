import React from 'react';
import { Container, Row, Col, CardImg } from 'reactstrap';
import { Media } from 'reactstrap';

 class Rugby extends React.Component {
  render() {
    return (
      <div className='Container'>
        <Row>
          <Col xs="9">
          <Media className='Media_card'>
            <Media heading left href="#">
               <CardImg className='CardImg' top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              </Media>
              <Media body className='Media_body'>
               <Media heading>
               Title
               </Media>
                <i>Date</i>
                 <br/>
                <i>Author</i>
                 <br/>
                 <br/>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Media>
             </Media>
          </Col>
          <Col xs="3">Ads</Col>
        </Row>
      </div>
    );
  }
}

export default Rugby;