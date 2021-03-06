

import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardFooter, Col, Row, FormGroup, Input, Table, Badge } from 'reactstrap';

class Modify extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      image: null,
      familyData: [],
      image: "http://211.62.225.216:4000/static/",
      imageDetail: ['http://211.62.225.216:4000/static/'],
    };
  }

  componentWillMount() {
    this.getProduct();
    this.getProductFamily();
  }

  handleFileInput() {
    var file = this.refs.file.files[0];
    var canvasImg = document.createElement("img");
    var reader = new FileReader();
    reader.readAsDataURL(file);

    // img resize
    reader.onload = function (e) {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      var url = e.target.result;
      var img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 0, 0, 300, 300);
        var dataurl = canvas.toDataURL('image/png');
        this.setState({
          image: dataurl
        });
        console.log(dataurl)
      }.bind(this);
      img.src = url;

      canvas.width = 300;
      canvas.height = 300;

    }.bind(this);
    this.setState({image: this.state.image})
  }

  handleFileInput_multiple() {
    console.log(this.refs.file_detail.files)
    let imgList = [];
    for(var i = 0; i < this.refs.file_detail.files.length; i++ ) {
      var file = this.refs.file_detail.files[i];
      //var canvasImg = document.createElement("img");
      var reader = new FileReader();
      reader.readAsDataURL(file);
      // img resize
      reader.onload = function (e) {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var url = e.target.result;
        var img = new Image();
        imgList.push(url);
        this.setState({imageDetail: imgList})
        img.src = url;
        canvas.width = 300;
        canvas.height = 300;
  
      }.bind(this);
    }
  }

  getProduct() {
    fetch(process.env.REACT_APP_HOST + "/product/" + this.props.match.params.id, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data[0] })
        this.form = {
          name: data[0].name,
          grade: data[0].grade,
          weight: data[0].weight,
					price: data[0].price_shipping,
					productFamily: data[0].family,
        };
      });
  }

  /*handleFileInput(e){
    var file = this.refs.file.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        image : [reader.result],
      });
    }.bind(this);

    let img = e.target.files[0];

    this.setState({img});
  }*/

  modifyProduct(e) {
    e.preventDefault();

    let c = window.confirm('이 품목을 수정하시겠습니까?')

    if (c) {
      let formData = new FormData();
      //formData.append('file', this.state.img);
      for (let [key, value] of Object.entries(this.form)) {
        formData.append(key, value);
      }
      fetch(process.env.REACT_APP_HOST + "/product/modify/" + this.props.match.params.id, {
        method: 'PUT',
        'Content-Type': 'multipart/form-data',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: formData
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
          if (status === 200) {
            alert('수정됐습니다.');
            this.props.history.push('/main/product/' + this.props.match.params.id);
          } else {
            alert('수정에 실패했습니다.');
          }
        });
    }
  }

  getProductFamily() {
    fetch(process.env.REACT_APP_HOST + "/api/product/familyList/all", {
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
          this.setState({ familyData: data[1] });
        else {
          alert('로그인 하고 접근해주세요');
          this.props.history.push('/login');
        }
      })
  }

  render() {
		var data = this.state.data;
    return (
      <div className="animated fadeIn">
      <link rel="stylesheet" type="text/css" href="css/Table.css"></link>
      <link rel="stylesheet" type="text/css" href="css/ProductDetail.css"></link>
        <Row className="mb-5">
          <Col md="12" xs="12" sm="12">
            <form encType="multipart/form-data" onSubmit={this.modifyProduct.bind(this)}>
              <FormGroup>
                <Card>
                  <CardHeader>
                    품목 수정하기
                  </CardHeader>
                  <CardBody>
                    <Table className="ShowTable">
                      <tbody>
                        <tr>
                          <th>품목명</th>
                          <td>
                            <Input defaultValue={data.name} onChange={(e) => this.form.name = e.target.value} />
                          </td>
                        </tr>
                        <tr>
													<th>품목군</th>
                          <td>
														<Input onChange={(e) => {this.form.productFamily = e.target.value;}} type='select' name="family">
															<option value='NULL'>품목군 없음</option>
															{this.state.familyData.map((e, i) => {
																return <option value={e.id} selected={e.id === data.family}>{e.name}</option>
															})}
														</Input>
                          </td>
                        </tr>
                        <tr>
													<th>판매 단가</th>
                          <td >
                            <Input defaultValue={data.price_shipping} onChange={(e) => this.form.price = e.target.value} />
                          </td>
                        </tr>
                        <tr>
													{/*<th>등급</th>
                          <td >
                          <Input defaultValue={data.grade} onChange={(e) => this.form.grade = e.target.value} />
													</td>
                          <th>무게</th>
                          <td>
                          <Input defaultValue={data.weight} onChange={(e) => this.form.weight = e.target.value} />
                        </td>*/}
                        </tr>
                        <tr>
													<th>상태</th>
                          <td colSpan="3">{data.set ? <Badge color="primary">활성화</Badge> : <Badge color="danger">비활성화</Badge>}</td>
                        </tr>
                        <tr>
                          <th>대표 사진</th>
                          <td style={{ textAlign: "center" }}>
                            <div style={{paddingBottom: '10px'}}>
                              <input ref="file" type="file" name="file" onChange={e => {
                                this.handleFileInput(e);
                              }} style={{display: "none"}}/>
                              <img src='/assets/img/upload.jpg' border='0' style={{width: '10%', marginLeft: 10}}
                                  onClick={() => document.all.file.click()}/>
                            </div>
                            <div>
                              <img id="imageFile" alt="품목 사진" style={{
                                display: "inline-block",
                                border: '1px',
                                borderStyle: 'dashed',
                                borderColor: '#c8ced3',
                                maxWidth: '100%'
                              }} src={data.file_name ? this.state.image + data.file_name : '318x180.svg'}/>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>상세 사진</th>
                          <td style={{ textAlign: "center" }}>
                            <div style={{ paddingBottom: '10px' }}>
                              <input ref="file_detail" type="file" name="file_detail" onChange={e => {
                                this.handleFileInput_multiple(e);
                              }} style={{ display: "none" }} multiple />
                              <img src='/assets/img/upload.jpg' border='0' style={{ width: '10%', marginLeft: 10 }}
                                onClick={() => document.all.file_detail.click()} />
                            </div>
                            {this.state.imageDetail.map((e, i) => {
                              return <img id="imageFile" alt="상세 사진1" style={{
                                display: "inline-block",
                                border: '1px',
                                borderStyle: 'dashed',
                                borderColor: '#c8ced3'
                              }} src={data.file_name ? this.state.imageDetail + data.file_name : '318x180.svg'}/>
                            })}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                  <CardFooter>
                    <Button block outline color="primary">수정하기</Button>
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

export default Modify;

