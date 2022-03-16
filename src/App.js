import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
}

export default App;
