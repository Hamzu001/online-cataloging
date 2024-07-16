import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ShowFineDetail = ({ data }) => {
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-4 mb-2">
        <span className="text-black font-bold font-serif">
          Search Results.....{"  "}{" "}
          <button
            // onClick={() => setSearchData(null)}
            className="px-2  bg-black/80 text-sm rounded-lg text-white hover:bg-black transition-all cursor-pointer"
          >
            Reset
          </button>
        </span>
        <p className="text-black font-bold font-serif">
          StudentID :{" "}
          <span className="font-mono font-light">{data[0]?.studentId}</span>{" "}
        </p>
        <p className="text-black font-bold font-serif">
          Roll No:{" "}
          <span className="font-mono font-light">{data[0]?.rollNumber}</span>{" "}
        </p>
        <p className="text-black font-bold font-serif">
          Total FINE/WARN:{" "}
          <span className="font-mono font-light">{data.length}</span>{" "}
        </p>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Fine Title
            </th>
            <th scope="col" className="px-6 py-3">
              Fine Rs.
            </th>
            <th scope="col" className="px-6 py-3">
              State
            </th>
            <th scope="col" className="px-6 py-3">
              Fine Reason
            </th>
            <th scope="col" className="px-6 py-3">
              Teacher
            </th>
            <th scope="col" className="px-6 py-3">
              Date
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
              <td className="px-6 py-4">{items.fineTitle}</td>
              <td className="px-6 py-4">{items.finePrice}</td>
              <td className="px-6 py-4">{items.fineState}</td>
              <td className="px-6 py-4">{items.reason}</td>
              <td className="px-6 py-4">{items.teacher}</td>
              <td className="px-6 py-4">{items.date}</td>
              <td className="flex justify-center items-center gap-2 px-6 py-4">
                <button
                  //   onClick={() => filterFineDetail(items.id)}
                  type="button"
                  className="font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  //   onClick={() => deleteFineDetail(items.id)}
                  className="font-medium mx-2 text-2xl  text-red-600 "
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowFineDetail;
