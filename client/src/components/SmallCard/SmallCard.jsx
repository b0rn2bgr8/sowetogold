import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const SmallCard = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg width="100%" height="200" src="https://wallpaperbrowse.com/media/images/cat-1285634_960_720.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Title</CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardImg width="100%" height="200" src="https://wallpaperbrowse.com/media/images/beautiful-sunset-images-196063.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Title</CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardImg width="100%" height="200" src="https://wallpaperbrowse.com/media/images/fall-autumn-red-season_WV7Vb7u.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Title</CardTitle>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default SmallCard;