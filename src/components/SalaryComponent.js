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
  CardFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
function RenderSalary(props) {
  console.log(props);
  const luong = props.salary.map((Salary) => {
    return (
      <div className="col-xl-4 col-md-6">
        <Row>
          <Col className="mt-2">
            <Card body className="salary">
              <CardTitle>{Salary.name}</CardTitle>
              <CardText>Mã nhân viên: {Salary.id}</CardText>
              <CardText>Hệ số lương: {Salary.salaryScale}</CardText>
              <CardText>Số ngày làm thêm: {Salary.overTime}</CardText>
              <CardFooter>
                Lương:{" "}
                {Math.round(
                  Salary.salaryScale * 3000000 + 200000 * Salary.overTime
                )}
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  });
  return (
    <div>
      <div className="container m-5">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/Staff">Nhân Viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">{luong}</div>
      </div>
    </div>
  );
}
export default RenderSalary;
