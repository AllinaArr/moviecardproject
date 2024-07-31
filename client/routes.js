import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import TvShows from "./src/Pages/TvShows";
import Movies from "./src/Pages/Movies";
import Login from "./src/Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { path: "/home", element: <Home /> },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/tvshows",
    element: <TvShows />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
]);
