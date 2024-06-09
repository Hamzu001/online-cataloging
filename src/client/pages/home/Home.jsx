import React, { useContext, useEffect, useState } from "react";
import Table from "../../components/Table";
import Search from "../../components/Search";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../context/Context";

const Home = () => {
  const { cardData } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <Search />
          <div>
            <button
              onClick={() => navigate("/create-new-card")}
              className="bg-black/80 hover:bg-black transition-all text-sm px-4 py-2 rounded-lg text-white"
              type="button"
            >
              Create New Card
            </button>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          {cardData ? <Table /> : <div> Loading....</div>}
        </div>
      </div>
    </div>
  );
};

export default Home;
