import React, { Component } from "react";
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
function RenderDepartmentID(props) {
  if (props.departmentLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.departmentErrMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.department.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    const search = props.Staff.filter((el) => {
      if (props.Department.id === el.departmentId) return el;
    });
    const Nhanvien = search.map((staff) => {
      console.log(staff);
      return (
        <div className="col-6 col-xl-2 col-md-4">
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
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/Department">Phòng Ban</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.Department.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="row mb-3">
            <h2>Nhân Viên</h2>
            <div className="col-12 col-md-2"></div>
          </div>
          <div className="row">{Nhanvien}</div>
        </div>
      </div>
    );
  }
}

export default RenderDepartmentID;
