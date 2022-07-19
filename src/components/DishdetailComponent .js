import React, { Component } from "react";
// import { Media } from "reactstrap";
// import { DISHES } from "../shared/dishes";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    // console.log(this.props.dish.comments);

    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
  renderComment(comments) {
    return (
      <div>
        <h1>Comment</h1>

        {comments.map((comment) => {
          return (
            <ul className="list-unstyled">
              <li>{comment.comment}</li>
              <li>
                {comment.author} {comment.date}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }

  render() {
    if (this.props.dish != null)
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComment(this.props.dish.comments)}
            </div>
          </div>
        </div>
      );
    else return <div></div>;
  }
}

export default DishDetail;
