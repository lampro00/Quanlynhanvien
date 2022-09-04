import React, { Component, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  FormFeedback,
} from "reactstrap";
import Loading from "./LoadingCompoment";
import { Control, LocalForm, Errors } from "react-redux-form";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      isModalOpen: false,
      name: "",
      doB: "",
      salaryScale: 1.1,
      startDate: "",
      department: {
        id: "",
        name: "",
        numberOfStaff: "",
      },
      annualLeave: 1,
      overTime: 0,
      touched: {
        name: false,
        doB: false,
        startDate: false,
      },
      check: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handlclick = (field) => (evt) => {
    this.setState({
      department: { ...this.state.department, name: evt.target.value },
    });
  };
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name1 = target.name;

    this.setState({
      [name1]: value,
    });
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSearch() {
    this.setState({ input: this.username.value.toUpperCase() });
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
      check: true,
    });
  };

  handlesubmit(value) {
    let a = "";
    value.department === "IT" ? (a = "Dept04") : "";
    value.department === "Sale" ? (a = "Dept01") : "";
    value.department === "HR" ? (a = "Dept02") : "";
    value.department === "Marketing" ? (a = "Dept03") : "";
    value.department === "Finance" ? (a = "Dept05") : "";

    this.props.postStaff(
      this.props.staffs.length,
      value.name,
      a,
      value.doB,
      value.startDate,
      value.salaryScale,
      value.annualLeave,
      value.overTime
    );

    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleDelete(value) {
    this.props.deleteStaff(value);
    console.log(value);
  }
  render() {
    const required = (val) => val && val.length;
    const minLength = (len) => (val) => val && val.length >= len;
    const isNumber = (val) => !isNaN(Number(val));
    console.log(this.props.staffs);

    if (this.props.staffs.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.staffs.errMess) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>{this.props.staffs.errMess}</h4>
            </div>
          </div>
        </div>
      );
    } else if (this.props.staffs.Staff.length != 0) {
      console.log(this.props.staffs.Staff);
      const search = this.props.staffs.Staff.filter((el) => {
        if (el.name.toUpperCase().includes(this.state.input) === true) {
          return el;
        }
      });
      const Nhanvien = search.map((staff) => {
        return (
          <div className="col-6 col-xl-2 col-md-4 mb-3">
            <Link to={`/Nhanvien/${staff.id}`}>
              <CardImg src={staff.image} alt="Nhân viên"></CardImg>
              <Card>
                <CardTitle className="text-center">{staff.name}</CardTitle>
              </Card>
            </Link>
            <Button
              id="buttondelete"
              className="buttondelete"
              onClick={() => this.handleDelete(staff.id)}
            >
              Delete
            </Button>
          </div>
        );
      });
      return (
        <div>
          <div className="container p-4 background-color">
            <div className="row mb-3">
              <div className="col-12 col-md-2">
                <h2>Nhân Viên</h2>
              </div>
              <div className="col-12 col-md-4">
                <button className="mt-1 button" onClick={this.toggleModal}>
                  +
                </button>
              </div>
              <div className="input col-12 col-md-6">
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
                <Button className="button" onClick={this.handleSearch}>
                  <span class="fa fa-search ml-2" aria-hidden="true"></span>
                </Button>
              </div>
            </div>
            <div className="row">{Nhanvien}</div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>
                Thêm nhân viên
              </ModalHeader>
              <ModalBody>
                <LocalForm onSubmit={(values) => this.handlesubmit(values)}>
                  <Row className="form-group">
                    <Col md={10}>
                      <Label htmlFor="name">Tên</Label>
                      <Control.text
                        model=".name"
                        id="name"
                        name="name"
                        placeholder=" Name"
                        className="form-control"
                        validators={{
                          required,
                          minLength: minLength(2),
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".name"
                        show="touched"
                        messages={{
                          required: "Yêu cầu nhập",
                          minLength: "Nhập nhiều hơn 2 kí tự",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={10}>
                      <Label htmlFor="doB">Ngày sinh</Label>
                      <Control
                        type="date"
                        model=".doB"
                        id="doB"
                        name="doB"
                        placeholder=" doB"
                        className="form-control"
                        validators={{
                          required,
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".doB"
                        show="touched"
                        messages={{
                          required: "Yêu cầu nhập",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={10}>
                      <Label htmlFor="startDate">Ngày vào công ty</Label>
                      <Control
                        type="date"
                        model=".startDate"
                        id="startDate"
                        name="startDate"
                        placeholder=" startDate"
                        className="form-control"
                        validators={{
                          required,
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".startDate"
                        show="touched"
                        messages={{
                          required: "Yêu cầu nhập",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={10}>
                      <Label htmlFor="department">Phòng ban</Label>
                      <Control.select
                        model=".department"
                        id="department"
                        name="department"
                        placeholder=" department"
                        className="form-control"
                        validators={{
                          required,
                        }}
                      >
                        <option>Yêu cầu chọn </option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                        <option value="Sale">Sale</option>
                      </Control.select>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={10}>
                      <Label htmlFor="salaryScale">Hệ số lương</Label>
                      <Control.text
                        model=".salaryScale"
                        id="salaryScale"
                        name="salaryScale"
                        placeholder=" 1"
                        className="form-control"
                        validators={{
                          required,
                          isNumber,
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".salaryScale"
                        show="touched"
                        messages={{
                          required: "Yêu cầu nhập",
                          isNumber: "Chỉ được nhập số",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={10}>
                      <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>

                      <Control.text
                        model=".annualLeave"
                        id="annualLeave"
                        name="annualLeave"
                        placeholder=" 1"
                        className="form-control"
                        validators={{
                          required,
                          isNumber,
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".annualLeave"
                        show="touched"
                        messages={{
                          required: "Yêu cầu nhập",
                          isNumber: "Chỉ được nhập số",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={10}>
                      <Label htmlFor="overTime">Số ngày làm thêm</Label>

                      <Control.text
                        model=".overTime"
                        id="overTime"
                        name="overTime"
                        placeholder=" 0"
                        className="form-control"
                        validators={{
                          required,
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".overTime"
                        show="touched"
                        messages={{
                          required: "Yêu cầu nhập",
                        }}
                      />
                    </Col>
                  </Row>
                  <Button type="submit" value="submit" color="primary">
                    Add
                  </Button>
                </LocalForm>
              </ModalBody>
            </Modal>
          </div>
        </div>
      );
    } else
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Lỗi</h4>
            </div>
          </div>
        </div>
      );
  }
}

export default StaffList;
