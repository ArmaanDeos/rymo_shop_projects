import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./pages/Home/Home";
import Product from "./pages/Shop/Products";
import ProductDetials from "./pages/Details/productDetials";
import Cart from "./pages/Cart/Cart";
import CheckOut from "./pages/CheckOut/CheckOut";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Help from "./pages/Help/Help";
import Faq from "./pages/Faq/Faq";
import MyState from "./context/data/myState";
import Loader from "./components/loader/Loader";
import Spinner from "./components/loader/Spinner";

const App = () => {
  return (
    <>
      <MyState>
        <Router>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/productDetails" element={<ProductDetials />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/loader" element={<Loader />} />
            <Route path="/spinner" element={<Spinner />} />
          </Routes>
        </Router>
      </MyState>
    </>
  );
};

export default App;
