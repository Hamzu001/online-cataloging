import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/Header/Navbar.jsx";
import Oops from "./pages/notFound/Oops.jsx";
import CreateStudentCard from "./pages/createNewCard/CreateStudentCard.jsx";
import StudentCards from "./pages/studentcards/StudentCards.jsx";
import StudentFine from "./pages/studenFine/StudentFine.jsx"
import UpdateCard from "./pages/updateCard/UpdateCard.jsx";

const AppLayout = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick
        theme="light"
      />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-new-card" element={<CreateStudentCard />} />
        <Route path="/update-card/:id" element={<UpdateCard />} />
        <Route path="/student-card" element={<StudentCards />} />
        <Route path="/student-fine" element={<StudentFine />} />
        <Route path="*" element={<Oops />} />
      </Routes>
    </>
  );
};

export default AppLayout;
