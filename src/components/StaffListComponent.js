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
  Col,
  FormFeedback,
} from "reactstrap";
import { DEPARTMENTS } from "../shared/staffs";

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
        name: "IT",
        numberOfStaff: "",
      },
      annualLeave: 1,
      overTime: 0,
      touched: {
        name: false,
        doB: false,
        startDate: false,
      },
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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
    });
  };
  validate(name, startDate, doB) {
    const errors = {
      name: "",
      startDate: "",
      doB: "",
    };
    if (this.state.touched.name && name.length == 0)
      errors.name = "Yêu Cầu Nhập";
    if (this.state.touched.doB && startDate.length == 0)
      errors.doB = "Yêu Cầu Nhập";
    if (this.state.touched.startDate && doB.length == 0)
      errors.startDate = "Yêu Cầu Nhập";
    return errors;
  }
  handlesubmit(event) {
    const newStaff = {
      id: this.props.staffs.length,
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      department: {
        name: this.state.department,
      },
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      image: "/assets/images/alberto.png",
    };
    if (
      this.state.touched.name &&
      this.state.touched.doB &&
      this.state.touched.startDate
    ) {
      console.log(this.state.touched);
      this.props.staffs.push(newStaff);
      this.setState({
        isModalOpen: !this.state.isModalOpen,
      });

      event.preventDefault();
    }
  }
  render() {
    console.log(this.state);
    const errors = this.validate(
      this.state.name,
      this.state.doB,
      this.state.startDate
    );
    const search = this.props.staffs.filter((el) => {
      if (el.name.toUpperCase().includes(this.state.input) === true) {
        return el;
      }
    });
    const Nhanvien = search.map((staff) => {
      return (
        <div className="col-6 col-xl-2 col-md-4 ">
          <Link to={`/Nhanvien/${staff.id}`}>
            <CardImg src={staff.image} alt="Nhân viên"></CardImg>
            <Card>
              <CardTitle className="text-center">{staff.name}</CardTitle>
            </Card>
          </Link>
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
            <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handlesubmit}>
                <FormGroup>
                  <Label htmlFor="name">Tên</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
                    valid={errors.name === ""}
                    invalid={errors.name !== ""}
                    onBlur={this.handleBlur("name")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="doB">Ngày sinh</Label>
                  <Input
                    type="date"
                    id="doB"
                    value={this.state.tenState}
                    name="doB"
                    valid={errors.doB === ""}
                    invalid={errors.doB !== ""}
                    onBlur={this.handleBlur("doB")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.doB}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="startDate">Ngày vào công ty</Label>
                  <Input
                    type="date"
                    id="startDate"
                    value={this.state.tenState}
                    name="startDate"
                    valid={errors.startDate === ""}
                    invalid={errors.startDate !== ""}
                    onBlur={this.handleBlur("startDate")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.startDate}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="department">Phòng ban</Label>
                  <Input
                    type="select"
                    id="department"
                    name="department"
                    value={this.state.department.name}
                    onChange={this.handleInputChange}
                    onClick={() => this.handlclick()}
                  >
                    <option>IT</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>Sale</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="salaryScale">Hệ số lương</Label>
                  <Input
                    type="text"
                    id="salaryScale"
                    value={this.state.salaryScale}
                    name="salaryScale"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                  <Input
                    type="text"
                    id="annualLeave"
                    value={this.state.annualLeave}
                    name="annualLeave"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="overTime">Số ngày làm thêm</Label>
                  <Input
                    type="text"
                    id="overTime"
                    name="overTime"
                    value={this.state.overTime}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <Button type="submit" value="submit" color="primary">
                  Add
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default StaffList;
