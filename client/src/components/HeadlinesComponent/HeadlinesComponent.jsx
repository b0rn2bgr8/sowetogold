import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class HeadlinesComponent extends React.Component {
  render() {
    return (
        <div className="Headlines">
      <ListGroup flush>
        <ListGroupItem disabled tag="a" href="#">Headlines</ListGroupItem>
        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
      </ListGroup>
      </div>
    );
  }
}

export default HeadlinesComponent;