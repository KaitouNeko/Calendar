import React from "react";
// local modules
import { Calendar } from "@@components";
import "./style.scss";

function App() {
  const divStyle = {
    margin: "10px 15px 20px"
  };
  return (
    <div style={divStyle}>
      <h2>Calendar</h2>
      {/* <Calendar date={'2019-04-05'} /> */}
      <Calendar />
      <h2>DatePicker</h2>
      <Calendar isDatePicker />
    </div>
  );
}

export default App;
