import { UserContext } from "../utils/UserContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPassWordValid, setIsPassWordValid] = useState(true);
  const { userData, setUserDetails } = useContext(UserContext);
  const [userAlreadyExist, setUserAlreadyExist] = useState(false);
  const onSignUpClick = () => {
    if (firstName == "") {
      setIsFirstNameValid(false);
    }
    if (lastName == "") {
      setIsLastNameValid(false);
    }
    if (
      email == "" &&
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
    if (password == "" || password.length < 8) {
      setIsPassWordValid(false);
    } else {
      setIsFirstNameValid(true);
      setIsLastNameValid(true);
      setIsEmailValid(true);
      setIsPassWordValid(true);
      let userDetails = userData;
      if (userDetails.length == 0) {
        userDetails.push({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });
        setUserDetails(userDetails);
      } else {
        let userExist = false;
        userDetails.map((user) => {
          if (user.email == email) {
            userExist = true;
            setUserAlreadyExist(true);
          }
        });

        if (!userExist) {
          userDetails.push({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          });
          setUserDetails(userDetails);
        }
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
            onChange={(e) => {
              setFirstName(e.target.value);
              setIsFirstNameValid(true);
            }}
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
            onChange={(e) => {
              setLastName(e.target.value);
              setIsLastNameValid(true);
            }}
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
            <div className="py-2 text-red-500">
              Please enter the vaild email
            </div>
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
            className="p-2 bg-orange-400 rounded-md text-white font-bold"
            onClick={() => onSignUpClick()}
          >
            Create
          </button>
        </div>
      </div>
      {userAlreadyExist ? (
        <div>
          <p>Please SignUp with other email. This email already exist.</p>
          <p>Or</p>
          <Link
            to="/login"
            className="p-1 bg-orange-400 rounded-md text-white font-bold"
          >
            Sign In
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default SignUp;
