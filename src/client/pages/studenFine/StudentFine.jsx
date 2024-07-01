import React, { useContext, useEffect, useState } from "react";
import TableFine from "../../components/StudentFine/TableFine.jsx";
import { Context } from "../../context/Context.jsx";
import Search from "../../components/Search.jsx";
import PreviewModel from "../../components/PreviewModel.jsx";
import FineForm from "../../components/StudentFine/FineForm.jsx";
import { toast } from "react-toastify";
import ShowFineDetail from "../../components/StudentFine/ShowFineDetail.jsx";

const StudentFine = () => {
  const { getFineDetail, fineData } = useContext(Context);
  const [prewModel, setPrewModel] = useState(false);
  const [newFine, setNewFine] = useState(false);
  const [stdFine, setStdFine] = useState(null);
  const [search, setSearch] = useState("");

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
      setPrewModel(false);
      toast.success(creatFineDetail.message);
    } catch (error) {
      console.log(error);
    }
  };

  const searchStudentFine = async () => {
    if (!search?.trim()) return toast.warn("Enter student ID or RollNo.");
    // console.log(search);
    try {
      const responce = await fetch(
        `/api/v1/studentfine/get-student-fine/${search}`
      );
      const getStudentFine = await responce.json();
      if (!getStudentFine?.data) {
        return toast.warn(getStudentFine.message);
      }
      console.log(getStudentFine.data);
      setStdFine(getStudentFine.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-6">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
            <Search setValue={setSearch} searchHandler={searchStudentFine} />
            <div>
              <button
                onClick={() => setPrewModel(true)}
                className="bg-black/80 hover:bg-black transition-all text-sm px-4 py-2 rounded-lg text-white"
                type="button"
              >
                Create New Fine
              </button>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {stdFine && (
              <div className="mb-6">
                <ShowFineDetail data={stdFine} />
                <p className="border-b-2 mt-4 border-black"></p>
              </div>
            )}
            {fineData ? (
              <TableFine
                data={fineData}
                updateTable={setNewFine}
                tableRow={newFine}
              />
            ) : (
              <div>Loading......</div>
            )}
          </div>
        </div>
      </div>

      {prewModel ? (
        <PreviewModel
          title="Create New Fine"
          component={<FineForm func={createNewFine} isUpdate={null} />}
          isModelShow={setPrewModel}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default StudentFine;
