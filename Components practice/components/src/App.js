import React from "react";
import Circle from "./Components/Circle";
import Table from "./Components/Table";

const backGroundColor = [
  { color: "red" },
  { color: "blue" },
  { color: "green" },
];

const Data = [
  { text: "table data1" },
  { text: "table data2" },
  { text: "table data3" },
];

const App = () => {
  return (
    <div>
      <Circle color={backGroundColor[0].color} />
      <Circle color={backGroundColor[1].color} />
      <Circle color={backGroundColor[2].color} />
      <Table tableData={Data[1].text} />
      <Table tableData={Data[0].text} />
    </div>
  );
};

export default App;
