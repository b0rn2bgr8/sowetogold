import React from 'react';
import {Link} from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import renderHTML from 'react-render-html';
import { Card, CardBody, CardHeader, CardTitle, Row, Col,Button,Form,FormGroup, Label,Input, FormText } from 'reactstrap';
import { PanelHeader } from '../../components';
import {connect} from 'react-redux';
import * as actions from '../../actions';

//Style for buttons 
const styleButton = {
    button: {
    borderColor: "#0ad14c",
    backgroundColor: "#ffffff",
    color: "#0ad14c",
    cursor: "pointer",
    borderWidth: ".9px",
    borderRadius: "30px",
    padding: "7px 25px",
    margin: "8px"
    },
}
//Style for clear button
const clearButton = {
    button: {
    borderColor: "#f96233",
    backgroundColor: "#ffffff",
    color: "#f96233",
    cursor: "pointer",
    borderWidth: ".9px",
    borderRadius: "30px",
    padding: "7px 25px",
    margin: "8px"
    },
}
//Style for go back button link
const backButton = {
    button: {
    borderColor: "black",
    backgroundColor: "#ffffff",
    color: "black",
    cursor: "pointer",
    borderWidth: ".9px",
    borderRadius: "30px",
    padding: "7px 25px",
    margin: "8px"
    },
}

class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            description: "",
        }
        //binding
        this.handleSubmit = this.handleSubmit.bind(this);
    }    
      //On handle login function
         handleSubmit(e) {
            e.preventDefault();
                let obj = {
                "name": this.state.name,
                "description": this.state.description,
                }
            fetch('/api/category', {
                method: 'POST',
                credentials:"include",
                    headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                    },
                body: JSON.stringify(obj)
                })
                .then((data)=> {
                    return data.json();
            }).then((body)=>{
                this.props.fetchCategory(body);
                this.props.history.goBack();
            });

        }
    render(){
        return (
            <div>
                <PanelHeader size="sm"/>
                <div className="content">
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Add new category</CardTitle>
                                </CardHeader>
                                <hr />
                                <CardBody>

                                    <Form onSubmit={this.handleSubmit}>
                                        <FormGroup row>
                                            <Label for="Title" sm={2}>Title : </Label>
                                                <Col sm={12} md={3} >
                                                    <Input type="text" onChange={(e)=>{this.setState({name: e.target.value})}} placeholder="Category" required />
                                                </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label for="Description" sm={2}>Description : </Label>
                                                <Col sm={12} md={10} padding={80}>
                                                    <Input type="textarea" onChange={(e)=>{this.setState({description: e.target.value})}} placeholder="Description goes here .." required />
                                                </Col>
                                        </FormGroup>
                                        
                                        <FormGroup check row>
                                            <Col sm={{ size:10,offset:4 }}>
                                                <button type="submit" style={styleButton.button} type="submit">Submit</button>
                                                <button style={clearButton.button} type="reset">Clear</button>
                                                <button style={backButton.button} onClick={() => {
                                                    this.props.history.push("/admin/manage_category");
                                                }}round simple > Go back </button>
                                            </Col>
                                        </FormGroup>
                                    </Form>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <br />
                
            </div>
        );
    }
}
//export default Forms;
function matchDatesToProps(state)
{
  return{
    category: state.category
  }
}
export default connect(matchDatesToProps,actions)(Forms);