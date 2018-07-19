import React from 'react';
import { Card, CardImg, CardTitle, CardDeck, CardBody } from 'reactstrap';
import HeadlinesComponent from '../../components/HeadlinesComponent/HeadlinesComponent';

const SmallCard = (props) => {
  return (
    <CardDeck>
      <HeadlinesComponent/>
      <Card>
        <CardImg  src="https://wallpaperbrowse.com/media/images/beautiful-sunset-images-196063.jpg" alt="Card image cap" />
      </Card>
      <Card>
        <CardImg  src="https://wallpaperbrowse.com/media/images/fall-autumn-red-season_WV7Vb7u.jpg" alt="Card image cap" />
      </Card>
    </CardDeck>
  );
};

export default SmallCard;