/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? (
        <LoginPopup showLogin={showLogin} setShowLogin={setShowLogin} />
      ) : (
        <></>
      )}
      <div className="app">
        <main className="app__main">
          <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Routes>
        </main>
        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
