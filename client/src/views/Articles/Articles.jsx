import React from 'react';
import {Row, Col,Card, CardHeader, CardBody} from 'reactstrap';
import { PanelHeader } from 'components';

class Articles extends React.Component{
    render(){
        return (
          <div>
            <PanelHeader size="sm" />
            <div className="content">
              <Row>
                <Col xs={12}>
                  <Card>
                    <CardHeader>Article posted </CardHeader>
                    <CardBody>
                      <h5>Articles will be here</h5>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        );
    }
}
export default Articles;
