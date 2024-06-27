import React, { useContext, useState } from "react";
import PreviewModel from "./PreviewModel";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { Context } from "../context/Context";
import CardUi from "./studentCard/CardUi";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate()
  const {
    cardData,
    handlePreviewStudentCard,
    showModal,
    handleDeleteStudentCard,
  } = useContext(Context);

  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Roll Number
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Father Name
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Department
            </th>
            <th scope="col" className="px-6 py-3">
              Session
            </th>
            <th scope="col" className="px-6 py-3">
              Date of Join
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {cardData.map((items) => (
            <tr
              key={items.studentId}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4">{items.studentId}</td>
              <td className="px-6 py-4">{items.rollNumber}</td>
              <td className="px-6 py-4">{items.name}</td>
              <td className="px-6 py-4">{items.fatherName}</td>
              <td className="px-6 py-4">{items.phoneNumber}</td>
              <td className="px-6 py-4">{items.department}</td>
              <td className="px-6 py-4">{items.session}</td>
              <td className="px-6 py-4">{items.joinDate}</td>
              <td className="flex items-center gap-2 px-6 py-4">
                <button
                  onClick={() => handlePreviewStudentCard(items.studentId)}
                  type="button"
                  className="font-medium mx-2 text-xl text-black"
                >
                  <GrView />
                </button>
                <button
                  onClick={() => navigate(`/update-card/${items.studentId}`)}
                  type="button"
                  className="font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteStudentCard(items.studentId)}
                  className="font-medium mx-2 text-2xl  text-red-600 "
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal ? (
        <PreviewModel title="Student College Card" component={<CardUi />} />
      ) : null}
    </div>
  );
};

export default Table;
