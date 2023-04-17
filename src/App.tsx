import React from "react";
import "./App.css";
import ItemManager from "./ItemManager/ItemManager";

const tableHeads = [
  "ID",
  "Name",
  "Description",
  "Link",
  "Should Cook",
  "Nutritions",
  "Max. Intake per day (in grams)Intake",
];

function App() {
  return (
    <div className="App">
      <ItemManager tableHeads={tableHeads} />
    </div>
  );
}

export default App;
