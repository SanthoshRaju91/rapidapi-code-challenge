import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Questions from "./questions/questions";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen flex items-center justify-center">
        <Questions />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
