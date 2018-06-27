import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import {Row, Col,Card, CardHeader, CardBody,Button, Modal, ModalBody, ModalHeader, ModalFooter,Form,FormGroup,Label,Input} from 'reactstrap';
import { PanelHeader } from 'components';

import * as actions from '../../actions';
import {connect} from 'react-redux';

class Articles extends React.Component{
      constructor(){
        super();
        this.state={
          data: [],
          article: false,
          category:false,
          author:false,
          isOpe:false,
          isloading: false
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
      const {data, isloading} = this.state;
      const { articles } = this.props;

      const columns = [{
        Header: '#',
        accessor: '#' // String-based value accessors!
      }, {
        Header: 'Title',
        accessor: 'title',
      }, {
        Header: 'Body',
        accessor: 'body',
      }, ]
     
      
      console.log(this.props);
      console.log("testing for data")
      
    // this.log("my articles",this.props.article);
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
                       <Col xs="6"><Button color="primary" onClick={()=> this.onSubmit()}>Add new article</Button></Col>
                      </CardHeader>
                    <hr />

                    <CardBody>
                      {articles ? 
                        <ReactTable
                        data={articles}
                        columns={columns}
                      /> :
                      "is Loading...."
                      }
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>

            {/* Modal starts here */}
            <Modal isOpen={this.state.isOpen} toggle={()=>{this.setState({ isOpen: !this.state.isOpen})}}>
                <Form>
                <ModalHeader> Adding article information </ModalHeader>
                <ModalBody>
                    <FormGroup>
                      <Label for="article">Article</Label>
                      <Input type="text" onChange={(e)=>{this.setState({title: e.target.value})}} name="article" id="article" />
                    </FormGroup>

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
                        <Label for="text">Text Area</Label>
                        <Input type="textarea" onChange={(e)=>{this.setState({body: e.target.value})}} name="textarea" id="textarea" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="File">File</Label>
                            <Input type="file" onChange={(e)=>{this.setState({picture: e.target.value})}} sm={2} name="file" id="File" />
                    </FormGroup>

                </ModalBody>

                <ModalFooter>
                      <Button type="submit" color="success">Post</Button>
                      <Button type="close" color="secondary">Cancel</Button>
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
