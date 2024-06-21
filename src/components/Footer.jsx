import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-10 mt-32 z-10 w-full h-14  ">
      <Link to="/" className="text-xl font-semibold  ">
        <li className="text-center list-none font-primary ">
          {" "}
          Blog by Aayush Maharjan.
        </li>
      </Link>

      <nav className="flex  "></nav>
    </footer>
  );
}

export default Footer;
