import React, { useContext, useEffect, useState } from "react";
import TableFine from "../../components/StudentFine/TableFine.jsx";
import { Context } from "../../context/Context.jsx";
import Search from "../../components/Search.jsx";
import PreviewModel from "../../components/PreviewModel.jsx";
import FineForm from "../../components/StudentFine/FineForm.jsx";
import { toast } from "react-toastify";

const StudentFine = () => {
  const { getFineDetail, fineData, setShowModal, showModal } = useContext(Context);
  const [newFine, setNewFine] = useState(false);

  useEffect(() => {
    getFineDetail();
  }, [newFine]);

  const createNewFine = async (e) => {
    e.preventDefault();
    const values = e.currentTarget;
    const { fineTitle, finePrice } = Object.fromEntries(new FormData(values));

    if ([fineTitle, finePrice].some((items) => items.trim() == "")) {
      return toast.warn("All Fields are required");
    }

    try {
      const responce = await fetch("/api/v1/finedetail/create-fine-detail", {
        method: "POST",
        body: JSON.stringify({ fineTitle, finePrice }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const creatFineDetail = await responce.json();
      if (!creatFineDetail?.data) {
        return toast.warn(creatFineDetail.message);
      }

      values.reset();
      setNewFine(!newFine);
      setShowModal(false);
      toast.success(creatFineDetail.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-6">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
            <Search />
            <div>
              <button
                onClick={() => setShowModal(true)}
                className="bg-black/80 hover:bg-black transition-all text-sm px-4 py-2 rounded-lg text-white"
                type="button"
              >
                Create New Fine
              </button>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {fineData ? (
              <TableFine data={fineData} updateTable={setNewFine} />
            ) : (
              <div>Loading......</div>
            )}
          </div>
        </div>
      </div>

      {showModal ? (
        <PreviewModel
          title="Create New Fine"
          component={<FineForm func={createNewFine} />}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default StudentFine;
