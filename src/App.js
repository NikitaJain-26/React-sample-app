import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
//import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestaurantDetails from "./components/RestaurantDetails";
import { UserContext } from "./utils/UserContext";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/signUp";
import LoggedInUserContext from "./utils/loggedInUserContext";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
const App = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [logInUser, setLogInUser] = useState({});
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ userData: userDetails, setUserDetails }}>
          <LoggedInUserContext.Provider
            value={{ loggedInUser: logInUser, setLogInUser }}
          >
            <Header />
            <Outlet />
          </LoggedInUserContext.Provider>
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const About = lazy(() => import("./components/About"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RestaurantList />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantDetails />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
