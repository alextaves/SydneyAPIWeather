import React from "react";

const Card = (props) => {
  return (
    <div className="singleDay">
      <p>{props.card.day}</p>
      <img src={props.card.icon} alt={props.card.icon} />
      <p>{props.card.low}&deg; {props.card.high}&deg;</p>
    </div>
  );
};

export default Card;
