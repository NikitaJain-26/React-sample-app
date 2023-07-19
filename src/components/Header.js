import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLoginText] = useState("Login");

  onLoginClick = () => {
    const text = login == "Login" ? "Log Out" : "Login";
    setLoginText(text);
    console.log(login);
  };

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" alt="logo" src={LOGO_URL} />
          <h1 className="app-heading">Eat and Repeat</h1>
        </div>
        <div className="nav-conatiner">
          <ul>
            <li>
              <Link className="resList" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="resList" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="resList" to="/contact">
                Contact Us
              </Link>
            </li>
            <li>Cart</li>
          </ul>
          {login == "Login" ? (
            <img
              className="userIcon"
              alt="userIcon"
              src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
              onClick={() => onLoginClick()}
            />
          ) : (
            <button className="logout-btn" onClick={() => onLoginClick()}>
              {login}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
