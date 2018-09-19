import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg,CardText, CardBody } from 'reactstrap';
import renderHTML from 'react-render-html';
import AdCorner from './Home/Home/adComponent';
import {_fetchArticle,} from "../actions/article"
import { connect } from 'react-redux';
import loading from '../images/Loading_icon.gif';
import Moment from 'react-moment';
//import * as FontAwesome from 'react-icons/lib/fa'
class ViewStory extends React.Component {
    componentDidMount() {
        this.props._fetchArticle(this.props.match.params.filter);
    }
    render() {
        const { articles } = this.props;
        return (
            <Container>
                <Row>
                    <Col md={9}>
                        </Col>
                        <Col md={3}>
                    </Col>
                </Row>

                <hr />
                <Row>
                    <Col xs="9">
                        {articles ? <Row>
                            {
                                this.props.articles.map((a, i) => {
                                    let articleId = this.props.match.params.filter;
                                    if (articleId === a._id) {
                                        return (
                                                <Card>
                                                    <CardText><h2>{a.title}</h2></CardText>
                                                        <div class="container">
                                                                <Row>
                                                                    <Col></Col>
                                                                    <Col></Col>
                                                                    <Col></Col>
                                                                    <Col><i class="fa fa-clock"></i> <Moment  format="DD MMM YYYY HH:mm a">{a.createdAt}</Moment></Col>
                                                                </Row>
                                                                
                                                            </div>
                                                        <CardImg top src={a.picture} alt="Card image cap" /> 
                                                    <CardBody> {renderHTML(a.body)}</CardBody>
                                                </Card>    
                                        )
                                    }
                                })
                            }
                        </Row>
                            :
                            <img src={loading} alt="loading" style={{ paddingLeft: '35%', height: 200, width: 'auto' }} />
                        }
                        <Row>
                            <Col md={12}></Col>
                        </Row>
                    </Col>
                        <Col xs="3">
                            <AdCorner/>
                        </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return { 
        articles: state.articles.allarticles,
        //article: state.articles.article,
        categores: state.category
    }
}

export default connect(mapStateToProps, { _fetchArticle })(ViewStory);








