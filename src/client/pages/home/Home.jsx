import React, { useContext, useEffect, useState } from "react";
import Table from "../../components/Table";
import Search from "../../components/Search";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context, ContextProvider } from "../../context/Context";

const Home = () => {
  const { cardData } = useContext(Context)
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <Search />
          <div>
            <button
              onClick={() => navigate("/create-new-card")}
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              Create New Card
            </button>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          {cardData ? (
            <Table studentCardDetails={cardData} />
          ) : (
            <div> Loading....</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
