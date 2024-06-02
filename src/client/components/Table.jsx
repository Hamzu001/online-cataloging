import React, { useState } from "react";
import PreviewModel from "./PreviewModel";

const Table = ({ studentCardDetails }) => {
  const [showModal, setShowModal] = useState(false);
  const [prevCardDetail, setPrevCardDetail] = useState('')

  const handlePreview = async (id) => {
    const res = await fetch(`/api/v1/student/search-student-card/${id}`);
    const getCardDetail = await res.json();
    if (getCardDetail) {
      setPrevCardDetail(getCardDetail.data)
      setShowModal(true)
    }
  };

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
          {studentCardDetails.map((items) => (
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
              <td className="flex items-center px-6 py-4">
                <button
                  onClick={()=> handlePreview(items.studentId)}
                  type="button"
                  className="font-medium mx-2 border border-black p-1 rounded-lg text-black"
                >
                  Preview
                </button>
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <button
                  onClick={() => console.log(items.studentId)}
                  className="font-medium mx-2 border border-black p-1 rounded-lg text-black"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal ? <PreviewModel cardDetail={prevCardDetail} isModal={setShowModal} /> : null}
    </div>
  );
};

export default Table;
