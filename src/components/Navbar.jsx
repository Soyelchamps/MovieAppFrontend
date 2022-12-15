import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logo-hbo-max.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div
          className="flex flex-wrap justify-between items-center mx-auto container
                        "
        >
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12  pb-4" alt="logo-hbo-max" />
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col p-4 mt-4  rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="nav-link block py-2 pr-4 pl-3 0 rounded md:bg-transparent pt-4 text-xl text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="nav-link block py-2 pr-4 pl-3 0 rounded md:bg-transparent pt-4 text-xl text-white"
                >
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
