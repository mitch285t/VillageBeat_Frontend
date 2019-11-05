import React from "react";
import "./App.css";
import Navigbar from "./containers/Navigbar.js";
import Home from "./containers/Home.js";
import { MyMapComponent } from "./components/MyMapComponent";
function App() {
  return (
    <div>
      <Navigbar />
      <div>
        <Home />
        <div></div>
      </div>
    </div>
  );
}

export default App;
