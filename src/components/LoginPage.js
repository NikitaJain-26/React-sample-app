import { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { Link } from "react-router-dom";
import LoggedInUserContext from "../utils/loggedInUserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailInValid, setIsEmailInValid] = useState(false);
  const [isPassWordInValid, setIsPassWordInValid] = useState(false);
  const { userData } = useContext(UserContext);
  const { loggedInUser, setLogInUser } = useContext(LoggedInUserContext);
  const [userNotFound, setUserNotFound] = useState(false);
  const [emailFound, setEmailFound] = useState(false);
  const [signedInSuccessfully, setSignedInSuccessfully] = useState(
    loggedInUser.firstName == undefined ? false : true
  );

  const onSignInClick = () => {
    if (
      email != "" &&
      !isEmailInValid &&
      password != "" &&
      !isPassWordInValid
    ) {
      if (userData.length == 0) {
        setUserNotFound(true);
      } else {
        let user = userData.filter((user) => {
          if (user.email == email) return user;
        });
        if (user.length == 0) {
          setUserNotFound(true);
        } else if (user[0].password !== password) {
          setEmailFound(true);
        } else {
          setLogInUser(user[0]);
          setSignedInSuccessfully(true);
          setEmailFound(false);
        }
      }
    } else {
      if (email == "") setIsEmailInValid(true);
      if (password == "") setIsPassWordInValid(true);
    }
  };

  const onSignOutClick = () => {
    setLogInUser({});
    setSignedInSuccessfully(false);
    setEmail("");
    setPassword("");
  };

  const onEmailChange = (e) => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      setIsEmailInValid(true);
    } else {
      setIsEmailInValid(false);
    }
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    if (e.target.value.length < 8) {
      setIsPassWordInValid(true);
    } else {
      setIsPassWordInValid(false);
    }
    setEmailFound(false);
    setPassword(e.target.value);
  };

  return (
    <div>
      {userNotFound ? (
        <div className="w-3/12 mx-auto text-center">
          <p className="m-4">No User found</p>
          <Link to="/signUp">
            <button className="p-1 bg-orange-400 rounded-md text-white font-bold">
              create a new account
            </button>
          </Link>
        </div>
      ) : signedInSuccessfully ? (
        <div className="w-3/12 mx-auto text-center md:w-full md:mx-4">
          <p className="p-4">Signed In successfully</p>
          <p className="p-2">
            Welcome {loggedInUser.firstName + " " + loggedInUser.lastName}
          </p>
          <button
            className="p-1 bg-orange-400 rounded-md text-white font-bold"
            onClick={() => onSignOutClick()}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="w-3/12 mx-auto md:w-full md:mx-4">
          <div className="m-4 mb-0">
            <div className="py-2">
              <label htmlFor="email" className="font-bold ">
                Email:
              </label>
            </div>
            <input
              type="email"
              className="bg-gray-200 h-8 w-80 rounded-sm p-2"
              value={email}
              required
              onChange={(e) => onEmailChange(e)}
            />
            {!isEmailInValid ? null : (
              <div className="py-2 text-red-500">
                Please enter the vaild email
              </div>
            )}
          </div>
          <div className="m-4">
            <div className="py-2">
              <label htmlFor="password" className="font-bold">
                Password:
              </label>
            </div>
            <input
              type="password"
              className="bg-gray-200 h-8 w-80 rounded-sm p-2"
              value={password}
              required
              minLength={8}
              onChange={(e) => onPasswordChange(e)}
            />
            {!isPassWordInValid ? null : (
              <div className="py-2 text-red-500">
                Please enter the password.
              </div>
            )}
          </div>
          <div className="flex justify-between ml-4 md:w-9/12">
            <button
              className="p-1 bg-orange-400 rounded-md text-white font-bold"
              onClick={() => onSignInClick()}
            >
              Sign In
            </button>
            <Link to="/signUp" className="pl-4">
              <button className="p-1 bg-orange-400 rounded-md text-white font-bold">
                create a new account
              </button>
            </Link>
          </div>
          {emailFound ? (
            <div className="py-2 text-red-500">Incorrect Password</div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
