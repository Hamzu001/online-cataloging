import { Link } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-rose-900 to-rose-600">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 border-b md:border-none">
            {/* //////////////---logo---//////////////// */}
            <Link to="/" className="flex gap-2 pb-4">
              <img
                src="/college-logo.png"
                className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] border rounded-full shadow-lg"
                alt="Logo"
              />
              <div className="flex gap-1 items-center">
                <div className="w-[2px] md:h-[50px] h-[40px] bg-gray-200"></div>
                <h1 className="font-semibold text-slate-50 md:text-[16px] text-[12px]">
                  Govt Municipal
                  <br /> Graduate College FSD
                </h1>
              </div>
            </Link>
          </div>

          {/* //////////////---Footer Links---//////////////// */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="">
              <h2 className="mb-2 md:text-lg  font-semibold uppercase text-white">
                Many more
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-2 hover:underline transition-all">
                  <Link to="/fee&fine"
                  >Fee & Fine</Link>
                </li>
                <li className="mb-2 hover:underline transition-all">
                  <Link to="/exams">Exams Scheduals</Link>
                </li>

                <li className="mb-2 hover:underline transition-all">
                  <Link to="/parking"
                  >Parking</Link>
                </li>
              </ul>
            </div>

            {/* ///////////---Many_More_SEction---/////////////////////// */}


            <div className="">
              <h2 className="mb-2 md:text-lg font-semibold uppercase text-white">
                Quick Access
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-2 hover:underline transition-all">
                  <Link>Download</Link>
                </li>
                <li className="mb-2 hover:underline transition-all">
                  <Link to="/timetable">Time Table</Link>
                </li>

                <li className="mb-2 hover:underline transition-all">
                  <Link to="meritList">Merit List</Link>
                </li>
              </ul>
            </div>


            <div>
              <h2 className="mb-4 md:text-lg font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-300 font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        {/* //////////////---Socail Links---//////////////// */}

        <div className="flex sm:items-center sm:justify-between px-5 flex-wrap-reverse gap-5 md:gap-0">
          <span className="text-lg text-gray-500 sm:text-center font-semibold dark:text-gray-200">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              DaNi
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {/* ///////////--YouTube--///////// */}
            <div className="w-[30px] rounded-full bg-white/90 h-[30px] flex justify-center items-center hover:bg-black/70 duration-300 cursor-pointer">
              <AiFillYoutube className="text-2xl text-rose-600" />
            </div>
            {/* ///////////--FaceBook--///////// */}
            <div className="w-[30px] rounded-full bg-white/90 h-[30px] flex justify-center items-center hover:bg-black/70 duration-300 cursor-pointer">
              <BsFacebook className="text-[22px] text-sky-900" />
            </div>

            {/* ///////////--Twitter--///////// */}
            <div className="w-[30px] rounded-full bg-white/90 h-[30px] flex justify-center items-center hover:bg-black/70 duration-300 cursor-pointer">
              <BsTwitter className="text-[22px] text-sky-500" />
            </div>
            {/* ///////////--Instagram--///////// */}
            <div className="w-[30px] rounded-full bg-white/90 h-[30px] flex justify-center items-center hover:bg-black/70 duration-300 cursor-pointer">
              <BsInstagram className="text-[20px] text-rose-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
