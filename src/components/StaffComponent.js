import React, { Component, useState } from "react";
// import { Media } from "reactstrap";
// import { DISHES } from "../shared/dishes";
import { DEPARTMENTS } from "../shared/staffs";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import {
  ModalFooter,
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
import { baseUrl } from "../shared/BaseUrl";
function handlesubmit(value) {
  let a = "";
  value.department === "IT" ? (a = "Dept04") : "";
  value.department === "Sale" ? (a = "Dept01") : "";
  value.department === "HR" ? (a = "Dept02") : "";
  value.department === "Marketing" ? (a = "Dept03") : "";
  value.department === "Finance" ? (a = "Dept05") : "";
  console.log(a);
  // this.props.postStaff(
  //   this.props.staffs.length,
  //   value.name,
  //   a,
  //   value.doB,
  //   value.startDate,
  //   value.salaryScale,
  //   value.annualLeave,
  //   value.overTime
  // );
}
function Example(Staff, Department) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const department = Department.filter(
    (department) => department.id === Staff.departmentId
  )[0];
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        UPDATE
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Thông tin nhân viên</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handlesubmit(values)}>
            <Row className="form-group">
              <Col md={10}>
                <Label htmlFor="name">Tên</Label>
                <Control
                  model=".name"
                  id="name"
                  name="name"
                  placeholder={Staff.name}
                  className="form-control"
                ></Control>
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
                  placeholder={Staff.doB}
                  className="form-control"
                />
                <Errors className="text-danger" model=".doB" show="touched" />
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
                  placeholder={Staff.startDate}
                  className="form-control"
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
                  placeholder={department.name}
                  className="form-control"
                >
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
                  placeholder={Staff.salaryScale}
                  className="form-control"
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
                  placeholder={Staff.annualLeave}
                  className="form-control"
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
                  placeholder={Staff.overTime}
                  className="form-control"
                />
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
function RenderStaffItem(Staff, Department) {
  const department = Department.filter(
    (department) => department.id === Staff.departmentId
  )[0];
  console.log(Staff);
  return (
    <div>
      <div className="row">
        <div className="col-12 col-xl-3 col-md-4">
          <CardImg src={Staff.image}></CardImg>
        </div>
        <div className="col-12 col-xl-9 col-md-8  ">
          <ul className="list-unstyled">
            <CardTitle>Họ Và Tên: {Staff.name} </CardTitle>
            <li>Ngày sinh: {dateFormat(Staff.doB, "dd/mm/yyyy")} </li>
            <li>
              Ngày vào công ty: {dateFormat(Staff.startDate, "dd/mm/yyyy")}{" "}
            </li>

            <li>Phòng ban: {department.name} </li>
            <li>Số ngày nghỉ còn lại: {Staff.annualLeave} </li>
            <li>Số ngày đã làm thêm: {Staff.overTime} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
function RenderStaff({ Staff, staffLoading, staffErrMess, Department }) {
  if (staffLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (staffErrMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{staffErrMess}</h4>
        </div>
      </div>
    );
  } else if (Staff != null)
    return (
      <div>
        <div className="container">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/Nhanvien">Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{Staff.name}</BreadcrumbItem>
          </Breadcrumb>

          <div className="row">{RenderStaffItem(Staff, Department)}</div>
          {Example(Staff, Department)}
        </div>
      </div>
    );
}
export default RenderStaff;
