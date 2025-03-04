# Booking Appointment System

This is a **Booking Appointment System** that allows users to schedule, manage, and update appointments with doctors. The frontend is hosted, and the backend is deployed on a server, using MongoDB as the database.

## Features
- Book an appointment with a doctor.
- View available time slots.
- Prevent double booking of the same time slot.
- Edit or delete an existing appointment.
- Backend hosted with MongoDB for data management.

## Technologies Used
### Frontend:
- React.js
- Axios for API calls
- React Router for navigation
- CSS for styling

### Backend:
- Node.js
- Express.js
- MongoDB Atlas (Cloud Database)
- Mongoose (MongoDB ODM)

## Hosted Links
- **Frontend:** `https://doctors-appointment-booking-system.netlify.app/`
- **Backend:** `https://babysteps-backend-assigment.onrender.com`


## API Endpoints
| Method | Endpoint | Description |
|--------|-----------------------------|--------------------------------|
| GET | `/appointments` | Get all appointments |
| GET | `/appointments/:id` | Get appointment by ID |
| POST | `/appointments` | Book a new appointment |
| PUT | `/appointments/:id` | Update an appointment |
| DELETE | `/appointments/:id` | Delete an appointment |

## Usage
1. Select a doctor and date.
2. Choose an available time slot.
3. Enter patient details.
4. Click **Book Now** to confirm the appointment.
5. Edit or delete appointments as needed.

## Removing Booked Slots
- Users cannot select an already booked slot.
- Deleted appointments free up their time slots for others to book.

## Contributions
Feel free to fork the project and submit pull requests.

