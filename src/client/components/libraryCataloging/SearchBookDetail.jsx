import React, { useState } from "react";

const ITEMS_PER_PAGE = 10;
const PAGE_NUMBER_LIMIT = 4; // Number of page links to show at once

const SearchBookDetail = ({ inputSearch, libraryBooksData }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(libraryBooksData.length / ITEMS_PER_PAGE);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleFirst = () => {
    setCurrentPage(1);
  };

  const handleLast = () => {
    setCurrentPage(totalPages);
  };

  const currentItems = libraryBooksData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Calculate page numbers to show
  const startPage = Math.max(
    1,
    currentPage - Math.floor(PAGE_NUMBER_LIMIT / 2)
  );
  const endPage = Math.min(totalPages, startPage + PAGE_NUMBER_LIMIT - 1);
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const highlightText = (text, highlight) => {
    if (!highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      <div className="bg-gray-200 p-2 mb-2 border rounded-xl">
        <p className="text-xl text-gray-500">
          Your search returned "{libraryBooksData.length}" results. You searched
          "{inputSearch}"
        </p>
      </div>
      {currentItems?.map((items, index) => (
        <div
          key={index}
          className="bg-gray-50 p-4 mb-4 rounded-lg shadow-md mr-4"
        >
          <div className="flex flex-row gap-6">
            <div className="p-2">
              <span className="bg-gray-50 px-2 border rounded-lg">
                {index + 1}
              </span>
            </div>
            <div>
              <p className="text-xl text-gray-700 font-medium">
                {highlightText(items.TITLE, inputSearch)}
                {/* {items.TITLE.toLowerCase().match(inputSearch.toLowerCase())} */}
              </p>
              <p className="mb-1">
                by{" "}
                <span className="text-rose-800">
                  {highlightText(items.AUTHOR, inputSearch)}
                </span>
              </p>
              <p className="mb-1 mt-3 ">
                <span className="font-semibold text-gray-600">
                  Material type:
                </span>
                <span className="mx-2 text-gray-500">
                  Text; Format: print ; Literary form: Not fiction
                </span>{" "}
              </p>
              <p className="mb-1 ">
                <span className="font-semibold text-gray-600">Keyword:</span>
                <span className="mx-2 text-gray-500">
                  {highlightText(items.keywords, inputSearch)}
                </span>{" "}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-gray-600">
                  Availability:
                </span>
                <span className="mx-3 text-rose-800">
                  Govt. Municipal Graduate College FSD Library
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center mt-2 mb-4">
        <button
          onClick={handleFirst}
          disabled={currentPage === 1}
          className="px-2 py-1 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          First
        </button>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-2 py-1 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={`px-2 py-1 mx-1 rounded ${
              page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-2 py-1 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
        <button
          onClick={handleLast}
          disabled={currentPage === totalPages}
          className="px-2 py-1 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default SearchBookDetail;
