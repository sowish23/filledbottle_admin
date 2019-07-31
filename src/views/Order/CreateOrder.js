import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardFooter, Col, Row, Table, Input, Label } from 'reactstrap';

import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko)

let d = {a: null, b: null, c: null, d: null, e: null, f: null};

class CreateOrder extends Component {
  constructor(props) {
    super(props);

    this.customer = [];

    this.state = {
      product: [],
      sProduct: [d],
      sCustomer: null, //선택된 거래처
      date: null,
      manager: null
    };
  }
  componentWillMount() {
    this.findCustomer();
    this.findProduct();
  }

  findCustomer() {
    fetch("http://localhost:4000/customer", {
      method: 'GET',
    })
      .then(response => response.json())
      .then(customer => {this.customer = customer;this.setState({customer})})
  }

  findProduct() {
    fetch("http://localhost:4000/product", {
      method: 'GET',
    })
      .then(response => response.json())
      .then(product => {this.setState({product})})
  }

  convertDateFormat(date) {
    return date.getFullYear() + "-" + date.getMonth()+1 + "-" + date.getDate();
  }

  addOrder() {
    const {manager, sCustomer, sProduct} = this.state;
    let {date} = this.state;

    date = this.convertDateFormat(date);

    fetch("http://localhost:4000/order", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({date, manager, sCustomer, sProduct})
    })
      .then(response => response.json())
      .then(data => {console.warn(data);  this.props.history.push('/sales/list');});
  }

  onUpdateComments(idx, key, e) {
    /*
        you can modify your state only using setState. But be carefull when trying to grab actual state and modify it's reference.
        So, the best way is to create a new object (immutable pattern), and one way of doing that is to use Object.assign
    */
    let sProduct = this.state.sProduct;

    let val = Object.assign({}, sProduct[idx]);

    /* set, for instance, comment[1] to "some text" */
    val[key] = e.target.value;

    sProduct[idx] = val;

    /* set the state to the new variable */
    this.setState({sProduct});
   }

  render() {
    let customer = this.customer;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12" xs="12" sm="12">
            <Card>
              <CardHeader>
                거래처 추가하기
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Label>날짜</Label>
                    <DatePicker
                      dateFormat="yyyy년 MM월 dd일"
                      locale="ko"
                      selected={this.state.date}
                      onChange={(date) => {this.setState({date})}}
                    />
                  </Col>
                  <Col>
                    <Label>담당자</Label>
                    <Input onChange={(e) => this.setState({manager: e.target.value})} />
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </Col>
          <Col md="12" xs="12" sm="12">
            <Card>
              <CardHeader>
                거래처
              </CardHeader>
              <CardBody>
                <Table striped>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>name</th>
                      <th>delegate</th>
                      <th>manager</th>
                      <th>cellphone</th>
                      <th>telephone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customer.map(function (e) {
                      return (
                        <tr style={{cursor: "pointer", backgroundColor: this.state.sCustomer === e.id ? 'lightgray' : 'transparent'}}
                          onClick={()=>{
                            if(this.state.sCustomer !== e.id)
                              this.setState({sCustomer: e.id})
                            else
                              this.setState({sCustomer: null})
                          }}
                          key={e.id}>
                          <th scope="row">{e.id}</th>
                          <td>{e.name}</td>
                          <td>{e.delegate}</td>
                          <td>{e.manager}</td>
                          <td>{e.cellphone}</td>
                          <td>{e.telephone}</td>
                        </tr>
                      )
                    }.bind(this))}
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
                  <Col md="10" xs="10" sm="10">제품</Col>
                  <Col md="2" xs="2" sm="2">
                    <Button block color="primary" 
                      onClick={()=> {
                        let sProduct = this.state.sProduct;
                        sProduct.push(d)
                        this.setState({
                          sProduct
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
                      <th>#</th>
                      <th>품명</th>
                      <th>수량</th>
                      <th>단가</th>
                      <th>공급가액</th>
                      <th>부가세</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.sProduct.map(function (e, i) {
                        return (
                          <tr key={i}>
                            <td>
                              <Input onChange={this.onUpdateComments.bind(this,i,'a')} style={{display:'inline', width: '80%'}}/>
                              <i style={{display:'inline-block'}} className="cui-align-left icons font-2xl"></i>
                            </td>
                            <td><Input onChange={this.onUpdateComments.bind(this,i,'b')}/></td>
                            <td><Input onChange={this.onUpdateComments.bind(this,i,'c')} /></td>
                            <td><Input onChange={this.onUpdateComments.bind(this,i,'d')} /></td>
                            <td><Input onChange={this.onUpdateComments.bind(this,i,'e')} /></td>
                            <td><Input onChange={this.onUpdateComments.bind(this,i,'f')} /></td>
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
          this.addOrder(this.state);
        }}>주문 추가하기</Button>
      </div>
    )
  }
}

export default CreateOrder;