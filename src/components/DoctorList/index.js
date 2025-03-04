import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";

const DoctorsList = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getDoctors = async () => {
            try {
                const response = await axios.get("https://babysteps-backend-assigment.onrender.com/doctors");
                if (JSON.stringify(doctors) !== JSON.stringify(response.data)) {
                    setDoctors(response.data);
                }
            } catch (error) {
                console.error("Error fetching doctors:", error);
            } finally {
                setIsLoading(false);
            }
        };
        getDoctors();
    }, [doctors]); 

    const handleBookAppointment = (doctor) => {
        setSelectedDoctor(doctor);
        setShowCalendar(true);
    };

    const handleDateChange = (selectedDate) => {
        const adjustedDate = new Date(selectedDate);
        adjustedDate.setUTCHours(0, 0, 0, 0);

        setDate(adjustedDate);
        setShowCalendar(false);
        navigate("/appointment-form", {
            state: { doctor: selectedDoctor, date: adjustedDate.toISOString().split("T")[0] }
        });
    };

    return (
        <div className="appointment-container">
            <h2>Doctors List</h2>

            {isLoading ? (
                <div className="spinner">Loading doctors...</div>
            ) : doctors.length === 0 ? (
                <p className="no-appointments">No Doctors available.</p>
            ) : (
                <ul className="appointment-list">
                    {doctors.map((each) => (
                        <li key={each._id} className="appointment-card">
                            <p><strong>Doctor Name:</strong> {each.name}</p>
                            <p><strong>Specialty:</strong> {each.specialty}</p>
                            <p><strong>Experience:</strong> {each.experience} years</p>
                            <p><strong>Contact:</strong> {each.contact}</p>
                            <button className="book-btn" onClick={() => handleBookAppointment(each)}>
                                Book Appointment
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {showCalendar && (
                <div className="calendar-popup">
                    <h3>Select Appointment Date for {selectedDoctor?.name}</h3>
                    <Calendar onChange={handleDateChange} value={date} minDate={new Date()} />
                    <button className="close-btn" onClick={() => setShowCalendar(false)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default DoctorsList;
