import React from 'react';
import {Link} from 'react-router-dom';
import ReactQuill from 'react-quill/dist/index';
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
                let respond = await fetch('/api/#', {
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
                                    <CardTitle>Add new slide </CardTitle>
                                </CardHeader>
                                <hr />
                                <CardBody>

                                <Form onSubmit={this.handleSubmit}>
                                
                                    <FormGroup row>
                                                <Label for="select" sm={2}>
                                                    {" "}
                                                    Select Category :{" "}
                                                </Label>
                                                <Col sm={12} md={3}>
                                                    <Input
                                                        type="select"
                                                        onChange={e => {
                                                            this.setState({ select: e.target.value });
                                                        }}
                                                        name="select"
                                                        id="select"
                                                    >
                                                    <option>-- select category --</option>
                                                        {this.props.category
                                                            ? this.props.category.map((data, index) => (
                                                                <option key={index} value={data._id}>
                                                                    {data.name}
                                                                </option>
                                                            ))
                                                            : null}
                                                    </Input>
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="Title" sm={2}>
                                                    Title :{" "}
                                                </Label>
                                                <Col sm={12} md={3}>
                                                    <Input
                                                        value={this.state.title}
                                                        type="text"
                                                        name="title"
                                                        onChange={e => {
                                                            this.setState({ title: e.target.value });
                                                        }}
                                                        placeholder="Summary of the slide  ..."
                                                        required
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                            <Label md={2}>
                                                Media picture
                                            </Label>
                                            <Col md={3}>
                                                <Input
                                                    type="file"
                                                    onChange={e => {
                                                        this.setState({ picture: e.target.files[0] })
                                                    }}
                                                />
                                                <Button basic round>Pick Media File for slide</Button>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label for="textarea" sm={2}>
                                                Article body :{" "}
                                            </Label>
                                            <Col sm={10}>
                                                <ReactQuill
                                                    theme="snow"
                                                    modules={Forms.modules}
                                                    formats={Forms.formats}
                                                    value={this.state.body}
                                                    placeholder="article body goes here .. "
                                                    onChange={this.onHandleChange}
                                                    required
                                                />
                                            </Col>
                                        </FormGroup>
                                        <br />
                                        <br />
                                    
                                        <FormGroup check row>
                                            <Col sm={{ size:10,offset:4 }}>
                                                <button style={styleButton.button} type="submit">Submit</button>
                                                <button style={clearButton.button} type="reset">Clear</button>
                                                <button style={backButton.button} onClick={() => {
                                                    this.props.history.push("/admin/slide");
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
//Defining modules for quill
Forms.modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
      ['code-block']
    ]
  };
  
  Forms.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block'
  ];
//export default Forms;
function matchDatesToProps(state)
{
  return{
    category: state.category
  }
}
export default connect(matchDatesToProps,actions)(Forms);