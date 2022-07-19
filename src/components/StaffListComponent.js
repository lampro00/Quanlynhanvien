import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import Staff from "./StaffComponent";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSaffs: null,
    };
  }
  onStasffSelect(staff) {
    this.setState({ selectedSaffs: staff });
  }
  render() {
    console.log(this.state.selectedSaffs);
    const menu = this.props.staffs.map((staff) => {
      return (
        <div className="col-12 col-md-5 m-1" key={staff.id}>
          <Card onClick={() => this.onStasffSelect(staff)}>
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <p>Bấm để xem thông tin</p>;
        <div className="row">
          <Staff staff={this.state.selectedSaffs} />
        </div>
      </div>
    );
  }
}
export default StaffList;
