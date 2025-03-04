import { useState } from "react";
import "./index.css"
const AddDoctor = () => {
    const [doctor, setDoctor] = useState({
        name: "",
        specialty: "",
        experience: "",
        contact: "",
        workingHours: { start: "", end: "" }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "start" || name === "end") {
            setDoctor((prev) => ({
                ...prev,
                workingHours: { ...prev.workingHours, [name]: Number(value) }
            }));
        } else {
            setDoctor((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://babysteps-backend-assigment.onrender.com/doctors", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(doctor)
        });

        if (response.ok) {
            alert("Doctor added successfully!");
            setDoctor({ name: "", specialty: "", experience: "", contact: "", workingHours: { start: "", end: "" } });
        } else {
            alert("Error adding doctor");
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Add Doctor</h2>
            <form onSubmit={handleSubmit} className="doctor-form">
                <input type="text" name="name" placeholder="Name" value={doctor.name} onChange={handleChange} required className="form-input" />
                <input type="text" name="specialty" placeholder="Specialty" value={doctor.specialty} onChange={handleChange} required className="form-input" />
                <input type="number" name="experience" placeholder="Experience" value={doctor.experience} onChange={handleChange} required className="form-input" />
                <input type="text" name="contact" placeholder="Contact" value={doctor.contact} onChange={handleChange} required className="form-input" />
                
                <div className="working-hours">
                    <input type="number" name="start" placeholder="Start Time" value={doctor.workingHours.start} onChange={handleChange} required className="form-input half-width" />
                    <input type="number" name="end" placeholder="End Time" value={doctor.workingHours.end} onChange={handleChange} required className="form-input half-width" />
                </div>

                <button type="submit" className="submit-btn">Add Doctor</button>
            </form>
        </div>
    );
};

export default AddDoctor;
