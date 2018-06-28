import React from 'react';
import ReactTable from "react-table";
import {Card, CardHeader, CardBody, Row, Col,Form,FormGroup,Input,Label,Button} from 'reactstrap';
import { PanelHeader } from 'components';

class Category extends React.Component{
    render(){
        const data = [{
            name: '1',
            age: 26,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
          }]
          const columns = [{
            Header: '#',
            accessor: 'name', // String-based value accessors!
            maxWidth:50
          }, {
            Header: 'Category',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
          }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
          }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
          }]
        
        return (
            <div>
                <PanelHeader size="sm"/>
                <div className="content">
                    <Row>
                        <Col md={6} xs={12}>
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col xs="6"><h4>Add new category </h4></Col>
                                    </Row>
                                </CardHeader>
                                <hr />
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Label for="Category">Category</Label>
                                            <Input type="text" name="Category" id="Category" placeholder="Category ...." required/>
                                        </FormGroup>

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

                        <Col md={6}  xs={12}>
                             <Card>
                                <CardHeader>
                                    <Row>
                                        <Col xs="6"><h4>All categories...</h4></Col>
                                    </Row>
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

export default Category;
