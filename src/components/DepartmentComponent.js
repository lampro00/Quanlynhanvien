import React, { Component } from "react";
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
function RenderDepartment(Departments) {
  const phongban = Departments.staff.map((Department) => {
    return (
      <div className="col-xl-4 col-md-6">
        <Row>
          <Col className="mt-2 ">
            <Card body className="department">
              <CardTitle>{Department.name}</CardTitle>
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
export default RenderDepartment;
