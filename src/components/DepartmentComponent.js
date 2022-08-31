import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardText,
  Col,
  CardBody,
  Row,
} from "reactstrap";
import Loading from "./LoadingCompoment";
function RenderDepartmentID(props) {
  if (props.department.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.department.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.department.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else if (props.department.Department.length != 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>ok</h4>
          </div>
        </div>
      </div>
    );
  }
}
function RenderDepartment(props) {
  console.log(props);
  if (props.department.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.department.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.department.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else if (props.department.Department.length != 0) {
    const phongban = props.department.Department.map((Department) => {
      return (
        <div className="col-xl-4 col-md-6">
          <Row>
            <Col className="mt-2 ">
              <Card body className="department">
                <Link to={`/Department/${Department.name}`}>
                  <CardTitle>{Department.name}</CardTitle>
                </Link>
                <CardText>
                  Số lượng nhân viên: {Department.numberOfStaff}
                </CardText>
              </Card>
            </Col>
          </Row>
        </div>
      );
    });
    return (
      <div>
        <div className="container m-5">
          <h2>Phòng Ban</h2>
          <div className="row ">{phongban}</div>
        </div>
      </div>
    );
  }
}
export default RenderDepartment;
