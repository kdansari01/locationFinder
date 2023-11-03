import React from "react";
import "./App.css";
import PostalCodeInputComponent from "./component/PostalCodeInputComponent";
import LocationInfoComponent from "./component/LocationInfoComponent";

function App() {
  return (
    <div className="App">
      <div className="form-container ">
        <PostalCodeInputComponent />
      </div>
      <div className="info-container">
        <LocationInfoComponent />
      </div>
    </div>
  );
}

export default App;
