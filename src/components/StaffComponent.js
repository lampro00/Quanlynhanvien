import React, { Component } from "react";
// import { Media } from "reactstrap";
// import { DISHES } from "../shared/dishes";
import { DEPARTMENTS } from "../shared/staffs";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
class Staff extends Component {
  renderStaff(Staff) {
    return (
      <Card>
        {console.log(Staff.department.name)}
        <CardTitle>Họ Và Tên: {Staff.name} </CardTitle>
        <ul className="list-unstyled">
          <li>Ngày sinh: {Staff.doB} </li>
          <li>Ngày vào công ty: {Staff.startDate} </li>
          <li>Phòng ban: {Staff.department.name} </li>
          <li>Số ngày nghỉ còn lại: {Staff.annualLeave} </li>
          <li>Số ngày đã làm thêm: {Staff.overTime} </li>
        </ul>
      </Card>
    );
  }

  render() {
    if (this.props.staff != null)
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderStaff(this.props.staff)}
            </div>
          </div>
        </div>
      );
    else return <div></div>;
  }
}

export default Staff;
