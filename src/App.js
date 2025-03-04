import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DoctorList from "./components/DoctorList";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import Header from "./components/Header";
import AddDoctor from "./components/AddDoctor";
import "./App.css";

const App = () => (
  <Router>
    <Header />
      <Routes>
        <Route path="/" element={<div className="page"><DoctorList /></div>} />
        <Route path="/appointment-form" element={<div className="page"><AppointmentForm /></div>} />
        <Route path="/add-doctor" element={<div className="page"><AddDoctor /></div>} />
        <Route path="/appointments" element={<div className="page"><AppointmentList /></div>} />
      </Routes>
  </Router>
);

export default App;
