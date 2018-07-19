import React from 'react';
import { Container, Row, Col, CardImg } from 'reactstrap';
import AdCorner from '../Home/adComponent';
import { Media } from 'reactstrap';
import ReactPlayer from 'react-player';




class video extends React.Component {
  render() {
    return (
      <Container style={{paddingTop: 100}}>
        <Row>
          <Col md="9">
           <Media className='Media_card'>
            <Media heading left href="#"> 
              <div>
                   <ReactPlayer
          url='https://www.youtube.com/watch?v=rnwlWn603g4'
          className='react-player'
          width='100%'
          height='100%'
        />
 

        </div>
              </Media>
              <Media body className='Media_body'>
               <Media heading>
               Title
               </Media>
                <i>Author</i>
                 <br/>
                <i>Date</i>
                 <br/>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .
              </Media>
             </Media>
            </Col>
          <Col md="3">
          <AdCorner/>
         <div class="fb-page" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs">Soweto Observer</a></blockquote></div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default video;
