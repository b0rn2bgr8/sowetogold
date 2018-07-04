import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import {Row, Col,Card, CardHeader, CardBody} from 'reactstrap';
import { PanelHeader } from 'components';
import * as actions from '../../actions';
import {connect} from 'react-redux';
//Loading spinner
import MDSpinner from "react-md-spinner";
import moment from 'moment';

//Style for loader
const style = {
  paddingLeft: "50%"
}
//style for buttons 

const styleButton = {
       button: {
       borderColor: "#f96233",
       backgroundColor: "#ffffff",
       color: "#f96233",
       cursor: "pointer",
       borderWidth: ".9px",
       borderRadius: "30px",
       padding: "7px 25px"
       },
}

class Advertisements extends React.Component{
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

    onHandleDelete(id) {
      alert("the id got is" + id);
    }

    render(){
        const data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
          }]
         
          const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
          }, {
            Header: 'Age',
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
            <PanelHeader size="sm" />
            <div className="content">
              <Row>
                <Col xs={12}>
                  <Card>
                    <CardHeader>
                        <Row>
                            <Col xs="6"><h4>Ads online</h4></Col>
                        </Row>
                                <button style={styleButton.button} onClick={() => {
                                this.props.history.push("/admin/manage_advertisements/addadvertisements");
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
export default connect(matchDatesToProps,actions)(Advertisements);