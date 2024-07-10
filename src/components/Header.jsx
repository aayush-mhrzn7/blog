import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./Logout";
import { TfiAlignRight } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
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
    <div>
      <header className="flex z-50 bg-white justify-between py-2 px-10 text-xl h-14 shadow-md items-center ">
        <Link to="/" className="font-primary font-bold">
          Blog
        </Link>
        <nav>
          <ul
            className={` items-end  ease-in-out  ${
              open
                ? " flex-col mt-[190px] z-50  bg-black text-white p-3 rounded-md shadow-md "
                : "flex"
            }`}
          >
            <li
              className="  hidden cursor-pointer max-sm:flex justify-end  ease-in-out"
              onClick={() => setOpen(!open)}
            >
              {open ? <TfiClose /> : <TfiAlignRight />}
            </li>

            {navItems.map((item) =>
              item.active ? (
                <li
                  key={item.name}
                  onClick={() => navigate(`${item.slug}`)}
                  className={`mx-5 font-primary z-50  cursor-pointer  hover:underline underline-offset-8 font-medium transition-transform ${
                    open ? "max-sm:block p-2 mr-8   " : "max-sm:hidden"
                  }`}
                >
                  {item.name}
                </li>
              ) : null
            )}
            {open && (
              <li className="max-sm:block mx-7 hover:underline">
                <Logout />
              </li>
            )}

            <li>
              {status ? (
                <Logout className=" max-sm:hidden font-semibold" />
              ) : null}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
