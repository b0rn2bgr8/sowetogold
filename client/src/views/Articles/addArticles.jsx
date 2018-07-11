import React from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill/dist/index";
import "react-quill/dist/quill.snow.css";
// import renderHTML from 'react-render-html';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from "reactstrap";
import { PanelHeader, Button } from "../../components";

import { connect } from "react-redux";
import * as actions from "../../actions";
//IMporting all icons from fontAwesome
import * as FontAwesome from "react-icons/lib/fa";
// import axios from 'react-axios';
// import axios from 'axios';

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
    }
};
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
    }
};
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
    }
};

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            //picture: "",
            category: false
        };
        //binding
        this.onHandleChange = this.onHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        selectedFile: null
    };
    //Handling the input data
    onHandleChange(e) {
        this.setState({ body: e });
        console.log(this.state.body);
    }
    //Fetching redux data
    componentDidMount() {
        this.props.fetchCategory();
        this.props.fetchArticles();
    }
    //Request to the database
    async handleSubmit(e) {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("category", this.state.select);
        formdata.append("title", this.state.title);
        formdata.append("body", this.state.body);
        formdata.append("picture", this.state.picture);

        try {
            let response = await fetch("/api/articles", {
                method: "POST",
                credentials: "include",
                body: formdata
            });
            let result = await response.json();
            console.log(result);
            this.props.history.goBack();
        } catch (error) {
            console.log(error);
        }


    }

    render() {
        return (
            <div>
                <PanelHeader size="sm" />
                <div className="content">
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Add new article</CardTitle>
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
                                                    placeholder="Summary of the article ..."
                                                    required
                                                />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label md={2}>
                                                Media
                                            </Label>
                                            <Col md={3}>
                                                <Input
                                                    type="file"
                                                    onChange={e => {
                                                        this.setState({ picture: e.target.files[0] })
                                                    }}
                                                />
                                                <Button basic round>Pick Media File</Button>
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
                                        {/*<FormGroup row>
                                        <Label for="File" sm={2}> </Label>
                                            <Col sm={4} >
                                                <input type="file" onChange={this.fileSelectedHandler} name="file" id="File" />
                                                 <Input type="file" onChange={(e)=>{this.setState({picture: e.target.files[0]})}} name="file" id="File" /> 
                                                <Col md={10} width={80}>
                                                    <FormText color="muted">
                                                            <FontAwesome.FaFile/> Upload article picture.....
                                                             <button onClick={this.fileUploadHandler}>Upload</button>     
                                                    </FormText>
                                                </Col>
                                            </Col>
                                    </FormGroup>*/}

                                        <FormGroup check row>
                                            <Col sm={{ size: 10, offset: 4 }}>
                                                <button style={styleButton.button} type="submit">
                                                    Submit
                        </button>
                                                <button style={clearButton.button} type="reset">
                                                    Clear
                        </button>
                                                <button
                                                    style={backButton.button}
                                                    onClick={() => {
                                                        this.props.history.push("/admin/articles");
                                                    }}
                                                    round
                                                    simple
                                                >
                                                    {" "}
                                                    Go back{" "}
                                                </button>
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
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"]
    ]
};

Forms.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "code-block"
];
//export default Forms;
function matchDatesToProps(state) {
    return {
        category: state.category
    };
}
export default connect(
    matchDatesToProps,
    actions
)(Forms);
