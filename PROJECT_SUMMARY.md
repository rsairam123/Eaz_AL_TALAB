# EAZ AL TALAB - Dubai Construction Recruitment Website

## Project Overview

EAZ AL TALAB is a government-licensed manpower recruitment agency specializing in connecting skilled and unskilled construction workers from India to leading construction companies in Dubai, UAE. The platform provides comprehensive recruitment services including visa sponsorship, accommodation, and ongoing support.

## Key Features Implemented

### 1. **Dubai-Focused Construction Jobs**
- All job listings are exclusively for Dubai, UAE
- Focus on construction sector positions
- No salary information displayed (as per requirements)
- Full visa sponsorship included with all positions

### 2. **Job Categories**
The platform features the following construction job categories:
- Steel Fixers
- AC Repair Technicians
- Construction Foremen
- General Laborers
- Construction Helpers
- Masons/Bricklayers
- Electricians
- Carpenters
- Painters
- Plumbers
- Welders
- Tile Setters
- Gypsum Carpenters
- Heavy Equipment Operators
- Scaffolders

### 3. **Enhanced Pages**

#### **Home Page**
- Hero section highlighting Dubai construction jobs with visa sponsorship
- Trust indicators showing government licensing
- Job categories with relevant images
- Benefits section explaining complete support from India to Dubai
- Step-by-step process guide
- Statistics showcasing company success

#### **Jobs Page**
- Filtered to show only Dubai, UAE construction jobs
- No salary information displayed
- Search and filter functionality by job category
- Benefits badges (Visa Sponsorship, Accommodation)
- Information sections about working in Dubai
- Call-to-action for personalized assistance

#### **About Us Page**
- Comprehensive company information
- Mission and values
- Government licensing details
- Services offered
- Why choose EAZ AL TALAB
- Statistics and achievements
- Professional images throughout

#### **Contact Page**
- Improved error handling
- Contact form with validation
- WhatsApp integration
- Company contact information
- Business hours
- Quick response indicators

### 4. **Government Licensing**
- Prominent display of government authorization
- Trust badges throughout the site
- Legal compliance messaging
- Worker protection guarantees

### 5. **Technical Improvements**

#### Backend:
- Updated seed script to populate Dubai construction jobs
- Removed salary information from job listings
- Enhanced job descriptions with visa sponsorship details
- Added benefits field to job model

#### Frontend:
- Updated branding to "EAZ AL TALAB"
- Construction-focused imagery throughout
- Improved SEO with relevant keywords
- Enhanced error handling in contact form
- Mobile-responsive design
- Professional color scheme

## Technology Stack

### Backend
- **Framework**: Flask (Python)
- **Database**: SQLite (development) / PostgreSQL (production)
- **Authentication**: JWT (JSON Web Tokens)
- **ORM**: SQLAlchemy
- **API**: RESTful endpoints

### Frontend
- **Framework**: React 18
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **HTTP Client**: Axios
- **Build Tool**: Vite

## Project Structure

```
EAZ AL/
├── backend/
│   ├── app.py                 # Main Flask application
│   ├── models.py              # Database models
│   ├── extensions.py          # Flask extensions
│   ├── seed_jobs.py          # Database seeding script
│   ├── routes/
│   │   ├── auth.py           # Authentication routes
│   │   ├── jobs.py           # Job listing routes
│   │   ├── contact.py        # Contact form routes
│   │   ├── applications.py   # Job application routes
│   │   └── services.py       # Services routes
│   └── instance/
│       └── mahad_manpower.db # SQLite database
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx      # Enhanced home page
│   │   │   ├── Jobs.jsx      # Dubai construction jobs
│   │   │   ├── About.jsx     # Company information
│   │   │   ├── Contact.jsx   # Contact form
│   │   │   └── ...
│   │   ├── components/
│   │   │   ├── Header.jsx    # Navigation header
│   │   │   ├── Footer.jsx    # Site footer
│   │   │   └── ...
│   │   ├── services/
│   │   │   └── api.js        # API service layer
│   │   └── context/
│   │       └── AuthContext.jsx
│   └── index.html            # Updated meta tags
│
└── PROJECT_SUMMARY.md        # This file
```

## Setup Instructions

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

5. Seed the database with Dubai construction jobs:
```bash
python seed_jobs.py
```

6. Run the backend server:
```bash
PORT=5001 python app.py
```

The backend will run on `http://localhost:5001`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Ensure VITE_API_URL=http://localhost:5001/api
```

4. Run the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Admin Credentials

After running the seed script, you can log in with:
- **Email**: admin@eazaltalab.com
- **Password**: Admin@123

## Key Features by Page

### Home Page (`/`)
- Hero section with Dubai construction jobs messaging
- Government licensing badges
- 8 job categories with images
- Benefits of working in Dubai
- How it works (4-step process)
- Statistics and trust indicators
- Call-to-action buttons

### Jobs Page (`/jobs`)
- Displays only Dubai, UAE construction jobs
- No salary information shown
- Search functionality
- Filter by job category
- Benefits badges on each job card
- Information about working in Dubai
- Contact CTA for assistance

### About Page (`/about`)
- Company overview and mission
- Core values (4 pillars)
- Comprehensive services list
- Government licensing section
- Why choose us
- Statistics and achievements
- Professional imagery

### Contact Page (`/contact`)
- Contact form with validation
- WhatsApp integration
- Company contact details
- Business hours
- Quick response indicators
- Error handling improvements

## API Endpoints

### Jobs
- `GET /api/jobs` - Get all jobs (filtered by country=UAE, industry=Construction)
- `GET /api/jobs/:id` - Get specific job details
- `POST /api/jobs` - Create new job (admin only)
- `PUT /api/jobs/:id` - Update job (admin only)
- `DELETE /api/jobs/:id` - Delete job (admin only)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions (admin only)

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

## Environment Variables

### Backend (.env)
```
SECRET_KEY=your-secret-key
JWT_SECRET_KEY=your-jwt-secret
DATABASE_URL=sqlite:///mahad_manpower.db
FRONTEND_URL=http://localhost:5173
PORT=5001
FLASK_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5001/api
VITE_APP_NAME=EAZ AL TALAB
VITE_APP_DESCRIPTION=Dubai Construction Jobs with Visa Sponsorship
```

## Deployment Considerations

1. **Database**: Migrate from SQLite to PostgreSQL for production
2. **Environment**: Update all environment variables for production
3. **CORS**: Configure proper CORS settings for production domain
4. **SSL**: Ensure HTTPS is enabled
5. **Images**: Consider using a CDN for images
6. **API Rate Limiting**: Implement rate limiting for API endpoints

## Features Completed

✅ Dubai-focused construction job listings
✅ Removed salary information from all job displays
✅ Added construction job categories with images
✅ Enhanced About Us page with company information
✅ Government licensing information prominently displayed
✅ Contact form with improved error handling
✅ Visa sponsorship messaging throughout
✅ Professional construction-themed imagery
✅ Mobile-responsive design
✅ SEO-optimized content and meta tags
✅ WhatsApp integration for quick contact
✅ Trust indicators and badges
✅ Step-by-step application process guide

## Contact Information

- **Phone**: +91 6304016994
- **Email**: sairam280403@gmail.com
- **WhatsApp**: +91 6304016994
- **Location**: India & Dubai, UAE

## License

This project is proprietary and confidential. All rights reserved by EAZ AL TALAB.

---

**Built with ❤️ for connecting Indian construction workers with Dubai opportunities**