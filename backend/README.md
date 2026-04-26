# Mahad Manpower - Backend API

Flask-based RESTful API for the Mahad Manpower recruitment platform.

## Features

- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **User Management**: Registration, login, profile management
- **Job Management**: CRUD operations for job postings with filtering and pagination
- **Application Management**: Job application submission and tracking
- **Contact Management**: Contact form submissions
- **Services Management**: Services offered by the platform
- **Database**: PostgreSQL with SQLAlchemy ORM
- **Security**: Password hashing, input validation, CORS configuration
- **Logging**: Comprehensive logging system
- **Error Handling**: Proper error responses with appropriate HTTP status codes

## Tech Stack

- **Framework**: Flask 3.0.0
- **Database**: PostgreSQL with SQLAlchemy
- **Authentication**: Flask-JWT-Extended
- **Password Hashing**: Flask-Bcrypt
- **CORS**: Flask-CORS
- **Migrations**: Flask-Migrate
- **Environment Variables**: python-dotenv

## Installation

### Prerequisites

- Python 3.8 or higher
- PostgreSQL 12 or higher
- pip (Python package manager)

### Setup Steps

1. **Clone the repository and navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```

4. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

5. **Set up PostgreSQL database**
   ```bash
   # Create database
   createdb mahad_manpower
   
   # Or using psql
   psql -U postgres
   CREATE DATABASE mahad_manpower;
   \q
   ```

6. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

7. **Initialize the database**
   ```bash
   flask db init
   flask db migrate -m "Initial migration"
   flask db upgrade
   ```

8. **Run the application**
   ```bash
   python app.py
   ```

The API will be available at `http://localhost:5000`

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123",
  "full_name": "John Doe",
  "phone": "+1234567890",
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

#### Update Profile
```http
PUT /api/auth/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "full_name": "John Smith",
  "phone": "+1234567890"
}
```

#### Change Password
```http
POST /api/auth/change-password
Authorization: Bearer <token>
Content-Type: application/json

{
  "current_password": "OldPass123",
  "new_password": "NewPass123"
}
```

### Job Endpoints

#### Get All Jobs
```http
GET /api/jobs?page=1&per_page=10&country=UAE&industry=Maritime&search=engineer
```

#### Get Single Job
```http
GET /api/jobs/{job_id}
```

#### Create Job (Employer/Admin only)
```http
POST /api/jobs
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Software Engineer",
  "company": "Tech Corp",
  "location": "Dubai",
  "country": "UAE",
  "industry": "Technology",
  "job_type": "Full-time",
  "experience_required": "2-5 years",
  "salary_range": "5000-8000 AED",
  "description": "Job description here",
  "requirements": "Requirements here",
  "benefits": "Benefits here",
  "skills": ["Python", "Flask", "React"]
}
```

#### Update Job (Employer/Admin only)
```http
PUT /api/jobs/{job_id}
Authorization: Bearer <token>
Content-Type: application/json
```

#### Delete Job (Employer/Admin only)
```http
DELETE /api/jobs/{job_id}
Authorization: Bearer <token>
```

#### Get My Jobs (Employer only)
```http
GET /api/jobs/my-jobs?page=1&per_page=10
Authorization: Bearer <token>
```

#### Get Countries
```http
GET /api/jobs/countries
```

#### Get Industries
```http
GET /api/jobs/industries
```

### Application Endpoints

#### Submit Application (Candidate only)
```http
POST /api/applications
Authorization: Bearer <token>
Content-Type: application/json

{
  "job_id": 1,
  "cover_letter": "Cover letter text",
  "resume_url": "https://example.com/resume.pdf",
  "additional_info": {}
}
```

#### Get My Applications (Candidate)
```http
GET /api/applications/my-applications?page=1&status=pending
Authorization: Bearer <token>
```

#### Get Job Applications (Employer)
```http
GET /api/applications/job/{job_id}?page=1&status=pending
Authorization: Bearer <token>
```

#### Get Single Application
```http
GET /api/applications/{application_id}
Authorization: Bearer <token>
```

#### Update Application Status (Employer only)
```http
PUT /api/applications/{application_id}/status
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "shortlisted"
}
```

#### Delete Application (Candidate only)
```http
DELETE /api/applications/{application_id}
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
  "phone": "+1234567890",
  "subject": "Inquiry",
  "message": "Message text here"
}
```

#### Get All Contacts (Admin only)
```http
GET /api/contact?page=1&status=new
Authorization: Bearer <token>
```

#### Get Single Contact (Admin only)
```http
GET /api/contact/{contact_id}
Authorization: Bearer <token>
```

#### Update Contact Status (Admin only)
```http
PUT /api/contact/{contact_id}/status
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "resolved"
}
```

### Services Endpoints

#### Get All Services
```http
GET /api/services
```

#### Get Service by Slug
```http
GET /api/services/{slug}
```

#### Create Service (Admin only)
```http
POST /api/services
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Maritime Recruitment",
  "slug": "maritime-recruitment",
  "description": "Service description",
  "icon": "ship",
  "features": ["Feature 1", "Feature 2"],
  "order": 1
}
```

## User Roles

- **candidate**: Can apply for jobs, view applications
- **employer**: Can post jobs, view applications for their jobs
- **admin**: Full access to all features

## Error Responses

All errors follow this format:
```json
{
  "error": "Error type",
  "message": "Detailed error message"
}
```

Common HTTP status codes:
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `409`: Conflict
- `500`: Internal Server Error

## Database Schema

### Users
- id, email, password_hash, full_name, phone, role, is_active, is_verified, created_at, updated_at

### Jobs
- id, title, company, location, country, industry, job_type, experience_required, salary_range, description, requirements, benefits, skills, is_active, views_count, applications_count, employer_id, created_at, updated_at, deadline

### Applications
- id, user_id, job_id, status, cover_letter, resume_url, additional_info, created_at, updated_at

### Contacts
- id, name, email, phone, subject, message, status, created_at

### Services
- id, name, slug, description, icon, features, is_active, order, created_at

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Role-based access control
- Input validation and sanitization
- CORS configuration
- SQL injection prevention (SQLAlchemy ORM)
- XSS protection

## Logging

Logs are stored in the `logs/` directory with automatic rotation.

## Production Deployment

For production deployment:

1. Set `FLASK_ENV=production` in `.env`
2. Use strong secret keys
3. Configure proper database credentials
4. Use a production WSGI server (gunicorn is included)
5. Set up SSL/TLS certificates
6. Configure firewall rules
7. Set up database backups

### Running with Gunicorn
```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## License

Proprietary - Mahad Manpower