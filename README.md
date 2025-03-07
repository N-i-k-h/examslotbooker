🔹 Overview
The Exam Duty Slot Booker is a MERN stack-based web application that helps faculty members book exam duty slots. The system includes faculty and admin logins, booking management, and approval notifications via WhatsApp and Email.

🛠 Tech Stack
✅ Frontend: React.js (Vite), Tailwind CSS
✅ Backend: Node.js, Express.js, MongoDB
✅ Database: MongoDB (with Mongoose ORM)
✅ Authentication: JWT (JSON Web Token)
✅ Notifications: WhatsApp & Email integration
✅ UI Design: Inspired by WhatsApp, sidebar navigation

📌 Features
🔹 Faculty Panel
Register & Login (secured with JWT)
Book Exam Duty Slots (Exam, Bundle, Renewal)
View Booked Slots (Available slots in green, booked slots in red)
Dashboard with Statistics (Donut Chart: Exam Duty, Renewal, Bundle Duty counts)
🔹 Admin Panel
View Faculty Bookings
Approve/Reject Slot Requests
View Exam Duty History
🔹 Booking Rules
✔ No duplicate bookings (same room cannot be booked twice)
✔ Slots require admin approval
✔ WhatsApp and Email notifications for approvals

🛠 Installation & Setup
Follow these steps to set up the frontend & backend from scratch.

🔹 1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-repo/exam-duty-slot-booker.git
cd exam-duty-slot-booker
📌 Backend Setup (/server)
🔹 2️⃣ Install Dependencies
sh
Copy
Edit
cd server
npm install
Dependencies used:

json
Copy
Edit
"express": "^4.18.2",
"mongoose": "^7.2.2",
"cors": "^2.8.5",
"dotenv": "^16.0.3",
"jsonwebtoken": "^9.0.0",
"bcryptjs": "^2.4.3",
"nodemailer": "^6.9.2",
"twilio": "^4.19.1"
🔹 3️⃣ Create .env File
Create a .env file inside the server folder and add:

sh
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_NUMBER=your_twilio_whatsapp_number
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
🔹 4️⃣ Start the Backend
sh
Copy
Edit
npm run dev
📌 Frontend Setup (/client)
🔹 5️⃣ Install Dependencies
sh
Copy
Edit
cd ../client
npm install
Dependencies used:

json
Copy
Edit
"react": "^18.2.0",
"react-router-dom": "^6.10.0",
"tailwindcss": "^3.2.4",
"axios": "^1.3.4",
"recharts": "^2.5.0"
🔹 6️⃣ Setup Tailwind CSS
Inside tailwind.config.js:

js
Copy
Edit
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
🔹 7️⃣ Start the Frontend
sh
Copy
Edit
npm run dev
📌 Folder Structure
sh
Copy
Edit
exam-duty-slot-booker/
│── server/               # Backend (Node.js, Express, MongoDB)
│   ├── models/           # Mongoose Models
│   ├── routes/           # Express Routes
│   ├── controllers/      # Route Logic
│   ├── middleware/       # Auth Middleware
│   ├── config/           # Database Connection
│   ├── .env              # Environment Variables
│   ├── server.js         # Entry Point
│
│── client/               # Frontend (React.js, Tailwind CSS)
│   ├── src/              
│   │   ├── components/   # Reusable Components
│   │   ├── pages/        # Pages (Login, Register, Dashboard)
│   │   ├── App.js        # Main Component
│   │   ├── main.jsx      # Entry Point
│   ├── tailwind.config.js # Tailwind Configuration
│   ├── vite.config.js    # Vite Configuration
│
└── README.md
📌 API Routes
🔹 Auth Routes
Method	Endpoint	Description
POST	/register	Register a faculty
POST	/login	Login a faculty
🔹 Booking Routes
Method	Endpoint	Description
GET	/available-rooms	Get available rooms
POST	/book-room	Book a classroom slot
GET	/my-bookings	Get faculty's booked slots
🔹 Admin Routes
Method	Endpoint	Description
GET	/all-bookings	View all faculty bookings
POST	/approve/:id	Approve a booking
POST	/reject/:id	Reject a booking
📌 Next Steps & Enhancements
✅ Faculty Dashboard (Donut Chart UI)
✅ WhatsApp UI Theme (Sidebar Navigation)
🔹 Generate PDF Report (Booking History)
🔹 Admin Panel UI Enhancements
👨‍💻 Author
🚀 Developed by Your Name
📧 Contact: your-email@example.com

If you found this useful, give it a ⭐ on GitHub! 