import React from 'react';
import { Row,Col,Card,CardBody,CardTitle,CardText} from 'reactstrap';


 class Business extends React.Component {
  render() {
    return (
        <div className='Container'>
           <Row>
             <Col md="9">
                <Card className='CM_Card'>
                  <CardBody>
                    <CardTitle>Title</CardTitle>
                  </CardBody>
                  <div className='CM_image'>
                 <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                 </div>
                  <CardBody>
                    <h6>Date</h6>
                    <h6>Author</h6>
                    <CardText>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu</CardText>
                  </CardBody>
                </Card>
                </Col>
           <Col md="3">Ads</Col>
          </Row>
      </div>
    );
  }
}
export default Business;