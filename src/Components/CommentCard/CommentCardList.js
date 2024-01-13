// CommentCard - using all components.
import React, { useState } from "react";
import CommentCard from "./CommentCard";
import DisplayList from "./DisplayList";

const CommentCardList = (props) => {
  const [name] = useState("Jyoti");
  const [list] = useState([
    {
      id: 0,
      item: (
        <CommentCard
        district= "Yuen Long"
        address= "Heng Lok House, Tin Heng Estate"
        case= "10224"
        />
      )
    },
    {
      id: 1,
      item: (
        <CommentCard
        district= "Yuen Long"
        address= "Heng Lok House, Tin Heng Estate"
        case= "10224"
        />
      )
    },
    {
      id: 2,
      item: (
        <CommentCard
        district= "Yuen Long"
        address= "Heng Lok House, Tin Heng Estate"
        case= "10224"
        />
      )
    }
  ]);

  return (
    <div className="App">
      <DisplayList name={name} list={list} />
    </div>
  );
};

export default CommentCardList;
