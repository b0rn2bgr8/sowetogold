import React from 'react';
import ReactTable from "react-table";
//import {Link} from 'react-router-dom';
import 'react-table/react-table.css'
import {Row, Col,Card, CardHeader, CardBody} from 'reactstrap';
import { PanelHeader } from 'components';
import * as actions from '../../actions';
import {connect} from 'react-redux';
//Loading spinner
import MDSpinner from "react-md-spinner";
import moment from 'moment';
import FaBeer from 'react-icons/lib/fa/beer';
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

    onHandleDelete(id) {
      alert("the id got is " + id);
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
      }, {
        Header: 'Body',
        accessor: 'body',
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
        Cell: row => (
          <div>
            <button onClick={this.onHandleDelete.bind(this,row.original._id)}>Delete <FontAwesome.FaEdit /> </button>
            <button onClick={this.onHandleDelete.bind(this,row.original._id)}>Edit <FaBeer /></button>
          </div>
        )
       }]

       console.log(articles)
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