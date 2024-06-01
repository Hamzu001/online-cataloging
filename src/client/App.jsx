import React from "react";
import Navbar from "./components/Header/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CardUi from "./components/studentCard/CardUi.jsx";
import Form from "./components/studentCard/Form.jsx";

export function App() {
  return (
    <>
      <Navbar />
      <CardUi/>
      <Form/>
      <Footer/>
    </>
  );
}
