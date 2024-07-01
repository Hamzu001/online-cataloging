import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import Search from "../../components/Search";
import Table from "../../components/Table";
import { toast } from "react-toastify";

const Home = () => {
  const { searchStudentCard, cardData } = useContext(Context);
  const [searchData, setSearchData] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchHandler = async () => {
    if (!search?.trim()) return toast.warn("Enter student ID or RollNo.");
    const result = await searchStudentCard(search);
    if (!result.data) {
      return toast.warn(result.message);
    }
    setSearchData(result.data);
  };

  return (
    <div className="p-6">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <Search setValue={setSearch} searchHandler={searchHandler} />
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
          {searchData && (
            <div className="mb-6">
              <dir className="flex flex-row">
                <p className="p-2">Search Result........</p>
                <button
                  onClick={() => setSearchData(null)}
                  className="px-2  bg-black/80 text-sm rounded-lg text-white hover:bg-black transition-all cursor-pointer"
                >
                  Reset
                </button>
              </dir>
              <Table cardData={searchData} />
              <p className="border-b-2 mt-4 border-black"></p>
            </div>
          )}
          {cardData ? <Table cardData={cardData} /> : <div> Loading....</div>}
        </div>
      </div>
    </div>
  );
};

export default Home;
