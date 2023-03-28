import { Link } from "react-router-dom";
import Logo from "../assets/img/images.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaOpencart } from "react-icons/fa";
//Title component for display logo.
const Title = () => {
  return (
    <a href="/">
      <img alt="logo" className="logo" src={Logo} title="HelloFood" />
    </a>
  );
};

//Header component for header section => logo, Nav items
const Header = () => {
  //use state for user logged in or logged out
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
            <FaOpencart/>
          </li>
          <li>
            {/* use condtional rendering for login or logout */}
            {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={()=>navigate("/login")}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
