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

    onHandleDelete(id) {
      alert("the id got is" + id);
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
         //accessor: '',
       },{
         Header: 'Category',
         row: "row",
         filterable:false,
         Cell:(row) =>{
           return <div>{row._id}</div>
         }
         /*<td>{(article.category.length > 0) ? article.category[0].name : 'N/A'}</td>*/
         //articles.Category.name
       },{
         Header: "Status",
         //accessor:"",
       },
       {
        Header: 'Date posted',
        accessor: "createdAt",
       },
      //  {
      //    Header:'Date updated',
      //    accesor:"updatedAt",
      //  },
       {
        Header: 'Action',
        Cell: row => (
          <div>
            <div onClick={this.onHandleDelete.bind(this,  row.original._id)}>Delete</div>
            <div onClick={this.onHandleDelete.bind(this,  row.original._id)}>Edit</div>
            </div>
        )
       }]
      console.log("Categories",this.props.articles.category);
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