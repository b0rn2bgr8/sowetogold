import React from 'react';
import {Card, CardTitle, CardBody, CardHeader, Row, Col,Form,FormGroup,Input,Label,FormText} from 'reactstrap';
// react plugin for creating notifications over the dashboard
import NotificationAlert from 'react-notification-alert';
import ReactTable from "react-table";
import { PanelHeader, Button } from 'components';

class advertisements extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }
    render(){
        const data = [{
            id: '1',
            title: 'Old Mutual',
            picture: '.jpg',
            body: 'This is the body of  the ad',
            date_posted: '28 June 2018',
            action: ' '
          }]
          const columns = [{
            Header: '#',
            accessor: 'id', // String-based value accessors!
            maxWidth:50
          }, {
            Header: 'Title',
            accessor: 'title'
          }, {
            Header: 'Picture',
            accessor: 'picture',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
          }, {
            Header: 'Body',
            accessor: 'body',
          },{
              Header: 'Date posted',
              accessor: 'date_posted'
          }, {
            Header: 'Action',
            accessor: 'action'
          }]

        return (
            <div>             
            <PanelHeader size="sm" />
                <div className="content">
                    <NotificationAlert ref="notificationAlert"/>
                    <Row>
                        <Col md={6} xs={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Add a new advertisement</CardTitle>
                                </CardHeader>
                                <hr />

                                <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="title">Advert Summary : </Label>
                                            <Input type="text" name="text" id="text" placeholder="Advertisement summary ..." required />
                                    </FormGroup>
                                    <br/>

                                    <FormGroup>
                                        <Label for="body">Advert body</Label>
                                            <Input type="textarea" name="textarea" id="textarea" required/>
                                    </FormGroup>
                                    <br/>

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
                                    <CardTitle>All advertisment</CardTitle>
                                </CardHeader>
                                <hr />

                                <CardBody>
                                <ReactTable
                                       defaultPageSize={5}
                                        data={data}
                                        columns={columns}
                                    /> 
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