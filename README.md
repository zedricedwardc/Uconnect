# UConnect: Social Media Integration Platform

**UConnect** is a full-stack web application that provides a unified platform for managing and integrating multiple social media accounts. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), it offers a seamless experience for users to manage their social media presence from a single dashboard.

---

## **Features**
- **User Authentication**: Secure login and registration system
- **Social Media Integration**: Connect and manage multiple social media accounts
- **Real-Time Updates**: Live notifications and feed updates
- **Cloud Storage**: Efficient file management with Cloudinary
- **Responsive Design**: Seamless experience across all devices
- **API Security**: Protected routes with JWT authentication

---

## **Project Structure**
### 1. **Backend**
Located in the `backend/` directory. Includes:
- Express.js server setup
- MongoDB database integration
- Authentication middleware
- API routes and controllers
- Cloudinary integration for file storage

### 2. **Frontend**
Located in the `frontend/` directory. Includes:
- React.js components and pages
- State management
- API integration
- Responsive UI components

---

## **Tech Stack**

### **Backend Technologies**
- Node.js with Express.js framework
- MongoDB for database management
- JWT for authentication
- Bcrypt for password security
- Cloudinary for file storage
- Cookie Parser for session handling
- CORS for cross-origin requests

### **Frontend Technologies**
- React.js
- Modern JavaScript (ES6+)
- Responsive CSS
- State Management
- API Integration

---

## **Setup Instructions**

### **Prerequisites**
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB
- Cloudinary account

### **Installation Steps**
1. Clone the repository:
```bash
git clone [your-repository-url]
cd uconnect
```

2. Install Dependencies:
```bash
npm install
cd frontend
npm install
cd ..
```

3. Environment Setup:
Create a `.env` file in the root directory with:
```
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## **Usage**

### **Development Mode**
```bash
npm run dev
```

### **Production Mode**
```bash
npm run build
npm start
```

---

## **Project Directory Structure**
```
uconnect/
├── backend/         # Server-side code
│   ├── config/     # Configuration files
│   ├── controllers/# Route controllers
│   ├── middleware/ # Custom middleware
│   ├── models/     # Database models
│   └── routes/     # API routes
├── frontend/       # Client-side React app
├── .env           # Environment variables
└── package.json   # Project dependencies
```

---

## **Acknowledgments**
- MongoDB for database solutions
- Cloudinary for file storage services
- Express.js community
- React.js community

This project is developed as part of our continuous effort to simplify social media management for users.
Thank you! 🚀
