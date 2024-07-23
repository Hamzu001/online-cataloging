import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../../context/Context";

const SearchForm = ({setLoading, setInputSearch}) => {
  const { searchBooksInLibrary } = useContext(Context);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchData, setSearchData] = useState({
    searchBy: "ALL-CATEGORIES",
    searchInput: "",
  });
  const [inputFieldIsEmply, setInputFieldIsEmply] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
      setInputFieldIsEmply(false);
    }
  };

  const selectSearch = [
    {
      name: "ALL-CATEGORIES",
    },
    {
      name: "TITLE",
    },
    {
      name: "AUTHOR",
    },
    {
      name: "KEYWORDS",
    },
  ];

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectItemsHandle = (items) => {
    setSearchData({ ...searchData, searchBy: items });
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearch =async () => {
    if (searchData.searchInput.trim() === "") {
      return setInputFieldIsEmply(true);
    }
    if (searchData.searchInput.trim().length < 3) {
      return toast.info("Search valid data")
    }
    setLoading(true)
    setInputSearch(searchData.searchInput)
    await searchBooksInLibrary(searchData)
    setLoading(false)
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-4">
      <div className="flex" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-200 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          {searchData.searchBy}
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          className={`z-10  ${
            isDropdownOpen ? "" : "hidden"
          } absolute mt-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700`}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {selectSearch.map((items, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => selectItemsHandle(items.name)}
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {items.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* ////////////////// */}
        <div className="relative w-full">
          <input
            type="search"
            onChange={(e) =>
              setSearchData({ ...searchData, searchInput: e.target.value })
            }
            className={`block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2  dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
              inputFieldIsEmply
                ? "placeholder-red-500 border border-red-500"
                : "border border-gray-300"
            } dark:focus:border-blue-500`}
            placeholder="Search by title, author, keywords"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="absolute top-0 end-0 p-2.5 px-6 text-sm font-medium h-full text-white bg-black rounded-e-lg border border-blue-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
