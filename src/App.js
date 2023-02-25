import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import { useState } from "react";

const App = () => {
  const [view, setView] = useState("class");

  const toggle = () => {
    setView(view === "class" ? "functional" : "class");
  };

  return (
    <div className="App">
      <br />
      <button onClick={toggle}>
        Show {view === "class" ? "Functional" : "Class"}
      </button>
      <hr />
      {view === "class" ? <ClassComponent /> : <FunctionalComponent />}
    </div>
  );
};

export default App;
