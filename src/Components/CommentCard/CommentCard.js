import React from "react";
import { Card, CardHeader, CardTitle, CardBody, CardText } from "reactstrap";

const CommentCard = (props) => {
  let style = {
    maxWidth: "18rem"
  };
  let center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  };
  return (
    <Card className="card text-white bg-secondary" style={style}>
      <CardHeader>
        <div style={center}>

        </div>
      </CardHeader>
      <CardTitle style={center}>
        <h3>{props.district}</h3>
      </CardTitle>
      <CardBody style={center}>
        <CardText>Today at: {props.address}</CardText>
        <CardText>{props.case}</CardText>
      </CardBody>
    </Card>
  );
};

export default CommentCard;
