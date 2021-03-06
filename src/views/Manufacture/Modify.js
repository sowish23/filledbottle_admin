import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardFooter, Col, Row, Table, Input } from 'reactstrap';
import Popup from "reactjs-popup";
import ProductModal from '../Modal/ProductModal';

//vos = value of supply (공급가액)
//vat = value added tax (부가세))
let d = {id: '', name: '', grade:'', weight:'', price: 0, quantity: 0};

class Modify extends Component {
  constructor(props) {
    super(props);

    this.customer = [];

    this.state = {
      sProduct1: [d],//소모 상품
      sProduct2: [d],//생산 상품
    };
  }

  componentWillMount() {
    this.getList();
  }

  getList() {
    fetch(process.env.REACT_APP_HOST+"/api/manufacture/"+this.props.match.params.id, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then(response => {
        if (response.status === 401) {
          return Promise.all([401])
        } else {
          return Promise.all([response.status, response.json()]);
        }
      })
      .then(data => {
        let status = data[0];
        if (status === 200)
          this.setState({ sProduct1: data[1].consume, sProduct2: data[1].produce, });
        else {
          alert('로그인 하고 접근해주세요');
          this.props.history.push('/login');
        }
      })
  }

  /*produceProduct() {
    const {sProduct1, sProduct2} = this.state;
    console.warn(sProduct1, sProduct2)
    fetch(process.env.REACT_APP_HOST+"/api/produce", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({sProduct1, sProduct2})
    })
    .then(response => {
      if(response.status === 401) {
        return Promise.all([401])
      } else {
        return Promise.all([response.status, response.json()]);
      }
    })
    .then(data => {
      const status = data[0];
      if(status === 200) {
        this.props.history.push('/main/manufacture');
      } else if(status === 401) {
        alert('로그인 하고 접근해주세요.')
        this.props.history.push('/login')
      } else {
        alert('에러로 인해 등록에 실패했습니다.')
      }
    });
  }*/

  render() {
    return (
      <div className="animated fadeIn">
      <link rel="stylesheet" type="text/css" href="css/Table.css"></link>
        <Row>
          <Col md="12" xs="12" sm="12">
          <Card>
              <CardHeader>
                <Row>
                  <Col md="10" xs="10" sm="10">소모 상품</Col>
                  <Col md="2" xs="2" sm="2">
                    <Button block color="primary" 
                      onClick={()=> {
                        let sProduct1 = this.state.sProduct1;
                        sProduct1.push(d);
                        this.setState({
                          sProduct1
                        })}}>
                      추가하기
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table>
                  <thead>
                    <tr>
                        <th>상품명</th>
                        <th>등급</th>
                        <th>무게</th>
                        <th>단가</th>
                        <th>소모재고</th>
                        <th style={{width : 70}}>삭제</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.sProduct1.map(function (e, i) {
                        return (
                          <tr key={i}>
                            <td>
                              {<Popup
                                trigger={<Input name='name' value={e.name} style={{cursor: 'pointer', backgroundColor: '#ffffff'}} onChange={() => {console.log('S')}} readOnly/>}
                                modal>
                                {close => <ProductModal index={i} close={close}
                                            selectProduct={(data) => {
                                              let {sProduct1} = this.state;

                                              let val = Object.assign({}, sProduct1[i]);
                                          
                                              /* set, for instance, comment[1] to "some text"*/
                                              val['id'] = data['id'];
                                              val['name'] = data['name'];
                                              val['price_shipping'] = data['price_shipping'];
                                              val['grade'] = data['grade'];
                                              val['weight'] = data['weight'];
                                              //val['quantity'] = data['quantity'];

                                              sProduct1[i] = val;
                                                         
                                              /* set the state to the new variable */
                                              this.setState({sProduct1});
                                            }}
                                          />}
                                </Popup>}
                            </td>
                            <td><Input name='grade' value={this.state.sProduct1[i].grade} readOnly/></td>
                            <td><Input name='weight' value={this.state.sProduct1[i].weight} readOnly/></td>
                            <td><Input name='price' value={this.state.sProduct1[i].price_shipping} readOnly/></td>
                            <td>
                              <Input name='modifyQuantity' value={this.state.sProduct1[i].change} onChange={(e) => {
                                let {sProduct1} = this.state;
                                sProduct1[i] = Object.assign({}, sProduct1[i]);
                                sProduct1[i].quantity = e.target.value;
                                this.setState({sProduct1})
                              }} />
                            </td>
                            <td>
                              <Button block color="danger" 
                                onClick={()=> {
                                  let {sProduct1} = this.state;
                                  sProduct1.splice(i, 1);
                                  this.setState({
                                    sProduct1
                                  })
                                }}>
                                X
                              </Button>
                            </td>
                          </tr>
                        )
                      }, this)
                    }
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </Col>
          <Col md="12" xs="12" sm="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="10" xs="10" sm="10">생산 상품</Col>
                  <Col md="2" xs="2" sm="2">
                    <Button block color="primary" 
                      onClick={()=> {
                        let sProduct2 = this.state.sProduct2;
                        sProduct2.push(d);
                        this.setState({
                          sProduct2
                        })}}>
                      추가하기
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table>
                  <thead>
                    <tr>
                        <th>상품명</th>
                        <th>등급</th>
                        <th>무게</th>
                        <th>단가</th>
                        <th>생산재고</th>
                        <th style={{width : 70}}>삭제</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.sProduct2.map(function (e, i) {
                        return (
                          <tr key={i}>
                            <td>
                              {<Popup
                                trigger={<Input name='name' value={this.state.sProduct2[i].name} style={{cursor: 'pointer', backgroundColor: '#ffffff'}} onChange={() => {console.log('S')}} readOnly/>}
                                modal>
                                {close => <ProductModal index={i} close={close}
                                            selectProduct={(data) => {
                                              let {sProduct2} = this.state;

                                              let val = Object.assign({}, sProduct2[i]);
                                          
                                              /* set, for instance, comment[1] to "some text"*/
                                              val['id'] = data['id'];
                                              val['name'] = data['name'];
                                              val['price_shipping'] = data['price_shipping'];
                                              val['grade'] = data['grade'];
                                              val['weight'] = data['weight'];

                                              sProduct2[i] = val;
                                                         
                                              /* set the state to the new variable */
                                              this.setState({sProduct2});
                                            }}
                                          />}
                                </Popup>}
                            </td>
                            <td><Input name='grade' value={this.state.sProduct2[i].grade} readOnly/></td>
                            <td><Input name='weight' value={this.state.sProduct2[i].weight} readOnly/></td>
                            <td><Input name='price' value={this.state.sProduct2[i].price_shipping} readOnly/></td>
                            <td>
                              <Input name='quantity' value={this.state.sProduct2[i].change} onChange={(e) => {
                                let {sProduct2} = this.state;
                                sProduct2[i] = Object.assign({}, sProduct2[i]);
                                sProduct2[i].quantity = e.target.value;
                                this.setState({sProduct2})
                                }
                              } />
                            </td>
                            <td>
                              <Button block color="danger" 
                                onClick={()=> {
                                  let {sProduct2} = this.state;
                                  sProduct2.splice(i, 1);
                                  this.setState({
                                    sProduct2
                                  })
                                }}>
                                X
                              </Button>
                            </td>
                          </tr>
                        )
                      }, this)
                    }
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Button block color="primary" onClick={() => {
        }}>제조 수정하기</Button>
      </div>
    )
  }
}

export default Modify;