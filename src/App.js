import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
//import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestaurantDetails from "./components/RestaurantDetails";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import LoggedInUserContext from "./utils/loggedInUserContext";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
const App = () => {
  const [logInUser, setLogInUser] = useState({});

  return (
    <>
      <Provider store={appStore}>
        <LoggedInUserContext.Provider
          value={{ loggedInUser: logInUser, setLogInUser }}
        >
          <Header />
          <Outlet />
        </LoggedInUserContext.Provider>
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
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
