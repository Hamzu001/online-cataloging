import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const TableFine = ({ data, updateTable }) => {
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

  return (
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
                onClick={() => alert(" update soon")}
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
  );
};

export default TableFine;
