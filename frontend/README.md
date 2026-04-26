# Mahad Manpower - Frontend

React-based frontend application for the Mahad Manpower recruitment platform.

## Features

- **Modern React**: Built with React 18 and modern hooks
- **Routing**: React Router v6 for navigation
- **State Management**: Context API for global state
- **Styling**: Tailwind CSS for responsive design
- **Form Handling**: Formik with Yup validation
- **API Integration**: Axios for HTTP requests
- **Notifications**: React Toastify for user feedback
- **Authentication**: JWT-based authentication with protected routes
- **Responsive Design**: Mobile-first approach
- **Loading States**: Proper loading indicators
- **Error Handling**: Comprehensive error handling

## Tech Stack

- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Routing**: React Router DOM 6.20.0
- **HTTP Client**: Axios 1.6.2
- **Styling**: Tailwind CSS 3.3.6
- **Icons**: React Icons 4.12.0
- **Notifications**: React Toastify 9.1.3
- **Form Validation**: Formik 2.4.5 + Yup 1.3.3

## Installation

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Setup Steps

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── PrivateRoute.jsx
│   ├── context/         # React Context providers
│   │   └── AuthContext.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Jobs.jsx
│   │   ├── JobDetails.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   ├── MyApplications.jsx
│   │   ├── MyJobs.jsx
│   │   ├── PostJob.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── services/        # API services
│   │   └── api.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Key Features

### Authentication

The application uses JWT-based authentication with the following features:

- User registration (candidate/employer)
- Login/logout
- Protected routes
- Automatic token refresh
- Role-based access control

### Routing

Routes are organized as follows:

**Public Routes:**
- `/` - Home page
- `/jobs` - Job listings
- `/jobs/:id` - Job details
- `/about` - About page
- `/services` - Services page
- `/contact` - Contact page
- `/login` - Login page
- `/register` - Registration page

**Protected Routes:**
- `/dashboard` - User dashboard
- `/profile` - User profile
- `/my-applications` - Candidate applications
- `/my-jobs` - Employer job listings
- `/post-job` - Post new job

### State Management

Global state is managed using React Context API:

- **AuthContext**: User authentication state
  - `user` - Current user object
  - `isAuthenticated` - Authentication status
  - `login()` - Login function
  - `register()` - Registration function
  - `logout()` - Logout function
  - `updateUser()` - Update user profile
  - `changePassword()` - Change password

### API Integration

All API calls are centralized in `src/services/api.js`:

```javascript
import { authAPI, jobsAPI, applicationsAPI, contactAPI, servicesAPI } from './services/api';

// Example usage
const jobs = await jobsAPI.getAll({ country: 'UAE' });
const result = await authAPI.login({ email, password });
```

### Styling

The application uses Tailwind CSS with custom configuration:

- Custom color palette (primary, secondary)
- Custom fonts (Inter, Poppins)
- Reusable component classes
- Responsive breakpoints
- Custom animations

### Form Validation

Forms use client-side validation with the following rules:

**Registration:**
- Full name: Required, min 2 characters
- Email: Required, valid email format
- Phone: Optional, valid phone format
- Password: Required, min 8 characters, must contain uppercase, lowercase, and number
- Confirm password: Must match password

**Login:**
- Email: Required, valid email format
- Password: Required

## Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Mahad Manpower
VITE_APP_DESCRIPTION=Licensed Overseas Recruitment Agency for GCC Employers
```

## Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. **Deploy the `dist` folder** to your hosting service

### Deployment Options

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **AWS S3 + CloudFront**
- **GitHub Pages**
- **Docker**: Use the provided Dockerfile

## API Integration

The frontend communicates with the backend API at `http://localhost:5000/api` (configurable via environment variables).

### API Endpoints Used

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/profile` - Get user profile
- `PUT /auth/profile` - Update profile
- `POST /auth/change-password` - Change password
- `GET /jobs` - Get all jobs
- `GET /jobs/:id` - Get job details
- `POST /jobs` - Create job (employer)
- `POST /applications` - Submit application
- `GET /applications/my-applications` - Get user applications
- `POST /contact` - Submit contact form
- `GET /services` - Get services

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Code splitting with React.lazy()
- Image optimization
- Lazy loading for images
- Minification and compression
- Tree shaking
- CSS purging with Tailwind

## Security Features

- JWT token storage in localStorage
- Automatic token expiration handling
- Protected routes
- Input sanitization
- XSS protection
- CSRF protection

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast compliance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

Proprietary - Mahad Manpower

## Support

For support, email info@mahadmanpowers.co.in or call +91 92198 24357