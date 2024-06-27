import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../../components/studentCard/Form";
import { toast } from "react-toastify";

const UpdateCard = () => {
  const { id } = useParams();
  const [cardDetail, setcardDetail] = useState(null);

  useEffect(() => {
    async function searchStudentCard(id) {
      const responce = await fetch(`/api/v1/student/search-student-card/${id}`);
      const result = await responce.json();
      //   console.log(result.data[0]);
      setcardDetail(result.data[0]);
    }
    searchStudentCard(id);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formDataObj = Object.fromEntries(new FormData(e.currentTarget));
    const formDataObj = new FormData(e.currentTarget);
    console.log(formDataObj);

    try {
      const responce = await fetch(
        `/api/v1/student/update-student-card/${id}`,
        {
          method: "PUT",
          body: formDataObj,
        }
      );

      const updateStudentCard = await responce.json();
      if (!updateStudentCard?.data) return toast.warn(updateStudentCard.message);
      
      toast.success(updateStudentCard.message);
    } catch (error) {
      console.log(error);
    }
  };

  if (!cardDetail) return <div>Loading......</div>;

  return (
    <div>
      <Form formSubmit={handleSubmit} isUpdate={cardDetail} />
    </div>
  );
};

export default UpdateCard;
