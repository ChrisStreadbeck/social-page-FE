import React from "react";

const CardDetail = props => {
  return (
    <div>
      <h1>CardDetail for {props.match.params.slug}</h1>
    </div>
  );
};

export default CardDetail;
