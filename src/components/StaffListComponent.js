import React, { Component, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

function StaffList(props) {
  console.log(props);
  const Nhanvien = props.staffs.map((staff) => {
    return (
      <div className="col-6 col-xl-2 col-md-4 ">
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
        <h2>Nhân Viên</h2>
        <div className="row">{Nhanvien}</div>
        {/* <Staff staff={this.state.selectedSaffs} /> */}
      </div>
    </div>
  );
}

export default StaffList;
