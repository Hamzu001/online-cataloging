import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Student Fine",
      path: "/student-fine",
    },
    {
      name: "Student Cards",
      path: "/student-card",
    },
    {
      name: "About US",
      path: "/about-us",
    },
  ];
  //------ScrollTOTop
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional smooth scrolling
    });
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-20">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-2 md:py-2 md:block">
          <Link to="/">
            <div className="logo flex gap-2 ml-2 md:ml-0">
              <img
                src="/logos/college-logo.png"
                alt="Logo"
                className="md:w-[60px] w-[40px] h-[40px] md:h-[60px]"
              />
              <div className="flex gap-1 items-center">
                <div className="w-[2px] md:h-[50px] h-[40px] bg-rose-700"></div>
                <h1 className="font-semibold text-rose-800 md:text-[16px] text-[12px]">
                  Govt Municipal
                  <br /> Graduate College FSD
                </h1>
              </div>
            </div>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-rose-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-rose-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-end justify-end space-y-8 md:flex md:space-x-6 md:space-y-0  px-4 py-4">
            {navItems.map((items, i) => (
              <li
                key={i}
                className="text-black font-semibold text-[18px] hover:text-rose-800"
              >
                <NavLink
                  onClick={() => scrollToTop()}
                  to={items.path}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-rose-900 font-bold" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent  lg:border-0 hover:text-rose-800 lg:p-0`
                  }
                >
                  {items.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
