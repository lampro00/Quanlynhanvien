import React from "react";
// import { Media } from "reactstrap";
// import { DISHES } from "../shared/dishes";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  return (
    <Card>
      <img src={dish.image} alt={dish.name} />
      <h1>{console.log(dish.image)}</h1>
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}
function RenderComments({ comments }) {
  if (comments != null) {
    console.log(comments);
    return (
      <div>
        <h1>Comment</h1>
        <ul className="list-unstyled">
          {comments.map(function (a) {
            return (
              <li>
                <p> {a.comment} </p>
                <p>
                  {a.author} {a.date}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else return <div></div>;
}

const DishDetail = (props) => {
  if (props.dish != null) {
    console.log(props.dish.comments);
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  } else return <div></div>;
};

export default DishDetail;
