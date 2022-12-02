import React from "react";

const Card = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={value.img} alt="" />
          </div>
          <div>
            <p className="card-title">{props.title}</p>
            <p className="description">{props.description}</p>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default Card;
