import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import RenderStaff from "./StaffComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import RenderDepartment from "./DepartmentComponent.js";
import StaffList from "./StaffListComponent";
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import RenderSalary from "./SalaryComponent";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,

      department: DEPARTMENTS,
    };
  }

  render() {
    const StaffWithId = (props) => {
      return (
        <RenderStaff
          Staff={
            this.state.staffs.filter(
              (Staff) => Staff.id === parseInt(props.match.params.a, 10)
            )[0]
          }
        />
      );
    };

    return (
      <div>
        <Header staffs={this.state.staffs} />
        <Switch>
          <Route
            exact
            path="/Staff"
            component={() => <StaffList staffs={this.state.staffs} />}
          />

          <Route path="/Nhanvien/:a" component={StaffWithId} />
          <Route
            exact
            path="/Department"
            component={() => <RenderDepartment staff={this.state.department} />}
          />
          <Route
            exact
            path="/Salary"
            component={() => <RenderSalary salary={this.state.staffs} />}
          />
          <Redirect to="/Staff" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
