import { UserContext } from "../utils/UserContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isFirstNameInValid, setIsFirstNameInValid] = useState(false);
  const [isLastNameyInValid, setIsLastNameInValid] = useState(false);
  const [isEmailInValid, setIsEmailInValid] = useState(false);
  const [isPassWordInValid, setIsPassWordInValid] = useState(false);
  const { userData, setUserDetails } = useContext(UserContext);
  const [userAlreadyExist, setUserAlreadyExist] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const onSignUpClick = () => {
    if (
      firstName != "" &&
      lastName != "" &&
      email != "" &&
      password != "" &&
      !isFirstNameInValid &&
      !isLastNameyInValid &&
      !isEmailInValid &&
      !isPassWordInValid
    ) {
      let userDetails = userData;
      if (userDetails.length == 0) {
        userDetails.push({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });
        setUserDetails(userDetails);
        setAccountCreated(true);
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
          setAccountCreated(true);
        }
      }
    } else {
      if (firstName == "") setIsFirstNameInValid(true);
      if (lastName == "") setIsLastNameInValid(true);
      if (email == "") setIsPassWordInValid(true);
      if (password == "") setIsEmailInValid(true);
    }
  };

  const onHandleChange = (e) => {
    if (e.target.id == "firstName") {
      setIsFirstNameInValid(false);
      setFirstName(e.target.value);
    }
    if (e.target.id == "lastName") {
      setIsLastNameInValid(false);
      setLastName(e.target.value);
    }
    if (e.target.id == "email") {
      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
      ) {
        setIsEmailInValid(true);
      } else {
        setIsEmailInValid(false);
      }
      setEmail(e.target.value);
    }
    if (e.target.id == "password") {
      if (e.target.value.length < 8) {
        setIsPassWordInValid(true);
      } else {
        setIsPassWordInValid(false);
      }
      setPassword(e.target.value);
    }
  };
  return (
    <>
      {userAlreadyExist ? (
        <div className="w-3/12 mx-auto text-center">
          <p className="p-4">
            Please SignUp with other email. This email already exist.
          </p>
          <p className="p-4">
            Please SignUp with other email. This email already exist.
          </p>
          <p className="p-4">Or</p>
          <Link
            to="/login"
            className="p-1 bg-orange-400 rounded-md text-white font-bold"
          >
            Sign In
          </Link>
        </div>
      ) : accountCreated ? (
        <div className="w-3/12 mx-auto text-center">
          <p className="p-4">Account created successfully please sign in</p>
          <Link
            to="/login"
            className="p-1 bg-orange-400 rounded-md text-white font-bold"
          >
            Sign In
          </Link>
        </div>
      ) : (
        <div className="w-3/12 mx-auto">
          <div className="mx-4">
            <div className="py-2">
              <label for="firstName" className="font-bold ">
                First Name:
              </label>
            </div>
            <input
              id="firstName"
              type="text"
              className="bg-gray-200 h-8 w-60 rounded-sm p-2"
              value={firstName}
              required
              onChange={(e) => {
                onHandleChange(e);
              }}
            />
            {!isFirstNameInValid ? null : (
              <div className="py-2 text-red-500">Please enter first name</div>
            )}
          </div>
          <div className="mx-4">
            <div className="py-2">
              <label for="lastName" className="font-bold ">
                Last Name :
              </label>
            </div>
            <input
              id="lastName"
              type="text"
              className="bg-gray-200 h-8 w-60 rounded-sm p-2"
              value={lastName}
              required
              onChange={(e) => {
                onHandleChange(e);
              }}
            />
            {!isLastNameyInValid ? null : (
              <div className="py-2 text-red-500">Please enter last name</div>
            )}
          </div>
          <div className="mx-4 mb-0">
            <div className="py-2">
              <label for="email" className="font-bold ">
                Email:
              </label>
            </div>
            <input
              id="email"
              type="email"
              className="bg-gray-200 h-8 w-60 rounded-sm p-2"
              value={email}
              required
              onChange={(e) => onHandleChange(e)}
            />
            {!isEmailInValid ? null : (
              <div className="py-2 text-red-500">
                Please enter the vaild email
              </div>
            )}
          </div>
          <div className="mx-4">
            <div className="py-2">
              <label for="password" className="font-bold">
                Create Password:
              </label>
            </div>
            <input
              id="password"
              type="password"
              className="bg-gray-200 h-8 w-60 rounded-sm p-2"
              value={password}
              required
              minLength={8}
              onChange={(e) => onHandleChange(e)}
            />
            {!isPassWordInValid ? null : (
              <div className="py-2 text-red-500">
                Please enter the password.
              </div>
            )}
          </div>
          <div className="mx-28 my-2">
            <button
              className="p-2 bg-orange-400 rounded-md text-white font-bold"
              onClick={() => onSignUpClick()}
            >
              Create
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
