import React, { Component } from 'react';
import {
    Card, CardBody, CardImg, CardTitle, CardText, CardLink
} from 'reactstrap';
import {} from '../../../components';



class AdCorner extends Component {
    constructor(props) {
        super(props);

    }



    render() {


        return (
            <div>
                <h3 className="lead">Advertisement</h3>
                <Card>
                    <CardImg width="100%" style={{height: '100%'}} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    
                </Card>
            </div>
        );
    }
}


export default AdCorner;