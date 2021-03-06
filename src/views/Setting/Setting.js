import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardFooter, Col, Row, FormGroup, Table,} from 'reactstrap';
import Switch from "../Switch/Switch";

class Setting extends Component {
  constructor(props) {
    super(props);
    this.form = {
      }
      this.state = {
      };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="animated fadeIn">
      <link rel="stylesheet" type="text/css" href="css/Table.css"></link>
      <link rel="stylesheet" type="text/css" href="css/Setting.css"></link>
        <Row className="mb-5">
          <Col md="12" xs="12" sm="12">
            <form>
              <FormGroup>
                <Card className="card-setting">
                  <CardHeader>
                      환경설정
                  </CardHeader>
                  <CardBody>
                    <Table>
                        <tr>
                            <th>메뉴 설정</th>
                        </tr>
                        <tr>
                            <td>
                                <Table className="ShowTable">
                                    <tr>
                                        <td style={{width : "80%", borderRight: 'none'}}>주문 관리</td>
                                        <td style={{width : "20%", borderLeft: 'none'}}><Switch/></td>
                                    </tr>
                                    <tr>
                                        <td style={{borderRight: 'none'}}>고객 관리</td>
                                        <td style={{borderLeft: 'none'}}><Switch/></td>
                                    </tr>
                                    <tr>
                                        <td style={{borderRight: 'none'}}>제품 관리</td>
                                        <td style={{borderLeft: 'none'}}><Switch/></td>
                                    </tr>
                                    <tr>
                                        <td style={{borderRight: 'none'}}>제조 관리</td>
                                        <td style={{borderLeft: 'none'}}><Switch/></td>
                                    </tr>
                                    <tr>
                                        <td style={{borderRight: 'none'}}>영농 일지</td>
                                        <td style={{borderLeft: 'none'}}><Switch/></td>
                                    </tr>
                                    <tr>
                                        <td style={{borderRight: 'none'}}>체험 관광</td>
                                        <td style={{borderLeft: 'none'}}><Switch/></td>
                                    </tr>
                                </Table>
                            </td>
                        </tr>
                    </Table>
                  </CardBody>
                  <CardFooter>
                    <Button block outline color="primary">설정 저장</Button>
                  </CardFooter>
                </Card>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </div>
    )

  }
}

export default Setting;