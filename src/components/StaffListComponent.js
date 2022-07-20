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
      Hiden: null,
    };
  }
  onStasffSelect(staff) {
    this.setState({ selectedSaffs: staff });
  }
  col(a) {
    this.setState({ classDefault: a });
  }
  Hiden(b) {
    this.setState({ Hiden: b });
  }
  render() {
    const menu = this.props.staffs.map((staff) => {
      return (
        <div className={this.state.classDefault} key={staff.id}>
          <Card
            onClick={() => {
              this.onStasffSelect(staff), this.Hiden("none");
            }}
          >
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <button
          className="btn-success"
          onClick={() => this.col("col-12 col-lg-4 m-1")}
        >
          2 Cột
        </button>
        <button
          className="btn-success"
          onClick={() => this.col("col-12 col-lg-3 m-1")}
        >
          3 Cột
        </button>
        <button
          className="btn-success"
          onClick={() => this.col("col-12 col-lg-2 m-1")}
        >
          5 Cột
        </button>
        <p style={{ display: this.state.Hiden }}>
          Bấm để xem thông tin nhân viên
        </p>
        <Staff staff={this.state.selectedSaffs} />
      </div>
    );
  }
}
export default StaffList;
