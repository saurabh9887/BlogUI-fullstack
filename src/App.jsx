import React from "react";
import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SinglePost from "./Components/SinglePost/SinglePost";

function App() {
  const user = false;
  const Layout = () => {
    return (
      <>
        <TopBar />
        <Outlet />
      </>
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
        {
          path: "/write",
          element: user ? <Write /> : <Register />,
        },
        {
          path: "/settings",
          element: user ? <Settings /> : <Register />,
        },
        {
          path: "/login",
          element: user ? <Home /> : <Login />,
        },
        {
          path: "/register",
          element: user ? <Home /> : <Register />,
        },
        {
          path: "/post/:postId",
          element: <Single />,
        },
        {
          path: "/singlePost",
          element: <SinglePost />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
