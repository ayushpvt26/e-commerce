import React from "react";
import Home from "./mycomponents/Home/Home";
import Header from "./mycomponents/Header/Header";
import Footer from "./mycomponents/Footer/Footer";
import "./App.css";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const Layout = () => {
    return (
      <div className="LayoutContainer">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      // element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
