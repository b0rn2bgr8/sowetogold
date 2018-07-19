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
            <div className = "adCard">
                <h3 className="lead">Advertisement</h3>
                <a href="https://www.identity.co.za/" target="blank">
                    <Card>
                        <CardImg width="100%" style={{height: '100%'}} src="https://scontent-lga3-1.cdninstagram.com/vp/3a05826440a4adc35ca4a235d45233cb/5BD2CF0C/t51.2885-15/e35/32396003_2116017712012209_6957621980413558784_n.jpg?ig_cache_key=MTc5MDcwNDQzMjQ1MjY1MDI4Mg%3D%3D.2" alt="Card image cap" />
                    </Card>
                </a>
            </div>
        );
    }
}


export default AdCorner;