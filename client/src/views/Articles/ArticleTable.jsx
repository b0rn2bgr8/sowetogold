import React from 'react';
import ReactTable from "react-table";
import {Link} from 'react-router-dom';
import 'react-table/react-table.css'
import {Row, Col,Card, CardHeader, CardBody, Button} from 'reactstrap';
import { PanelHeader } from 'components';
import * as actions from '../../actions';
//import But from '../../components/CustomButton/CustomButton';

import {connect} from 'react-redux';
//Loading spinner
import MDSpinner from "react-md-spinner";
import moment from 'moment';

const style = {
  paddingLeft: "50%"
}
const styleButton = {
       buton: {
        borderColor: "#f96233",
       backgroundColor: "#ffffff",
       color: "#f96233",
       cursor: "pointer",
       borderWidth: ".9px",
       borderRadius: "30px",
       padding: "7px 25px"
       },
    // borderColor: f96233,
    // background-color: #ffffff;
    // color: #f96233;
    // cursor: pointer;
    // padding: 7px 25px;
    // border-width: .9px;
    // border-radius: 30px;
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
    //on submit button
    onSubmit(){
      console.log('Testing the add button')
      this.setState({ isOpen: true })
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
        //accessor: '',
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
                          {/* <Col xs="6">
                              <Link to="/admin/articles/addarticle" >
                                    Add article
                              </Link>
                          </Col> */}
                              <Link to="/admin/articles/addarticle">
                                  <button style={styleButton.buton} round simple>Add</button>
                              </Link>
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