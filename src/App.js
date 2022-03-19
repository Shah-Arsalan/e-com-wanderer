import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./Components/Nav/Nav.jsx";
import { LandingPage } from "./WebPages/LandingPage/LandingPage";
import { ProductListing } from "./WebPages/ProductListing/ProductListing";
import { useData } from "./Contexts/DataContext";

function App() {
  const { state } = useData();
  console.log("the state is ", state);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/productlist" element={<ProductListing />} />
      </Routes>
    </>
  );
}

export default App;
