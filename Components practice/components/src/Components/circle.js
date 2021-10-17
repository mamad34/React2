import React from "react";
import "./Circle.css";

const Circle = (props) => {
  console.log(props);

  return (
    <div className="circle" style={{ backgroundColor: props.color }}></div>
  );
};

export default Circle;
