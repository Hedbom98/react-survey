import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Survey from "./components/Survey";

function App() {
  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <div>
        <Header className="header"/>
        <Survey className="survey"/>
      </div>
    </>
  );
}
export default App;
