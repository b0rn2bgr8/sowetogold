import React from 'react';
import {Card, CardHeader, CardTitle, CardBody, Row, Col, Form, FormGroup, Input, Label, FormText} from 'reactstrap';
import ReactTable from "react-table";
import NotificationAlert from 'react-notification-alert';
import { PanelHeader, Button } from 'components';

class Videos extends React.Component{
    render(){
        const data = [{
            id: '1',
            title: 'Messi scored',
            video: '.mp4',
            body: 'This is the body of  the video',
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
            Header: 'Video',
            accessor: 'video',
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
                                    <CardTitle>Add a video</CardTitle>
                                </CardHeader>
                                <hr />

                                <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="title">Video title: </Label>
                                            <Input type="text" name="text" id="text" placeholder="Advertisement summary ..." required />
                                    </FormGroup>
                                    <br/>

                                    <FormGroup>
                                        <Label for="File">Video</Label>
                                            <Input type="file" name="file" id="File" required />
                                                <FormText color="muted">
                                                    Upload video file ...
                                                </FormText>
                                    </FormGroup>
                                    <br/>

                                    <FormGroup>
                                            <Label for="Description">Description</Label>
                                            <Input type="textarea" name="Description" id="Description" required/>
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
                                    <CardTitle>All videos</CardTitle>
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

export default Videos;
