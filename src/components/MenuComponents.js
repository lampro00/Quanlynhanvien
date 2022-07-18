import React, { Components } from "react";
import { Media } from "reactstrap";
class Menu extends Components {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Container">
        <div className="row">
          <Media list></Media>
        </div>
      </div>
    );
  }
}
export default Menu;
