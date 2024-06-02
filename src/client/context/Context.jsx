import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {

  const [cardData, setCardData] = useState("");

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
  }, []);

  return (<Context.Provider value={{ cardData }}>{children}</Context.Provider>)
}
