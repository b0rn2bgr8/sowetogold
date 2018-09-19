import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from 'reactstrap';
import HeadlineComponent from '../../components/HeadlinesComponent/HeadlinesComponent'


const SmallCard = (props) => {
  return (
    <CardDeck>
      <HeadlineComponent />
      <Card width="10px" height="10px">
        <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
      </Card>
    </CardDeck>
  );
};

export default SmallCard;