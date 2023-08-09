import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";

const Header = () => {
  const [login, setLoginText] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  onLoginClick = () => {
    const text = login == "Login" ? "Log Out" : "Login";
    setLoginText(text);
  };

  const { loggedInUser, setUserName } = useContext(UserContext);
  const onMenuIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onlineStatus = useOnlineStatus();
  return (
    <>
      <div className="flex justify-between m-4 px-2 py-0 border border-1">
        <div className="flex">
          <Link to="/">
            <img className="w-16 h-12 mt-2" alt="logo" src={LOGO_URL} />
          </Link>
          <h1 className="mx-4 my-4 font-bold sm:text-2xl text-lg font-sans">
            <Link to="/">Eat and Repeat</Link>
          </h1>
        </div>
        <div>{loggedInUser}</div>
        <div className="sm:hidden md:hidden flex items-center">
          <ul className="flex list-none">
            <li className="m-2">{onlineStatus ? "\u2705" : "\u{1F534}"}</li>
            <li className="m-2">
              <Link to="/">Home</Link>
            </li>
            <li className="m-2">
              <Link to="/about">About Us</Link>
            </li>
            <li className="m-2">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="m-2">
              <Link to="/cart">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
          {login == "Login" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              onClick={() => onLoginClick()}
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <button
              className="border bg-gray-500 p-2 rounded"
              onClick={() => onLoginClick()}
            >
              {login}
            </button>
          )}
        </div>
        <div className="2xl:hidden md:flex mt-4 mr-2">
          <div
            className="absolute right-8 hover:cursor-pointer"
            onClick={() => {
              onMenuIconClick();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="absolute right-16 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <ul className="">
          <li className="m-2 border-solid border-b-[1px] border-gray-400">
            <Link to="/">Sign In</Link>
          </li>
          <li className="m-2 border-solid border-b-[1px] border-gray-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-2 border-solid border-b-[1px] border-gray-400">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
