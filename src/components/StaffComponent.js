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
import Loading from "./LoadingCompoment";
import { baseUrl } from "../shared/BaseUrl";
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
        </div>
      </div>
    );
}
export default RenderStaff;
