import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import { Routes, Route, Navigate } from "react-router-dom";
import { Nav } from "./Components/Nav/Nav.jsx";
import { LandingPage } from "./WebPages/LandingPage/LandingPage";
import { ProductListing } from "./WebPages/ProductListing/ProductListing";
import { LoginPage } from "./WebPages/loginPage/LoginPage";
import { useAuth } from "./Contexts/auth-context";
import { Wishlist } from "./WebPages/WishListPage/Wishlist";
import { useData } from "./Contexts/DataContext";
import { Cart } from "./WebPages/Cart/Cart";
import { Signup } from "./WebPages/signup/Signup";
import { Error } from "./WebPages/Error/Error";

function App() {
  const { token } = useAuth();
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/productlist" element={<ProductListing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/wishlist"
          element={
            token ? <Wishlist /> : <Navigate to="/login" replace={true} />
          }
        />
        <Route
          path="/cart"
          element={token ? <Cart /> : <Navigate to="/login" replace={true} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/404" />} />

        <Route path="/404" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
