import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./Logout";
import auth from "../../appwrite/auth";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/home",
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "New Post",
      slug: "/new-post",
      active: authStatus,
    },
  ];
  return (
    <header className="p-7 z-10 w-full h-12 flex items-center  justify-between  shadow-lg ">
      <Link to="/" className="text-xl font-bold font-primary ">
        Blog
      </Link>
      <nav className="flex  ">
        <ul className="flex text-lg font-primary font-semibold ">
          {navItems.map((item) =>
            item.active ? (
              <li
                className=" mx-7 cursor-pointer  hover:text-blue-700 active:text-green-700 max-sm:mx-3"
                key={item.name}
                onClick={() => navigate(item.slug)}
              >
                {item.name}
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <Logout></Logout>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
