# Mahad Manpower - Full-Stack Recruitment Platform

A comprehensive full-stack web application for GCC recruitment services, built with React frontend and Flask backend.

## 🚀 Features

### Frontend (React)
- **Modern React 18** with Vite build tool
- **Responsive UI** with Tailwind CSS
- **Authentication System** with JWT tokens
- **React Router** for client-side routing
- **Context API** for state management
- **Axios** for API communication with interceptors
- **Protected Routes** for authenticated users
- **Loading States** and user feedback mechanisms
- **Form Validation** and input sanitization

### Backend (Flask)
- **RESTful API** architecture
- **JWT Authentication** with Flask-JWT-Extended
- **SQLAlchemy ORM** with SQLite database
- **CORS Configuration** for cross-origin requests
- **Password Hashing** with Bcrypt
- **Input Validation** and sanitization
- **Error Handling** with proper HTTP status codes
- **Logging System** for debugging and monitoring
- **Database Migrations** with Flask-Migrate

### Security Features
- JWT token-based authentication
- Password hashing with Bcrypt
- Input validation and sanitization
- CORS configuration
- Protected API endpoints
- Secure environment variable management

## 📁 Project Structure

```
mahad-manpower/
├── backend/
│   ├── app.py                 # Main Flask application
│   ├── extensions.py          # Flask extensions initialization
│   ├── models.py              # Database models
│   ├── requirements.txt       # Python dependencies
│   ├── .env.example          # Environment variables template
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── auth.py           # Authentication endpoints
│   │   ├── jobs.py           # Job management endpoints
│   │   ├── applications.py   # Application management endpoints
│   │   ├── contact.py        # Contact form endpoints
│   │   └── services.py       # Services endpoints
│   └── instance/
│       └── mahad_manpower.db # SQLite database
├── frontend/
│   ├── src/
│   │   ├── main.jsx          # Application entry point
│   │   ├── App.jsx           # Main App component with routing
│   │   ├── index.css         # Global styles with Tailwind
│   │   ├── components/       # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Jobs.jsx
│   │   │   ├── JobDetails.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── About.jsx
│   │   ├── context/          # React Context
│   │   │   └── AuthContext.jsx
│   │   └── services/         # API services
│   │       └── api.js
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create environment file:
```bash
cp .env.example .env
```

5. Update `.env` with your configuration:
```env
SECRET_KEY=your-secret-key-here
JWT_SECRET_KEY=your-jwt-secret-key-here
DATABASE_URL=sqlite:///mahad_manpower.db
FLASK_ENV=development
```

6. Initialize the database:
```bash
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
```

7. (Optional) Seed the database with sample construction jobs:
```bash
python seed_jobs.py
```

This will create:
- 15 construction-related job listings (Steel Fixer, AC Technician, Foreman, Labour, Mason, Electrician, Carpenter, Painter, etc.)
- An admin user (Email: admin@eazaltalab.com, Password: Admin@123)

8. Run the backend server:
```bash
python app.py
```

The backend will be available at `http://localhost:5001`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
VITE_API_URL=http://localhost:5001/api
```

5. Run the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123",
  "full_name": "John Doe",
  "role": "candidate"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123"
}
```

#### Get Profile
```http
GET /api/auth/profile
Authorization: Bearer <token>
```

### Jobs Endpoints

#### Get All Jobs
```http
GET /api/jobs?page=1&per_page=10&country=UAE&industry=Construction
```

#### Get Job Details
```http
GET /api/jobs/<job_id>
```

#### Create Job (Employer only)
```http
POST /api/jobs
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Construction Manager",
  "description": "Job description here",
  "country": "UAE",
  "industry": "Construction",
  "salary_range": "5000-8000",
  "requirements": ["5+ years experience", "Bachelor's degree"]
}
```

### Applications Endpoints

#### Apply for Job
```http
POST /api/applications
Authorization: Bearer <token>
Content-Type: application/json

{
  "job_id": 1,
  "cover_letter": "I am interested in this position..."
}
```

#### Get My Applications
```http
GET /api/applications/my-applications
Authorization: Bearer <token>
```

### Contact Endpoints

#### Submit Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+971501234567",
  "subject": "Inquiry",
  "message": "I would like to know more about your services"
}
```

### Services Endpoints

#### Get All Services
```http
GET /api/services
```

## 🎨 Frontend Pages

1. **Home** (`/`) - Landing page with company overview
2. **Jobs** (`/jobs`) - Browse available job listings
3. **Job Details** (`/jobs/:id`) - Detailed job information
4. **Login** (`/login`) - User authentication
5. **Register** (`/register`) - New user registration
6. **Dashboard** (`/dashboard`) - User dashboard (protected)
7. **Contact** (`/contact`) - Contact form
8. **About** (`/about`) - About the company

## 🔐 User Roles

- **Candidate**: Can browse jobs, apply for positions, manage applications
- **Employer**: Can post jobs, manage job listings, review applications
- **Admin**: Full access to all features and user management

## 🚀 Deployment

### Backend Deployment (Production)

1. Use a production WSGI server like Gunicorn:
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5001 app:app
```

2. Set environment variables:
```bash
export FLASK_ENV=production
export SECRET_KEY=your-production-secret-key
export JWT_SECRET_KEY=your-production-jwt-secret-key
```

3. Use PostgreSQL for production:
```bash
export DATABASE_URL=postgresql://user:password@localhost/mahad_manpower
```

### Frontend Deployment

1. Build the production bundle:
```bash
npm run build
```

2. The `dist` folder contains the production-ready files

3. Deploy to services like:
   - Vercel
   - Netlify
   - AWS S3 + CloudFront
   - DigitalOcean App Platform

## 🧪 Testing

### Backend Tests
```bash
cd backend
pytest
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📝 Environment Variables

### Backend (.env)
```env
SECRET_KEY=your-secret-key
JWT_SECRET_KEY=your-jwt-secret-key
DATABASE_URL=sqlite:///mahad_manpower.db
FLASK_ENV=development
JWT_ACCESS_TOKEN_EXPIRES=3600
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5001/api
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Contact

For questions or support, please contact:
- Email: info@mahadmanpowers.co.in
- Phone: +919219824357
- Website: https://www.mahadmanpowers.co.in

## 🙏 Acknowledgments

- React Team for the amazing framework
- Flask Team for the lightweight backend framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and supporters of this project