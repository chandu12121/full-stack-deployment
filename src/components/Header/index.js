import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Hospital Name</h1>
        <p>Address</p>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/add-doctor">Add Doctors</Link>
      </div>
    </nav>
  );
};

export default Header;
