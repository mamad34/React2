import React from "react";
import Circle from "./Components/Circle";
import Table from "./Components/Table";

const backGroundColor = [
  { color: "red" },
  { color: "blue" },
  { color: "green" },
];

const App = () => {
  return (
    <div>
      <Circle color={backGroundColor[0].color} />
      <Circle color={backGroundColor[1].color} />
      <Circle color={backGroundColor[2].color} />
      <Table />
      <Table />
    </div>
  );
};

export default App;
