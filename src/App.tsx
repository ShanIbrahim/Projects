import React from "react";
import "./App.css";
import Table from "./Table";

const Nutritions = [
  "Vitamin A",
  "Vitamin C",
  "Vitamin D",
  "Vitamin E",
  "Vitamin K",
  "Vitamin B1",
  "Vitamin B2",
  "Vitamin B3",
  "Vitamin B6",
  "Vitamin B12",
];

function App() {
  return (
    <div className="App">
      <Table data={Nutritions} />
    </div>
  );
}

export default App;
