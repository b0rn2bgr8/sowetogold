import React from 'react';
import ReactTable from "react-table";
//import {Link} from 'react-router-dom';
import 'react-table/react-table.css'
import {Row, Col,Card, CardHeader, CardBody, Button} from 'reactstrap';
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
  paddingLeft: "50%"
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
    onHandleDelete(id) {
      alert("the id got is" + id);
    }

    render(){
      const data = [
        {
        Number: '1',
        Name: 'Sports',
        Summary:'Contains all the news that are related to news',
        Date: 'Jun 14th 2018', 
      }]

      const columns = [{
        Header: '#',
        accessor: 'Number', // String-based value accessors!
        maxWidth:50,
      }, {
        Header: 'Name',
        accessor: 'Name',
        maxWidth: 100,
      },{
        Header: 'Summary description',
        accessor:'Summary',
      },{
        Header: 'Date Posted',
        accessor: 'Date',
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

        return (
          <div>
            <PanelHeader size="sm" />
            <div className="content">
              <Row>
                <Col xs={12}>
                  <Card>
                    <CardHeader>
                      <Row>
                          <Col xs="6"><h4>Categories online  </h4></Col>
                       </Row>
                            <button style={styleButton.button} onClick={() => {
                            this.props.history.push("/admin/manage_category/addcategory");
                            }} round simple>Add</button>
                      </CardHeader>
                      <hr />

                    <CardBody>
                          <ReactTable
                              className="-striped -highlight"
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
function matchDatesToProps(state)
{
  return{
    articles: state.articles
  }
}
export default connect(matchDatesToProps,actions)(Articles);