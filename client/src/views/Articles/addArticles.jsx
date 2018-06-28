import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardBody, CardHeader, CardTitle, Row, Col,Button,Form,FormGroup, Label,Input, FormText } from 'reactstrap';
import { PanelHeader } from 'components';

// import ReactQuill from 'react-quill'; // ES6
// import 'react-quill/dist/quill.snow.css'; // ES6

class Forms extends React.Component{
    render(){
        return (
            <div>
                <PanelHeader size="sm"/>
                <div className="content">
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Add new article</CardTitle>
                                </CardHeader>
                                <hr />
                                <CardBody>
                                <Form>

                                    <FormGroup row>
                                    <Label for="select" sm={2}>Select Category : </Label>
                                    <Col sm={10}>
                                        <Input type="select" onChange={(e)=>{this.setState({select: e.target.value})}} name="select" id="select" >
                                            {
                                                this.props.category ? (
                                                    this.props.category.map((data,index)=>(
                                                        <option key={index} value={data._id}>{data.name}</option>
                                                    ))
                                                ): null }
                                        </Input>
                                    </Col>
                                    </FormGroup>
                                   
                                    <FormGroup row>
                                        <Label for="Title" sm={2}>Title : </Label>
                                            <Col sm={10}>
                                                <Input type="text" onChange={(e)=>{this.setState({title: e.target.value})}} placeholder="Summary of the article ..." required />
                                            </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="textarea" sm={2}>Text Area : </Label>
                                            <Col sm={10}>
                                                <Input type="textarea" onChange={(e)=>{this.setState({body: e.target.value})}} name="textarea" id="textarea" required />
                                            </Col>
                                    </FormGroup>
                                    
                                    <FormGroup row>
                                        <Label for="File" sm={2}>File : </Label>
                                            <Col sm={10}>
                                                <Input type="file" onChange={(e)=>{this.setState({picture: e.target.files[0]})}} name="file" id="File" required />
                                                    <FormText color="muted">
                                                            Upload article picture.....
                                                            
                                                    </FormText>
                                            </Col>
                                    </FormGroup>
                                    
                                    <FormGroup check row>
                                        <Col sm={{ size:10,offset:4 }}>
                                            <Button type="submit" color="success">Submit</Button>
                                            <Button type="reset" color="danger">Clear</Button>
                                            <Link to="/admin/articles"><Button>Go back</Button></Link>
                                        </Col>
                                    </FormGroup>
                                </Form>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default Forms;