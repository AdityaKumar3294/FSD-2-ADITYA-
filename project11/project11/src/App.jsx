import React from "react";
import Student from "./student";

function App() {
  return (
    <div style={{textAlign: "center"}}>
      <h1>Props Example</h1>
      <Student name = "Rahul" age="20" />
      <Student name = "Amit" age="22" />
    </div>
  );
}

export default App;