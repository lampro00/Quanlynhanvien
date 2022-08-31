import React, { Component, useState } from "react";
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
  Button,
} from "reactstrap";
import Loading from "./LoadingCompoment";
import { Link } from "react-router-dom";
function RenderSalary(props) {
  console.log(props.salary);
  if (props.salary.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.salary.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.salary.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else if (props.salary.Salary.length != 0) {
    const newStaffs = props.salary.Salary.map((staff) => {
      return {
        ...staff,
        salary: staff.salaryScale * 3000000 + 200000 * staff.overTime,
      };
    });
    const [sortSalary, setsortSalary] = useState(false);
    if (sortSalary) {
      newStaffs.sort((a, b) => b.salary - a.salary);
    }

    const luong = newStaffs.map((Salary) => {
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
          </Row>{" "}
        </div>
      );
    });

    return (
      <div>
        <div className="container m-5">
          <div className="row">
            <div className="col-12 col-md-3">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/Staff">Nhân Viên</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>Bảng lương</BreadcrumbItem>
              </Breadcrumb>
            </div>

            <div className="col-12 col-md-9">
              <Button
                className="button"
                onClick={() => setsortSalary(!sortSalary)}
              >
                Sắp xếp lương giảm dần
              </Button>
            </div>
          </div>
          <div className="row">{luong}</div>
        </div>
      </div>
    );
  }
}
export default RenderSalary;
