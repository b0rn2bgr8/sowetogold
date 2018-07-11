import React, { Component } from 'react';
import {
    Card, CardBody, CardImg, CardTitle, CardText, CardLink
} from 'reactstrap';
import {} from '../../../components';
import { Link } from 'react-router-dom';



class AdCorner extends Component {
    constructor(props) {
        super(props);

    }



    render() {


        return (
            <div>
                <h3 className="lead">Advertisement</h3>
                <a href="https://www.edgars.co.za/?gclid=CjwKCAjw1ZbaBRBUEiwA4VQCISaIXV08gYFpZR7wpON4H7SQnoO-TzZjHrKntdLIPp9UAh7ytD50XxoCwcIQAvD_BwE">
                <Card>
                    <CardImg width="100%" style={{height: 200}} src="https://www.edgars.co.za/media/wysiwyg/CategoryBanner_NoCTA_5.jpg" alt="Card image cap" />
                    
                </Card>
                </a>
            </div>
        );
    }
}


export default AdCorner;