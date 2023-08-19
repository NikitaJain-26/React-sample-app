import { createContext } from "react";

const LoggedInUserContext = createContext({
  loggedInUser: {},
});

export default LoggedInUserContext;
