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
} from "reactstrap";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      isModalOpen: false,
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: "",
      annualLeave: "",
      overTime: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
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
  handlesubmit(event) {
    // this.setState({ name: this.name.value });
    const newStaff = {
      id: this.props.staffs.length,
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      department: this.state.department,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,

      image: "/assets/images/alberto.png",
    };
    this.props.staffs.push(newStaff);
    this.props.staffs.department.push(newStaff);

    console.log(this.props.staffs);
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
    event.preventDefault();
  }
  render(props) {
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
                    value={this.state.name}
                    name="name"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="doB">Ngày sinh</Label>
                  <Input
                    type="date"
                    id="doB"
                    value={this.state.tenState}
                    name="doB"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="startDate">Ngày vào công ty</Label>
                  <Input
                    type="date"
                    id="startDate"
                    value={this.state.tenState}
                    name="startDate"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="department">Phòng ban</Label>
                  <Input
                    type="list"
                    id="department"
                    name="department"
                    value={this.state.department}
                    onChange={this.handleInputChange}
                  />
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
