import React from 'react';
import {Card, CardTitle, CardBody, CardHeader, Row, Col,Form,FormGroup,Input,Label,FormText} from 'reactstrap';
// react plugin for creating notifications over the dashboard
import NotificationAlert from 'react-notification-alert';
import { PanelHeader, Button } from 'components';

class advertisements extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }
    render(){
        return (
            <div>             
            <PanelHeader size="sm" />
                <div className="content">
                    <NotificationAlert ref="notificationAlert"/>
                    <Row>
                        <Col md={6} xs={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Insert new advertisement</CardTitle>
                                </CardHeader>
                                <hr />

                                <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="title">Advert Summary : </Label>
                                            <Input type="text" name="text" id="text" placeholder="Advertisement summary ..." required />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="body">Advert body</Label>
                                            <Input type="textarea" name="textarea" id="textarea" required/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="File">File</Label>
                                            <Input type="file" name="file" id="File" required />
                                                <FormText color="muted">
                                                    Upload picture file ...
                                                </FormText>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col sm={{ size:10,offset:4 }}>
                                            <Button type="submit" color="success">Submit</Button>
                                            <Button type="reset" color="danger">Clear</Button>
                                        </Col>
                                    </FormGroup>

                                </Form>
                            </CardBody>
                            </Card>
                        </Col>
                        <Col md={6} xs={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>advertisement on our system</CardTitle>
                                </CardHeader>
                                <hr />

                                <CardBody>
                                    <h3>advertisement table will be here</h3>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default advertisements;