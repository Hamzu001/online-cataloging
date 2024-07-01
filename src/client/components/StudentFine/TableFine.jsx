import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import PreviewModel from "../PreviewModel";
import FineForm from "./FineForm";

const TableFine = ({ data, updateTable, tableRow }) => {
  const [isUpdate, setIsUpdate] = useState(null)
  const [isUpdateModel, setIsUpdateModel] = useState(null)
  const deleteFineDetail = async (id) => {
    try {
      const res = await fetch(`/api/v1/finedetail/delete-fine-detail/${id}`, {
        method: "DELETE",
      });
      const deleteFineDetail = await res.json();
      if (!deleteFineDetail.data) {
        return toast.warn(deleteFineDetail.message);
      }
      updateTable(id);
      toast.success(id + " " + deleteFineDetail.message);
    } catch (error) {
      toast.warn("server error");
    }
  };

  const filterFineDetail = async (id) => {
    const filterData = await data?.filter((items)=> (items.id==id))
    setIsUpdateModel(true)
    setIsUpdate(filterData[0])
    // console.log(filterData[0]);
  }

  const updateFineDetail = async (e) => {
    e.preventDefault();
    const values = e.currentTarget;
    const { fineTitle, finePrice } = Object.fromEntries(new FormData(values));

    if ([fineTitle, finePrice].some((items) => items.trim() == "")) {
      return toast.warn("All Fields are required");
    }

    try {
      const res = await fetch(`/api/v1/finedetail/update-fine-detail/${isUpdate.id}`, {
        method: "PUT",
        body: JSON.stringify({ fineTitle, finePrice }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const updateDetail = await res.json();
      if (!updateDetail.data) {
        return toast.warn(deleteFineDetail.message);
      }
      updateTable(!tableRow);
      toast.success(isUpdate.id + " " + updateDetail.message);
      setIsUpdateModel(false)
    } catch (error) {
      toast.warn("server error");
    }
  }

  return (
    <>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Id
          </th>
          <th scope="col" className="px-6 py-3">
            Fine Title
          </th>
          <th scope="col" className="px-6 py-3">
            Fine Rs.
          </th>
          <th
            scope="col"
            className="px-6 flex justify-center items-center py-3"
          >
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {data.map((items) => (
          <tr
            key={items.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="w-4 p-4">{items.id}</td>
            <td className="px-6 py-4">{items.fineTitle}</td>
            <td className="px-6 py-4">{items.finePrice}</td>
            <td className="flex justify-center items-center gap-2 px-6 py-4">
              <button
                onClick={() => filterFineDetail(items.id)}
                type="button"
                className="font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline"
              >
                <FaEdit />
              </button>
              <button
                type="button"
                onClick={() => deleteFineDetail(items.id)}
                className="font-medium mx-2 text-2xl  text-red-600 "
              >
                <MdDelete />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {isUpdateModel ? (
      <PreviewModel
        title="Update Fine Detail"
        component={isUpdate?<FineForm func={updateFineDetail} isUpdate={isUpdate} />: <div>loading...</div>}
        isModelShow={setIsUpdateModel}
      />
    ) : (
      ""
    )}
  </>)};

export default TableFine;
