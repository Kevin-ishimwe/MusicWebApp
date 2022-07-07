import React from "react";
import FetchApi from "./API/FetchApi";
import "./App.css";
import Navigation from "./components/navigation";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <FetchApi />
    </React.Fragment>
  );
}

export default App;
