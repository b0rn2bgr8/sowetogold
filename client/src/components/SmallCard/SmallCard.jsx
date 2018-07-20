import React from 'react';
import { Card, CardImg, CardTitle, CardDeck, CardBody } from 'reactstrap';
import HeadlinesComponent from '../../components/HeadlinesComponent/HeadlinesComponent';

const SmallCard = (props) => {
  return (
    <CardDeck>
      <HeadlinesComponent/>
      
    </CardDeck>
  );
};

export default SmallCard;