import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [auth, setAuth] = useState(true);

  const authenticate = () => {
    setAuth((auth) => !auth);
  };
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
        <button className="auth-btn" onClick={authenticate}>
          {auth ? "Login" : "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Header;
