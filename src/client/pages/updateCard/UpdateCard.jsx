import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../../components/studentCard/Form";
import { toast } from "react-toastify";
import { Context } from "../../context/Context";

const UpdateCard = () => {
  const { id } = useParams();
  const {searchStudentCard} = useContext(Context)
  const [searchDetail, setSearchDetail] = useState(null)

  useEffect(() => {
    async function searchStudent() {
      const result = await searchStudentCard(id);
      if (!result.data) {
        return toast.warn(result.message);
      }
      setSearchDetail(result.data[0])
    }
    searchStudent()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formDataObj = Object.fromEntries(new FormData(e.currentTarget));
    const formData = new FormData(e.currentTarget);
    // console.log(formData);
    try {
      const responce = await fetch(
        `/api/v1/student/update-student-card/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const updateStudentCard = await responce.json();
      if (!updateStudentCard?.data) return toast.warn(updateStudentCard.message);

      toast.success(updateStudentCard.message);
    } catch (error) {
      console.log(error);
    }
  };

  if (!searchDetail) return <div>Loading......</div>;

  return (
    <div>
      <Form formSubmit={handleSubmit} isUpdate={searchDetail} />
    </div>
  );
};

export default UpdateCard;
