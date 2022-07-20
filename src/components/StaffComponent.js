import React, { Component } from "react";
// import { Media } from "reactstrap";
// import { DISHES } from "../shared/dishes";
import { DEPARTMENTS } from "../shared/staffs";
import dateFormat from "dateformat";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
class Staff extends Component {
  renderStaff(Staff) {
    return (
      <div>
        <CardImg src={Staff.image}></CardImg>
        <div>
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
    );
  }

  render() {
    if (this.props.staff != null)
      return (
        <div className="container">
          <div className="row">{this.renderStaff(this.props.staff)}</div>
        </div>
      );
    else return <div></div>;
  }
}

export default Staff;
