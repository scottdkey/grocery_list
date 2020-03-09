import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import GroceryList from "./components/GroceryList";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Grocery List</h1>
      <div className="App-intro">
        <GroceryList />
      </div>
    </div>
  );
}

export default App;
