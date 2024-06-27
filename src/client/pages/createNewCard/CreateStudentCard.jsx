import React from "react";
import Form from "../../components/studentCard/Form";
import { toast } from "react-toastify";

const CreateStudentCard = () => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const responce = await fetch("/api/v1/student/create-student-card", {
        method: "POST",
        body: formData,
      });

      const creatStudentCard = await responce.json();
      // console.log(creatStudentCard.data)
      if (!creatStudentCard) {
        return toast.info("Server does not responce");
      }

      if (!creatStudentCard?.data) {
        return toast.warn(creatStudentCard.message);
      }

      if (creatStudentCard?.data) {
        toast.success(creatStudentCard.message);
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form formSubmit={handleSubmit} isUpdate={null} />
    </div>
  );
};

export default CreateStudentCard;
