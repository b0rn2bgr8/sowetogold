import React from 'react';
import {
    Card, CardHeader, CardBody, Row, Col
} from 'reactstrap';

import { PanelHeader, CardAuthor, CardSocials } from 'components';

import userBackground from 'assets/img/bg5.jpg';
import userAvatar from 'assets/img/mike.jpg';

class User extends React.Component{
    render(){
        return (
            <div>
                <PanelHeader size="sm"/>
                <div className="content">
                    <Row>
                        <Col md={8} xs={12}>
                            <Card>
                                <CardHeader>
                                    <h5 className="title">Users details that are on the system</h5>
                                </CardHeader>
                                <CardBody>
                                    <form>
                                            <h6>User details will be here</h6>
                                    </form>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md={4}  xs={12}>
                            <Card className="card-user">
                                <div className="image">
                                    <img src={userBackground} alt="..."/>
                                </div>
                                <CardBody>
                                    <CardAuthor
                                        avatar={userAvatar}
                                        avatarAlt="..."
                                        title="selected username "
                                        description="description"
                                    />
                                </CardBody>
                                <hr />
                                
                                <CardSocials
                                    size="lg"
                                    socials={[
                                        {
                                            icon: "fab fa-google-plus-g",
                                            href: "https://plus.google.com/discover"
                                        },
                                    ]}
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default User;
