import { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPassWordValid, setIsPassWordValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const { loggedInUser, setUserDetails } = useContext(UserContext);
  const [userNotFound, setUserNotFound] = useState(false);
  const onSignInClick = () => {
    if (email == "") {
      setIsEmailValid(false);
      setEmailError("Please enter the email");
    } else if (password == "") {
      setIsEmailValid(true);
      setIsPassWordValid(false);
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setIsEmailValid(false);
      setEmailError("Please enter the vaild email");
      setIsPassWordValid(true);
    } else {
      setIsEmailValid(true);
      setIsPassWordValid(true);
      setEmailError("");

      if (loggedInUser.length == 0) {
        setUserNotFound(true);
      }
    }
  };
  return (
    <div>
      {userNotFound ? (
        <div className="w-3/12 mx-auto">
          <p>No User found</p>
          <Link to="/signUp">
            <button className="p-1 bg-orange-400 rounded-md text-white font-bold">
              create a new account
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-3/12 mx-auto">
          <div className="m-4 mb-0">
            <div className="py-2">
              <label for="email" className="font-bold ">
                Email:
              </label>
            </div>
            <input
              type="email"
              className="bg-gray-200 h-8 w-60 rounded-sm p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isEmailValid ? null : (
              <div className="py-2 text-red-500">{emailError}</div>
            )}
          </div>
          <div className="m-4">
            <div className="py-2">
              <label for="password" className="font-bold">
                Password:
              </label>
            </div>
            <input
              type="password"
              className="bg-gray-200 h-8 w-60 rounded-sm p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isPassWordValid ? null : (
              <div className="py-2 text-red-500">
                Please enter the password.
              </div>
            )}
          </div>
          <div className="mx-28">
            <button
              className="p-1 bg-orange-400 rounded-md text-white font-bold"
              onClick={() => onSignInClick()}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
