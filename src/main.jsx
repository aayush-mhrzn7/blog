import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "../tools/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Verify from "./pages/Verify.jsx";
import Forgot from "./pages/Forgot.jsx";
import Reset from "./pages/Reset.jsx";
import Error from "./pages/Error.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import AllPost from "./posts/AllPost.jsx";
import PostForm from "./posts/PostForm.jsx";
import Post from "./posts/Post.jsx";
import EditPost from "./posts/EditPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout>
            <Home />
          </AuthLayout>
        ),
      },

      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/verify",
        element: (
          <AuthLayout authentication={false}>
            <Verify />
          </AuthLayout>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <AuthLayout authentication={false}>
            <Forgot />
          </AuthLayout>
        ),
      },
      {
        path: "/reset",
        element: (
          <AuthLayout authentication={false}>
            <Reset />
          </AuthLayout>
        ),
      },

      {
        path: "*",
        element: (
          <AuthLayout>
            <Error />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout>
            <AllPost />
          </AuthLayout>
        ),
      },
      {
        path: "/new-post",
        element: (
          <AuthLayout>
            <PostForm />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: (
          <AuthLayout>
            <Post />
          </AuthLayout>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
