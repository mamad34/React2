import React, { useState } from "react";
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
  const [text, setText] = useState("this is unchanged text");

  const changeText = () => {
    setText("the text change via button");
  };

  const [time, setTime] = useState({
    second: 0,
    minute: 0,
    hour: 0,
  });

  const setNewTime = () => {
    setTime({
      second: new Date().getSeconds(),
      minute: new Date().getMinutes(),
      hour: new Date().getHours(),
    });
  };

  return (
    <div>
      <Circle color={backGroundColor[0].color} />
      <Circle color={backGroundColor[1].color} />
      <Circle color={backGroundColor[2].color} />
      <Table tableData={Data[1].text} />
      <Table tableData={Data[0].text} />
      <h1>{text}</h1>
      <p onClick={setNewTime}>
        {time.hour}:{time.minute}:{time.second}
      </p>

      <button onClick={changeText}> Change Text </button>
    </div>
  );
};

export default App;
