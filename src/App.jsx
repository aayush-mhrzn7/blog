import Header from "./components/Header";
import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import auth from "../appwrite/auth";
import { logout, login } from "../tools/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth
      .getUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main className="max-sm:px-8 px-20 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
