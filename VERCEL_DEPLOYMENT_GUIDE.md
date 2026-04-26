# Deploy to Vercel - Complete Guide

## Important Note About Your Application

Your application has:
- **Frontend:** React (can deploy to Vercel)
- **Backend:** Flask/Python (Vercel has limited Python support)

**Recommended Approach:**
- Deploy **Frontend** to Vercel
- Deploy **Backend** to Render, Railway, or PythonAnywhere (better for Flask)

## Option 1: Deploy Frontend Only to Vercel (Recommended)

### Step 1: Prepare Frontend for Deployment

The frontend is already configured and ready!

### Step 2: Deploy to Vercel

**Method A: Using Vercel Website (Easiest)**

1. **Go to Vercel:**
   - Visit: https://vercel.com/
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"

2. **Import Your Repository:**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find: `rsairam123/Eaz_AL_TALAB`
   - Click "Import"

3. **Configure Project:**
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Add Environment Variables:**
   Click "Environment Variables" and add:
   ```
   VITE_API_URL=https://your-backend-url.com/api
   ```
   (You'll update this after deploying backend)

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your frontend will be live!

**Method B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy from frontend directory
cd frontend
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? eaz-al-talab
# - Directory? ./
# - Override settings? No

# Production deployment
vercel --prod
```

### Step 3: Deploy Backend (Separate Service)

Since Vercel doesn't fully support Flask, deploy backend to:

**Option A: Render.com (Recommended - Free Tier)**

1. Go to: https://render.com/
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your repository
5. Configure:
   - **Name:** eaz-al-talab-backend
   - **Root Directory:** `backend`
   - **Environment:** Python 3
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app`
6. Add Environment Variables:
   ```
   FLASK_ENV=production
   SECRET_KEY=your-secret-key
   JWT_SECRET_KEY=your-jwt-secret
   TWILIO_ACCOUNT_SID=your-sid
   TWILIO_AUTH_TOKEN=your-token
   TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
   TWILIO_WHATSAPP_TO=whatsapp:+916304016994
   ```
7. Click "Create Web Service"

**Option B: Railway.app**

1. Go to: https://railway.app/
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Configure:
   - **Root Directory:** `backend`
   - **Start Command:** `gunicorn app:app`
6. Add environment variables (same as above)
7. Deploy

**Option C: PythonAnywhere**

1. Go to: https://www.pythonanywhere.com/
2. Sign up for free account
3. Upload your backend code
4. Configure WSGI file
5. Set environment variables

### Step 4: Connect Frontend to Backend

1. **Get Backend URL:**
   - From Render: `https://eaz-al-talab-backend.onrender.com`
   - From Railway: `https://your-app.railway.app`

2. **Update Frontend Environment Variable:**
   - Go to Vercel Dashboard
   - Select your project
   - Settings → Environment Variables
   - Update `VITE_API_URL` to your backend URL
   - Redeploy frontend

### Step 5: Update API Configuration

Update `frontend/src/services/api.js` to use environment variable:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5002/api';
```

## Option 2: Deploy Both to Vercel (Limited Support)

If you want to try deploying both to Vercel:

### Step 1: Create vercel.json (Already Created)

The `vercel.json` file is already in your project root.

### Step 2: Deploy

```bash
# From project root
vercel

# Production
vercel --prod
```

### Step 3: Add Environment Variables

In Vercel Dashboard:
```
FLASK_ENV=production
SECRET_KEY=your-secret-key
JWT_SECRET_KEY=your-jwt-secret
TWILIO_ACCOUNT_SID=your-sid
TWILIO_AUTH_TOKEN=your-token
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
TWILIO_WHATSAPP_TO=whatsapp:+916304016994
```

**Note:** Vercel's Python support is limited. Backend might not work properly.

## Recommended Deployment Strategy

### Best Approach:

1. **Frontend → Vercel**
   - Fast, free, excellent for React
   - URL: `https://eaz-al-talab.vercel.app`

2. **Backend → Render.com**
   - Free tier available
   - Better Python/Flask support
   - URL: `https://eaz-al-talab-backend.onrender.com`

3. **Database → Render PostgreSQL or Railway**
   - Free tier available
   - Better than SQLite for production

## Quick Start Commands

### Deploy Frontend to Vercel:
```bash
cd frontend
npm install -g vercel
vercel login
vercel --prod
```

### Deploy Backend to Render:
1. Go to https://render.com/
2. Connect GitHub
3. Select repository
4. Configure as Web Service
5. Add environment variables
6. Deploy

## After Deployment Checklist

- [ ] Frontend deployed and accessible
- [ ] Backend deployed and accessible
- [ ] Environment variables configured
- [ ] Frontend connected to backend API
- [ ] Test contact form submission
- [ ] Verify WhatsApp notifications work
- [ ] Check all pages load correctly
- [ ] Test job listings
- [ ] Verify authentication works

## Troubleshooting

### Frontend Issues:
- **Build fails:** Check `npm run build` locally first
- **Blank page:** Check browser console for errors
- **API errors:** Verify VITE_API_URL is correct

### Backend Issues:
- **500 errors:** Check backend logs
- **Database errors:** Ensure database is configured
- **CORS errors:** Update CORS settings in Flask

### WhatsApp Issues:
- **No notifications:** Verify Twilio credentials
- **Sandbox expired:** Re-join WhatsApp sandbox
- **Wrong number:** Check TWILIO_WHATSAPP_TO variable

## Cost Breakdown

### Free Tier:
- **Vercel:** Free (frontend)
- **Render:** Free (backend, with limitations)
- **Total:** $0/month

### Paid Tier (Recommended for Production):
- **Vercel Pro:** $20/month
- **Render Starter:** $7/month
- **Total:** $27/month

## Support Links

- **Vercel Docs:** https://vercel.com/docs
- **Render Docs:** https://render.com/docs
- **Railway Docs:** https://docs.railway.app/
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html

## Next Steps

1. Choose your deployment platform
2. Follow the guide above
3. Deploy frontend first
4. Deploy backend second
5. Connect them together
6. Test everything
7. Share your live URL!

**Your app will be live at:**
- Frontend: `https://your-app.vercel.app`
- Backend: `https://your-backend.onrender.com`

Good luck with your deployment! 🚀