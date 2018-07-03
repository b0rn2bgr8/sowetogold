import React from 'react';
import {Link} from 'react-router-dom';
import ReactQuill from 'react-quill/dist/index';
import 'react-quill/dist/quill.snow.css';
// import renderHTML from 'react-render-html';
import { Card, CardBody, CardHeader, CardTitle, Row, Col,Button,Form,FormGroup, Label,Input, FormText } from 'reactstrap';
import { PanelHeader } from 'components';

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
            title: "",
            body: "",
            picture: "",
            category:false,
        }
        //binding
        this.onHandleChange = this.onHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    //Handling the input data
        onHandleChange(e) {
            this.setState({ body: e });
            console.log(this.state.body);
        }
    //Fetching redux data
    componentDidMount(){
        this.props.fetchCategory();
        this.props.fetchArticles();
      }
    //Request to the database
            async handleSubmit() {
                let formData = new FormData();
            
                formData.append("title", this.state.title)
                formData.append("body", this.state.body)
                formData.append("category", this.state.select)
                formData.append("picture", this.state.picture)
            
            try {
                let respond = await fetch('http://localhost:8080/articles', {
                method: 'POST',
                body: formData
                });
                let res = await respond.json();
                console.log(res.response);
            
            } catch(err) {
                console.log(err)
        }
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
                                                <Input type="text" onChange={(e)=>{this.setState({title: e.target.value})}} placeholder="Category" required />
                                            </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="Title" sm={2}>Description : </Label>
                                            <Col sm={12} md={10} padding={80}>
                                                <Input type="textarea" onChange={(e)=>{this.setState({title: e.target.value})}} placeholder="Description goes here .." required />
                                            </Col>
                                    </FormGroup>
                                    
                                    <FormGroup check row>
                                        <Col sm={{ size:10,offset:4 }}>
                                            <button style={styleButton.button} type="submit">Submit</button>
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