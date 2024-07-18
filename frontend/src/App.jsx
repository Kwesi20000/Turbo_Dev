import { Route, Routes } from "react-router-dom"; 
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
  // State to control the display of the login popup
  const [showLogin, setshowLogin] = useState(false);

  return (
    <>
      {/* Conditional rendering of the login popup */}
      {showLogin ? <LoginPopup setshowLogin={setshowLogin} /> : <></>}
      {/* Main application content */}
      <div className="app">
        {/* Navbar component */}
        <Navbar setshowLogin={setshowLogin} />
        {/* Routing for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<verify />} />
        </Routes>
      </div>
      {/* Footer component */}
      <Footer />
    </>
  );
};

export default App;
