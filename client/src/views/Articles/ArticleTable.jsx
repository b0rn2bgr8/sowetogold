import React from 'react';
import ReactTable from "react-table";
//import {Link} from 'react-router-dom';
import 'react-table/react-table.css'
import {Row, Col,Card, CardHeader, CardBody,Modal,Form,ModalHeader,ModalBody,Label,Input,FormGroup,ModalFooter} from 'reactstrap';
import { PanelHeader } from 'components';
import * as actions from '../../actions';
import {connect} from 'react-redux';
//Loading spinner
import MDSpinner from "react-md-spinner";
import moment from 'moment';
//IMporting all icons from fontAwesome
import * as FontAwesome from 'react-icons/lib/fa'

//Style for loader
const style = {
  paddingLeft: "50%",
}
//Style for buttons 
const styleButton = {
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
//style for icons
const styleIcons = {
  button: {
  borderColor: "rgba(0,0,0,0.03)",
  backgroundColor: "rgba(0,0,0,0.03)",
  color: "#0d0e0f",
  cursor: "pointer",
  borderWidth: ".1px",
  borderRadius: "50px",
  margin: "2px",
  position: "center",
  decoration:"none",
  },
}

class Articles extends React.Component{
      constructor(){
        super();
        this.state={
          data: [],
          article: false,
          category:false,
          author:false,
          isOpen:false,
          //data: makeData()
        }
    }
    //Components
    componentDidMount(){
      // this.props.fetchCategory();
      this.props.fetchArticles();
    }

    //Handling the action buttons 
    onHandleEdit(id) {
      // alert("Edit record " + id);
      this.setState({ isOpen: true })
    }
    onHandleDelete(id){
      alert("Delete record number " + id );
    }

    render(){
      const { articles } = this.props;
      const columns = [{
        Header: "#",
        id: "row",
        maxWidth:50,
        filterable:false,
        Cell:(row) => {
          return <div>{row.index+1}</div>
        }
      }, {
        Header: 'Title',
        accessor: 'title',
      },{
         Header: 'Picture',
            Cell: (row) => {
              return <div><img height={34} src={row.original.ImgPath} alt={"not suppoted"}/></div>
            },
            id: "picture"
       },{
         Header: 'Category',
         row: "row",
         filterable:false,
         Cell:(row) =>{
           return <div>{row._id}</div>
         }
       },{
         Header: "Status",
         accessor:"status",
       },
       {
        Header: 'Date posted',
        accessor: "createdAt",
       },{
        Header: 'Action',
        maxWidth:70,
        Cell: row => (
          <div>
            <button style={styleIcons.button} onClick={this.onHandleDelete.bind(this,row.original._id)}><FontAwesome.FaTrash /></button>
            <button style={styleIcons.button} onClick={this.onHandleEdit.bind(this,row.original._id)}><FontAwesome.FaEdit /></button>
          </div>
        )
       }]

       //console.log(this.props.articles)
      //console.log("Categories",this.props.articles.category);
        return (
          <div>
            <PanelHeader size="sm" />
            <div className="content">
              <Row>
                <Col xs={12}>
                  <Card>
                    <CardHeader>
                      <Row>
                          <Col xs="6"><h4>Articles posted </h4></Col>
                       </Row>
                            <button style={styleButton.button} onClick={() => {
                            this.props.history.push("/admin/articles/addarticle");
                            }} round simple>Add</button>
                      </CardHeader>
                    <hr />

                    <CardBody>
                      {articles ? 
                        <ReactTable
                          defaultPageSize={5}
                          className="-striped -highlight"
                          //loadingText= 'Loading...'
                          data={articles}
                          resolveData={data => data.map(row => {
                            //row.createdAt = Date(row.createdAt);
                            //moment().format('llll');
                            row.createdAt = moment(row.createdAt).format('MMM Do YYYY, h:mm a');
                            row.category.forEach(el => {
                              console.log(el)
                            });

                              return row;
                            })}
                            columns={columns}
                            /> :
                        <div style={style}>
                            <MDSpinner size="50" />
                        </div>
                      }
                    </CardBody>
                  </Card>
                </Col>
              </Row>
  
            </div> 
            {/* Modal starts here */}
            <Modal isOpen={this.state.isOpen} toggle={()=>{this.setState({ isOpen: !this.state.isOpen})}}>
        <Form>
                <ModalHeader> Editing article information </ModalHeader>

                <ModalBody>

                <FormGroup>
                        <Label for="select">Select Category</Label>
                        <Input type="select" onChange={(e)=>{this.setState({select: e.target.value})}} name="select" id="select">
                            {this.props.category ? (
                                this.props.category.map((data,index)=>(
                                  <option key={index} value={data._id}>{data.name}</option>
                                ))
                            ): null}
                        </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="article">Article</Label>
                      <Input type="text" onChange={(e)=>{this.setState({title: e.target.value})}} name="article" id="article" />
                    </FormGroup> 
                    
                    <FormGroup>
                        <Label for="text">Text Area</Label>
                        <Input type="textarea" onChange={(e)=>{this.setState({body: e.target.value})}} name="textarea" id="textarea" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="File">File</Label>
                            <Input type="file" onChange={(e)=>{this.setState({picture: e.target.value})}} sm={2} name="file" id="File" />
                    </FormGroup>

                </ModalBody>

                <ModalFooter>
                      <button style={styleButton.button} type="submit" outline color="success">Save</button>
                      <button onClick={this.toggle} style={clearButton.button} type="close" class="btn btn-secondary">Cancel</button>
                </ModalFooter>

        </Form>
     </Modal> 
        </div>
        );
    }
}

function matchDatesToProps(state)
{
  return{
    articles: state.articles
  }
}
export default connect(matchDatesToProps,actions)(Articles);