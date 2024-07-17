// Importing CSS file for Navbar styling
import "./Navbar.css"; 

// Importing assets object from the assets module
import { assets } from "../../assets/assets";

// Importing necessary hooks and components from React and React Router
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Importing StoreContext for accessing context values
import { StoreContext } from "../../context/StoreContext";

// Navbar functional component
const Navbar = ({ setshowLogin }) => {
  // State hook to manage active menu item
  const [menu, setMenu] = useState("home");

  // Destructuring getTotalCartAmount function from StoreContext
  const { getTotalCartAmount,token,setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
  return (
    <div className="navbar">
      {/* Logo link */}
      <Link to="/">
        <h2 className="logo">Turbo</h2>
      </Link>
      {/* Navbar menu */}
      <ul className="navbar-menu">
        {/* Home link */}
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        {/* Menu link */}
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        {/* Mobile App link */}
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-App
        </a>
        {/* Contact Us link */}
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact-us
        </a>
      </ul>
      {/* Navbar right section */}
      <div className="navbar-right">
        {/* Search icon */}
        <img src={assets.search_icon} alt="" />
        {/* Basket icon */}
        <div className="navbar-search-icon">
          {/* Link to cart */}
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          {/* Dot to indicate items in cart */}
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {/* Sign in button */}
        {!token?<button onClick={() => setshowLogin(true)}>Sign in</button>
        :<div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>}
        
        
      </div>
    </div>
  );
};

export default Navbar;
