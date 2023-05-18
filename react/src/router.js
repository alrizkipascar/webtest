import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Barang from "./Pages/Barang";
import ErrorPage from "./Pages/ErrorPage";
import DefaultLayout from "./Layouts/DefaultLayout";
import GuestLayout from "./Layouts/GuestLayout";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        // element: <Navigate to="/barang" />,
      },
      {
        path: "/barang",
        element: <Barang />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
