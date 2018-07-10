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
        this.closeModal = this.closeModal.bind(this);
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
    
    closeModal(){
      this.setState({
        isOpen : !this.state.isOpen
      });
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
              return <div>
                <img height={34} src={this.props.articles.picture} style={{height: 40, width: 'auto' }} alt={"not suppoted"}/>
                </div>
            },
            //id: "picture"
       },{
         Header: 'Category',
         filterable:false,
         Cell: row =>{
           //console.log("reow", row)
            return (<div>{(()=>{
              let cnames = row.original.category.map((c)=>{
                return c.name;
              })
              return cnames.toString()
            })()}</div>)
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
       console.log(articles)
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
                          data={articles}
                          resolveData={data => data.map(row => {
                              row.createdAt = moment(row.createdAt).format('MMM Do YYYY, h:mm a');
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
                    <Modal isOpen={this.state.isOpen} toggle={()=>{this.setState({ isOpen: !this.state.isOpen})}} size="lg">
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
                                <button style={styleButton.button} >Save Changes</button>
                                <button onClick={this.closeModal} style={clearButton.button} >Cancel</button>
                          </ModalFooter>
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