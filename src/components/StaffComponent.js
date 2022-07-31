import React, { Component } from "react";
// import { Media } from "reactstrap";
// import { DISHES } from "../shared/dishes";
import { DEPARTMENTS } from "../shared/staffs";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

function RenderStaffItem(Staff) {
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
            <li>Phòng ban: {Staff.department.name} </li>
            <li>Số ngày nghỉ còn lại: {Staff.annualLeave} </li>
            <li>Số ngày đã làm thêm: {Staff.overTime} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function RenderStaff(props) {
  return (
    <div>
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/Nhanvien">Nhân Viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.Staff.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">{RenderStaffItem(props.Staff)}</div>
      </div>
    </div>
  );
}
export default RenderStaff;
