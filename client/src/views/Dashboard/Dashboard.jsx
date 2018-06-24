import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, Table,} from 'reactstrap';
// react plugin used to create charts
import { Line } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers
import { PanelHeader, Stats, Tasks} from 'components';
import {dashboardPanelChart,} from 'variables/charts.jsx';
import { tasks } from 'variables/general.jsx';

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

                    <Row>
                      <Col xs={12} md={6}>
                        <Card className="card-tasks">
                          <CardHeader>
                            <CardTitle>Tasks</CardTitle>
                            <p className="category">Backend Development</p>
                          </CardHeader>
                          <CardBody>
                            <Tasks tasks={tasks}/>
                          </CardBody>
                          <CardFooter>
                            <hr />
                            <Stats>
                                {[
                                    { i: "now-ui-icons loader_refresh spin", t: "Updated 3 minutes ago"}
                                ]}
                            </Stats>
                          </CardFooter>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card>
                          <CardHeader>
                            <CardTitle>Employees Stats</CardTitle>
                            <p className="category">All Persons List</p>
                          </CardHeader>
                          <CardBody>
                            <Table responsive>
                              <thead className=" text-primary">
                                <tr>
                                  <th>Name</th>
                                <th>Country</th>
                                <th>City</th>
                                <th className="text-right">Salary</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Dakota Rice</td>
                                  <td>Niger</td>
                                  <td>Oud-Turnhout</td>
                                  <td className="text-right">$36,738</td>
                                </tr>
                                <tr>
                                  <td>Minerva Hooper</td>
                                  <td>Curaçao</td>
                                  <td>Sinaai-Waas</td>
                                  <td className="text-right">$23,789</td>
                                </tr>
                                <tr>
                                  <td>Sage Rodriguez</td>
                                  <td>Netherlands</td>
                                  <td>Baileux</td>
                                  <td className="text-right">$56,142</td>
                                </tr>
                                <tr>
                                  <td>Doris Greene</td>
                                  <td>Malawi</td>
                                  <td>Feldkirchen in Kärnten</td>
                                  <td className="text-right">$63,542</td>
                                </tr>
                                <tr>
                                  <td>Mason Porter</td>
                                  <td>Chile</td>
                                  <td>Gloucester</td>
                                  <td className="text-right">$78,615</td>
                                </tr>
                              </tbody>
                            </Table>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard;
