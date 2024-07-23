import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [cardData, setCardData] = useState(null);
  const [fineData, setFineData] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [prevCardDetail, setPrevCardDetail] = useState("");
  const [getDetailAndUpdateTable, setGetDetailAndUpdateTable] = useState(false);
  const [libraryBookDetail, setLibraryBookDetail] = useState(null);

  async function getStudentCardDetail() {
    const res = await fetch("/api/v1/student/get-student-card");
    const getCardDetail = await res.json();
    // console.log(getCardDetail.data);
    if (!getCardDetail.data) {
      return toast.warn(getCardDetail.message);
    }
    if (getCardDetail.data) {
      const reversData = getCardDetail.data.reverse();
      setCardData(reversData);
    }
  }

  async function searchStudentCard(id) {
    const responce = await fetch(`/api/v1/student/search-student-card/${id}`);
    const result = await responce.json();
    //   console.log(result.data[0]);
    return result;
  }

  async function handleDeleteStudentCard(id) {
    const res = await fetch(`/api/v1/student/delete-student-card/${id}`, {
      method: "DELETE",
    });
    const deleteCardDetail = await res.json();
    if (!deleteCardDetail.data) {
      return toast.warn(deleteCardDetail.message);
    }
    if (deleteCardDetail.data) {
      toast.success(id + " " + deleteCardDetail.message);
    }
  }

  async function getFineDetail() {
    const res = await fetch("/api/v1/finedetail/get-fine-detail");
    const getFineDetail = await res.json();
    if (!getFineDetail.data) {
      return toast.warn(getFineDetail.message);
    }
    if (getFineDetail.data) {
      const reversData = getFineDetail.data.reverse();
      // console.log(reversData);
      setFineData(reversData);
    }
  }

  async function searchBooksInLibrary(searchBook) {
    const res = await fetch("/api/v1/books/search-library-books", {
      method: "POST",
      body: JSON.stringify(searchBook),
      headers:{
        "Content-Type":"application/json"
      }
    });
    const bookDetail = await res.json();
    if (!bookDetail.data) {
      return toast.warn(bookDetail.message);
    }
    // console.log(bookDetail.data);
    setLibraryBookDetail(bookDetail.data);
  }

  useEffect(() => {
    getStudentCardDetail();
  }, [getDetailAndUpdateTable]);

  return (
    <Context.Provider
      value={{
        cardData,
        setCardData,
        handleDeleteStudentCard,
        showModal,
        prevCardDetail,
        setPrevCardDetail,
        setShowModal,
        setGetDetailAndUpdateTable,
        getDetailAndUpdateTable,
        fineData,
        getFineDetail,
        searchStudentCard,
        searchBooksInLibrary,
        libraryBookDetail
      }}
    >
      {children}
    </Context.Provider>
  );
}
