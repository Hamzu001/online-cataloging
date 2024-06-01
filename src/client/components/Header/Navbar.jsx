import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri"


export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  /////////--ScrollTOTop
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling
    });
  };

  const navclick = () => {
    scrollToTop();
    setNavbar(false);

  };
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-20">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 md:py-2 md:block">
            <Link to="/">
              <div className="logo flex gap-2 ml-2 md:ml-0" >
                <img
                  src="/college-logo.png"
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
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul
              className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 
            md:border  md:shadow-md  px-4   
             py-4 rounded-full md:ml-[-70px]"
            >
              <li
                className="text-black font-semibold text-[18px]
               hover:text-rose-800"
              >
                <NavLink
                  onClick={navclick}
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-rose-900 font-bold" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent  lg:border-0 hover:text-rose-800 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-black font-[600] text-[18px] hover:text-rose-800">
                <NavLink
                  to="/department"
                  onClick={navclick}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-rose-900 font-bold" : "text-gray-700"
                    } border-b 
                                        border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                        lg:border-0 hover:text-rose-800 lg:p-0`
                  }
                >
                  Department
                </NavLink>
              </li>
              <li className="text-black font-semibold text-[18px] hover:text-rose-800">
                <NavLink
                  onClick={navclick}
                  to="/gallery"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-rose-900 font-bold" : "text-gray-700"
                    } border-b 
                                        border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                        lg:border-0 hover:text-rose-800 lg:p-0`
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li className="text-black font-semibold text-[18px] hover:text-rose-800">
                <NavLink
                  onClick={navclick}
                  to="/about"
                  className={({ isActive }) =>
                    `block pr-4 pl-3 duration-200 ${isActive ? "text-rose-900 font-bold" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-rose-800 lg:p-0 relative group`
                  }
                >

                  {/* ////////////---DropDown Menu---///////////// */}

                  <Link to="/about" className="flex items-center"> <RiArrowDropDownLine className="text-3xl" />  About us </Link>
                  <div className="absolute hidden space-y-2 bg-white text-[15px] text-gray-700 
                    group-hover:block w-[180px] text-center rounded-lg overflow-hidden font-normal ">
                    <Link to="rules" className="block px-4 py-2 hover:bg-gray-200 hover:underline transition-all">
                      Rules & Regulation
                    </Link>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-200 hover:underline transition-all">
                      Glimpse of College
                    </Link>
                    <Link to="/team" className="block px-4 py-2 pb-4 hover:bg-gray-200 hover:underline  transition-all">
                      Development Team
                    </Link>
                  </div>


                </NavLink>
                {/* //////////////////////////////////////// */}
              </li>
              <li className="text-black font-semibold text-[18px] hover:text-rose-800 border-b-2 py-2 md:border-none">
                <NavLink
                  to="/contact"
                  onClick={navclick}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-rose-900 font-bold" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                    lg:border-0 hover:text-rose-800 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* ///////////////////////---Mobile-View-Button----//////////////////////////////// */}
            <div className=" lg:hidden md:flex pt-5">
              <button
                className="special-button"
              >
                <span
                  className="relative px-4 py-2 transition-all ease-in duration-75
               rounded-md group-hover:bg-opacity-0"
                >
                  Get Card
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ///////////////////////---Computer-View-Button----//////////////////////////////// */}

        <div className="hidden space-x-2 md:flex ">
          <button
            className="relative inline-flex items-center justify-center 
          p-0.5 overflow-hidden text-[16px] font-medium text-gray-100 
          rounded-lg group bg-gradient-to-br from-rose-800 to-rose-500 
          group-hover:from-rose-500 group-hover:to-orange-400 transition-all
          hover:text-slate-100 dark:text-black focus:ring-1 focus:outline-none 
           dark:focus:ring-slate-800"
          >
            <span
              className="relative px-4 py-2 transition-all ease-in duration-75
              dark:bg-gray-100 rounded-md group-hover:bg-opacity-0"
            >
              <Link to="/register">Get Card</Link>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
