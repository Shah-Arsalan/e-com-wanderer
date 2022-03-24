import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./Components/Nav/Nav.jsx";
import { LandingPage } from "./WebPages/LandingPage/LandingPage";
import { ProductListing } from "./WebPages/ProductListing/ProductListing";
import { LoginPage } from "./WebPages/loginPage/LoginPage";
import { useAuth } from "./Contexts/auth-context";
import { Wishlist } from "./WebPages/WishListPage/Wishlist";
import { useData } from "./Contexts/DataContext";
import { Cart } from "./WebPages/Cart/Cart";
import { Signup } from "./WebPages/signup/Signup";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/productlist" element={<ProductListing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
