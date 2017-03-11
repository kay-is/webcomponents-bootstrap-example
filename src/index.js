import React from "react";
import { render } from "react-dom";
import "./BootstrapProgress";

function App() {
  return (
    <div style={{ margin: 200 }}>
      <bootstrap-progress data-complete="20%" />
      <bootstrap-progress data-complete="70%" />
      <bootstrap-progress data-complete="50%" />
    </div>
  );
}

render(<App />, document.getElementById("app"));
