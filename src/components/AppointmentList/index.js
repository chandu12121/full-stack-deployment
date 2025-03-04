import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';  
import { FaEdit } from 'react-icons/fa';    
import "./index.css";

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getAppointments = async () => {
            try {
                const response = await axios.get("https://babysteps-backend-assigment.onrender.com/appointments");
                console.log("Fetched Appointments:", response.data);
                setAppointments(response.data);
            } catch (error) {
                console.error("Error fetching appointments:", error);
            } finally {
                setLoading(false);
            }
        };
        getAppointments();
    }, []);

    const onDelete = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this appointment?");
        
        if (!isConfirmed) return;
    
        try {
            const response = await axios.delete(`https://babysteps-backend-assigment.onrender.com/appointments/${id}`);
            console.log("Appointment deleted:", response.data);
            setAppointments(appointments.filter(appointment => appointment._id !== id));
        } catch (error) {
            console.error("Error deleting appointment:", error);
        }
    };
    
    const onEdit = (appointment) => {
        const isConfirmed = window.confirm("Are you sure you want to edit this appointment?");
        
        if (!isConfirmed) return;
    
        navigate("/appointment-form", { state: { appointmentId: appointment._id } });
    };
    

    return (
        <div className="appointment-container">
            <h2>Appointment List</h2>
            {loading ? (
                <div className="spinner">Loading...</div>
            ) : appointments.length === 0 ? (
                <p className="no-appointments">No appointments available.</p>
            ) : (
                <ul className="appointment-list">
                    {appointments.map((each) => (
                        <li key={each._id} className="appointment-card">
                            <p><strong>Doctor ID:</strong> {each.doctorId?._id || "N/A"}</p>
                            <p><strong>Patient Name:</strong> {each.patientName || "N/A"}</p>
                            <p><strong>Date:</strong> {each.date ? new Date(each.date).toLocaleDateString() : "N/A"}</p>
                            <p><strong>Time:</strong> {each.time || "N/A"}</p>
                            <p><strong>Appointment Type:</strong> {each.appointmentType || "N/A"}</p>
                            <p><strong>Duration:</strong> {each.duration ? `${each.duration} minutes` : "N/A"}</p>
                            <button className="delete-btn" onClick={() => onDelete(each._id)}><FaTrash />Delete</button>
                            <button className="edit-btn" onClick={() => onEdit(each)}><FaEdit/> Edit</button>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AppointmentList;