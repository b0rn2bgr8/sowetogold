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
                                                    <CardImg top src={a.picture} alt="Card image cap" /> 
                                                    <CardText><h2>{a.title}</h2></CardText>
                                                    <div class="container">
                                                            <Row>
                                                                <Col><span className="float-right"><i class="fa fa-clock"></i><Moment  format="DD MMM YYYY HH:mm a">{a.createdAt}</Moment></span></Col>
                                                             </Row>
                                                            
                                                        </div>
                                                    <CardBody> {renderHTML(a.body)}
                                                    </CardBody>

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
                    <div class="fb-page" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs">Soweto Observer</a></blockquote></div>
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








