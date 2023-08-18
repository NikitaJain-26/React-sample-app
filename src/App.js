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
import { CartContext } from "./utils/cartContext";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/signUp";
const App = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [cartDetail, setCartDetails] = useState({
    restaurantName: "",
    resId: "",
    items: [],
  });
  return (
    <>
      <UserContext.Provider
        value={{ loggedInUser: userDetails, setUserDetails }}
      >
        <Header />
        <CartContext.Provider
          value={{ cartDetails: cartDetail, setCartDetails }}
        >
          <Outlet />
        </CartContext.Provider>
      </UserContext.Provider>
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
