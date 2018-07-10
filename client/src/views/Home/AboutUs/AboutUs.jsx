import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import { Link} from 'react-router-dom';


 class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <h2>About Soweto Observer</h2>
               <h4>Our Community News Paper</h4>
                <br/>
              <p> Big dreams and the determination to make them come true - these are the trademark qualities of Elon Musk. Creator of PayPal, sustainable energy champion, alternative automotive innovator and space technology explorer. A man who challenges to change the mindset of many industries and whose visions are literally out of this world! As a boy in his native South Africa, he was the typical 'nerd'. Preferring to read anything he could get his hands on, including encyclopedias, he was picked on quite a bit at school.He even admitted in an interview that he was afraid of the dark, but overcame this fear by rationalizing that dark is only the absence of light and said "It was silly to be afraid of lack of photons". However his brilliance shined during computer classes, where he knew more than the teacher! He showed signs of early entrepreneurship by designing a computer game and with his brother tried to start a local computer arcade. </p>          
            </Col>
          </Row>
      </Container>
      </div>
    );
  }
}
export default AboutUs;