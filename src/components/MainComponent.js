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
    const StaffWithId = ({ match }) => {
      console.log({ match });
      return (
        <RenderStaff
          Staff={
            this.state.staffs.filter(
              (Staff) => Staff.id === parseInt(match.params.StaffId, 10)
            )[0]
          }
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/Staff"
            component={() => <StaffList staffs={this.state.staffs} />}
          />
          <Route path="/Nhanvien/:StaffId" component={StaffWithId} />
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
