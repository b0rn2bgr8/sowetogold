import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col} from 'reactstrap';
// react plugin used to create charts
import { Line } from 'react-chartjs-2';
import {_fetchArticle, _fetchArticles} from "../../actions/article";
import { connect } from 'react-redux';
// function that returns a color based on an interval of numbers
import { PanelHeader, Stats} from '../../components';
import {dashboardPanelChart,} from '../../variables/charts.jsx';
// import { fetchArticle } from '../../actions';

class Statistics extends React.Component{
    constructor(prop) {
        super();
        this.state = {
            draft: 0,
            publish: 0
        }
    }

    componentDidMount() {
        this.props._fetchArticles();
        const {articles} = this.props;
        console.log(articles)
        // this.props.articles.map()
        // this.props.articles.map((a, i) => {
        //     if(a.status === "draft") {
        //         this.setState({ draft: this.state.draft + 1 })
        //     } else {
        //         this.setState({ publish: this.state.publish + 1 })
        //     }
        // });
    }

    render(){
        return (
            <div>
                <PanelHeader
                    size="lg"
                    content={
                        <Line data={dashboardPanelChart.data} options={dashboardPanelChart.options}/>
                    }
                />
                <div className="content">
                    <Row>
                        <Col xs={12} md={3}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle>Articles online</CardTitle>
                                    <hr />
                                </CardHeader>

                                <CardBody>
                                    <h6>5 published</h6><br />

                                    <h6>{this.state.draft} drafts</h6>
                                </CardBody>

                                <CardFooter>
                                    <Stats>
                                        {[
                                            { i: "now-ui-icons arrows-1_refresh-69", t: "Just Updated"}
                                        ]}
                                    </Stats>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col xs={12} md={3}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle>Videos online</CardTitle>
                                    <hr />
                                </CardHeader>
                                <CardBody>
                                        <h6>1 542 online</h6><br />
                                        <h6>8 drafts</h6>
                                </CardBody>
                                <CardFooter>
                                    <Stats>
                                        {[
                                            { i: "now-ui-icons arrows-1_refresh-69", t: "Just Updated"}
                                        ]}
                                    </Stats>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col xs={12} md={3}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle>Adverts online</CardTitle>
                                    <hr />
                                </CardHeader>
                                <CardBody>
                                        <h6>12 online</h6><br />
                                        <h6>4 drafts</h6>
                                </CardBody>
                                <CardFooter>
                                    <Stats>
                                        {[
                                            { i: "now-ui-icons ui-2_time-alarm", t: "Last 7 days"}
                                        ]}
                                    </Stats>
                                </CardFooter>
                            </Card>
                        </Col>

                        <Col xs={12} md={3}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle>Online users</CardTitle>
                                    <hr />
                                </CardHeader>
                                <CardBody>
                                        <h6>1 542 </h6><br/>
                                        <h6>online</h6>
                                </CardBody>
                                <CardFooter>
                                    <Stats>
                                        {[
                                            { i: "now-ui-icons arrows-1_refresh-69", t: "Just Updated"}
                                        ]}
                                    </Stats>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

//const mapStateToProps = state =>  {
function mapStateToProps(state)
{
    return {
        articles: state.articles.allarticles,
        article: state.article.article,
    }
}

//export default connect(mapStateToProps, { _fetchArticle })(ViewStory);
export default connect(mapStateToProps, {_fetchArticles, _fetchArticle})(Statistics);
