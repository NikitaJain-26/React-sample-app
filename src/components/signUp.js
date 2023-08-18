import { UserContext } from "../utils/UserContext";
import { useContext, useState } from "react";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPassWordValid, setIsPassWordValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const { loggedInUser, setUserDetails } = useContext(UserContext);
  const onSignUpClick = () => {
    if (firstName == "") {
      setIsFirstNameValid(false);
    }
    if (lastName == "") {
      setIsLastNameValid(false);
    }
    if (email == "") {
      setIsEmailValid(false);
      setEmailError("Please enter the email");
    }
    if (password == "" || password.length < 8) {
      setIsPassWordValid(false);
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setIsEmailValid(false);
      setEmailError("Please enter the vaild email");
      setIsPassWordValid(true);
    } else {
      setIsFirstNameValid(true);
      setIsLastNameValid(true);
      setIsEmailValid(true);
      setIsPassWordValid(true);
      setEmailError("");
      let userDetails = loggedInUser;
      if (userDetails.length == 0) {
        userDetails.push({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });
      }
    }
  };
  return (
    <>
      <div className="w-3/12 mx-auto">
        <div className="m-4 mb-0">
          <div className="py-2">
            <label for="firstName" className="font-bold ">
              First Name:
            </label>
          </div>
          <input
            type="text"
            className="bg-gray-200 h-8 w-60 rounded-sm p-2"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          {isFirstNameValid ? null : (
            <div className="py-2 text-red-500">Please enter first name</div>
          )}
        </div>
        <div className="m-4 mb-0">
          <div className="py-2">
            <label for="lastName" className="font-bold ">
              Last Name :
            </label>
          </div>
          <input
            type="email"
            className="bg-gray-200 h-8 w-60 rounded-sm p-2"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          {isLastNameValid ? null : (
            <div className="py-2 text-red-500">Please enter last name</div>
          )}
        </div>
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
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {isEmailValid ? null : (
            <div className="py-2 text-red-500">{emailError}</div>
          )}
        </div>
        <div className="m-4">
          <div className="py-2">
            <label for="password" className="font-bold">
              Create Password:
            </label>
          </div>
          <input
            type="password"
            className="bg-gray-200 h-8 w-60 rounded-sm p-2"
            value={password}
            required
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isPassWordValid ? null : (
            <div className="py-2 text-red-500">Please enter the password.</div>
          )}
        </div>
        <div className="mx-28">
          <button
            className="p-1 bg-orange-400 rounded-md text-white font-bold"
            onClick={() => onSignUpClick()}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
