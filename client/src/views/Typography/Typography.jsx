import React from 'react';
import {Card, CardHeader, CardBody, Row, Col} from 'reactstrap';
import { PanelHeader } from 'components';

class Typography extends React.Component{
    render(){
        return (
            <div>
                <PanelHeader size="sm"/>
                <div className="content">
                    <Row>
                        <Col md={12}>
                            <Card>
                                <CardHeader>
                                    <h5 className="title">Users in our system</h5>
                                </CardHeader>
                                <CardBody>
                                    <h1>The body will be here</h1>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Typography;
