import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, Table,} from 'reactstrap';
// react plugin used to create charts
import { Line } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers
import { PanelHeader, Stats, Tasks} from 'components';
import {dashboardPanelChart,} from 'variables/charts.jsx';

class Dashboard extends React.Component{
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
                        <Col xs={12} md={4}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle>Number of articles</CardTitle>
                                    <hr />
                                </CardHeader>
                                <CardBody>
                                    <h6>58 published</h6>
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
                        <Col xs={12} md={4}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle>Number of users online</CardTitle>
                                    <hr />
                                </CardHeader>
                                <CardBody>
                                        <h6>1 542 users online</h6>
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
                        <Col xs={12} md={4}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle>Adverts posted</CardTitle>
                                    <hr />
                                </CardHeader>
                                <CardBody>
                                        <h6>12 adverts posted</h6>
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
                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard;
