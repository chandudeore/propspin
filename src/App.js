import { useState } from "react";
import "./App.css";
import { Inputbox } from "./components/Inputbox";

function App() {
  const [values, setValues] = useState("");
  return (
    <div className="App">
      <Inputbox
        length={5}
        label="PinInput"
        max={1}
        onChange={(v) => setValues(v)}
      />
    </div>
  );
}

export default App;
