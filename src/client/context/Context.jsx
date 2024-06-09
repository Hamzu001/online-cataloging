import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [cardData, setCardData] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [prevCardDetail, setPrevCardDetail] = useState("");
  const [deleteCardDetail, setDeleteCardDetail] = useState('');

  useEffect(() => {
    async function getStudentCardDetail() {
      const res = await fetch("/api/v1/student/get-student-card");
      const getCardDetail = await res.json();
      // console.log(getCardDetail.data);
      if (!getCardDetail.data) {
        return toast.warn(getCardDetail.message);
      }
      if (getCardDetail.data) {
        const revers = getCardDetail.data.reverse();
        setCardData(revers);
      }
    }
    getStudentCardDetail();
  }, [deleteCardDetail]);

  async function handlePreviewStudentCard(id) {
    const res = await fetch(`/api/v1/student/search-student-card/${id}`);
    const getCardDetail = await res.json();
    if (!getCardDetail.data) {
      return toast.warn(getCardDetail.message);
    }
    if (getCardDetail.data) {
      setPrevCardDetail(getCardDetail.data);
      setShowModal(true);
    }
  }

  async function handleDeleteStudentCard(id) {
    // console.log(id);
    const res = await fetch(`/api/v1/student/delete-student-card/${id}`,{
      method:'DELETE'
    });
    const deleteCardDetail = await res.json();
    if (!deleteCardDetail.data) {
      return toast.warn(deleteCardDetail.message);
    }
    if (deleteCardDetail.data) {
      setDeleteCardDetail(deleteCardDetail.data)
      toast.success(id + " " + deleteCardDetail.message);
    }
  }

  return (
    <Context.Provider
      value={{
        cardData,
        handlePreviewStudentCard,
        handleDeleteStudentCard,
        showModal,
        prevCardDetail,
        setShowModal,
        deleteCardDetail,
        setDeleteCardDetail,
      }}
    >
      {children}
    </Context.Provider>
  );
}
