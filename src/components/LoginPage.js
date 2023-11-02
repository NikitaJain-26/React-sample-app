import { useContext, useRef, useState } from "react";
import { validate } from "../utils/validate";
import { useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import LoggedInUserContext from "../utils/loggedInUserContext";

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [error, setError] = useState("");
  const { loggedInUser, setLogInUser } = useContext(LoggedInUserContext);

  const onSignUpClick = () => {
    setIsSignIn(!isSignIn);
  };

  const onSignInClick = () => {
    const error = isSignIn
      ? validate("", email.current.value, password.current.value, isSignIn)
      : validate(
          name.current.value,
          email.current.value,
          password.current.value,
          isSignIn
        );
    if (error !== null) return setError(error);
    setError("");
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              navigate("/");
            })
            .catch((error) => {
              setError(error.code + "-" + error.message);
            });
        })
        .catch((error) => {
          setError(error.code + "-" + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/");
        })
        .catch((error) => {
          setError(error.code + "-" + error.message);
        });
    }
  };

  const OnSignOutClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="">
      <div className="absolute top-10 left-32 w-4/12 mx-60 bg-opacity-80 rounded-sm p-4 mb-4">
        {loggedInUser.displayName !== undefined ? (
          <div className="py-5 px-5 ">
            <p className="px-24 py-5">Welcome {loggedInUser.displayName}</p>
            <button
              onClick={() => OnSignOutClick()}
              className="w-11/12 bg-orange-400 p-3 m-4 text-white rounded-lg font-bold"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-white text-2xl p-3 font-bold">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h3>
            {!isSignIn ? (
              <div>
                <input
                  type="text"
                  className="w-11/12 m-4 p-3 bg-gray-400 bg-opacity-50 rounded-sm"
                  placeholder={"Name"}
                  ref={name}
                />
              </div>
            ) : null}
            <div>
              <input
                type="email"
                className="w-11/12 m-4 p-3 bg-gray-400 bg-opacity-50 rounded-sm"
                placeholder={"Email"}
                ref={email}
              />
            </div>
            <input
              type="password"
              placeholder={"Password"}
              ref={password}
              className="w-11/12 m-4 p-3 text-white bg-gray-400 bg-opacity-50 rounded-sm"
            />
            {error != "" ? (
              <div className="text-red-600 text-sm px-4">{error}</div>
            ) : null}
            <button
              className="w-11/12 bg-orange-400 p-3 m-4 text-white rounded-lg font-bold"
              onClick={() => onSignInClick()}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <div className="px-4 text-sm">
              {isSignIn ? "New to Eat and Repeat ?" : "Already a user ?"}
              <span
                className="underline cursor-pointer"
                onClick={() => onSignUpClick()}
              >
                {isSignIn ? "Sign Up" : "Sign In"}
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
