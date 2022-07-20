import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import Staff from "./StaffComponent";
import App from "../App";
class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSaffs: null,
      classDefault: "col-12 col-md-3 m-1",
    };
  }
  onStasffSelect(staff) {
    this.setState({ selectedSaffs: staff });
  }
  col(a) {
    this.setState({ classDefault: a });
  }
  render() {
    console.log(this.state.selectedSaffs);
    const menu = this.props.staffs.map((staff) => {
      return (
        <div className={this.state.classDefault} key={staff.id}>
          <Card onClick={() => this.onStasffSelect(staff)}>
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <button onClick={() => this.col("col-12 col-lg-6 m-1")}>1Cột</button>
        <button onClick={() => this.col("col-12 col-lg-4 m-1")}>2 Cột</button>
        <button onClick={() => this.col("col-12 col-lg-3 m-1")}>3 Cột</button>
        <p onClick={this.shoot}>Bấm để xem thông tin</p>;
        <div className="row">
          <Staff staff={this.state.selectedSaffs} />
        </div>
      </div>
    );
  }
}
export default StaffList;
