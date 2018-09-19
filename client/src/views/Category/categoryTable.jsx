import React from 'react';
import ReactTable from "react-table";
//import {Link} from 'react-router-dom';
import 'react-table/react-table.css'
import {Row, Col,Card, CardHeader, CardBody, Button} from 'reactstrap';
import { PanelHeader } from '../../components';
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

class Category extends React.Component{
      constructor(){
        super();
        this.state={
          data: [],
          name: false,
          description: false,
          isOpen:false,
        }
    }
    //Components
    componentDidMount(){
      this.props.fetchCategory();
    }
     //Handling the action buttons 
     onHandleEdit(id) {
      this.setState({ isOpen: true })
    }
    onHandleDelete(id) {
      alert("Delete record number " + id );
    }

    render(){
      const { category } = this.props;
      const columns = [{
          Header: '#',
          id: "row",
          maxWidth:50,
          filterable:false,
          Cell:(row) => {
            return <div>{row.index+1}</div>
          }
      },{
        Header: "Name",
        accessor: "name",
        maxWidth: 200,
      },{
        Header: "Description",
        accessor: "description",
      },{
        Header: 'Date posted',
        accessor: "createdAt",
        maxWidth: 300,
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
        //  console.log(articles)
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
                       {category ? 
                        <ReactTable
                        defaultPageSize={5}
                        className="-striped -highlight"
                        data={category}
                            resolveData={data => data.map(row => {
                            //row.createdAt = Date(row.createdAt);
                            //moment().format('llll');
                            row.createdAt = moment(row.createdAt).format('MMM Do YYYY, h:mm a');
                            /*row.category.forEach(el => {
                              console.log(el)
                             });*/
                              return row;
                            })}
                        columns = { columns }
                        /> :
                         <div style={style}>
                            <MDSpinner size = "50" />
                          </div>
                       }
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
    category: state.category
  }
}
export default connect(matchDatesToProps,actions)(Category);