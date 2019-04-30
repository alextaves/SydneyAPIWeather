import React from "react";

const Card = (props) => {
  return (
    <div className="singleDay">
      <p>{props.day}</p>
      <img src={props.icon} />
      <p>{props.low}&deg; {props.high}&deg;</p>
    </div>
  );
};

export default Card;
