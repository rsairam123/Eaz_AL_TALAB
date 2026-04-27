# Vercel Environment Variables Setup Guide

## 🚨 CRITICAL: WhatsApp Not Working in Production

Your WhatsApp notifications work perfectly locally but not in production because **Twilio environment variables are missing from Vercel**.

---

## 📋 Required Environment Variables

You need to add these to **BOTH** frontend and backend on Vercel:

### Backend Environment Variables (CRITICAL for WhatsApp):

| Variable Name | Value | Purpose |
|--------------|-------|---------|
| `VERCEL` | `1` | Tells app it's running on Vercel |
| `SECRET_KEY` | `mahad-manpower-secret-2024-prod` | Flask secret key |
| `JWT_SECRET_KEY` | `jwt-mahad-secret-2024-prod` | JWT authentication |
| `TWILIO_ACCOUNT_SID` | `AC9e0e8e8c8c8c8c8c8c8c8c8c8c8c8c8c` | Your Twilio Account SID |
| `TWILIO_AUTH_TOKEN` | `your-actual-auth-token-here` | Your Twilio Auth Token |
| `TWILIO_WHATSAPP_FROM` | `whatsapp:+14155238886` | Twilio WhatsApp number |
| `TWILIO_WHATSAPP_TO` | `whatsapp:+916304016994` | Your WhatsApp number |

### Frontend Environment Variables:

| Variable Name | Value | Purpose |
|--------------|-------|---------|
| `VITE_API_URL` | `https://backend-jade-eight-92.vercel.app/api` | Backend API URL |

---

## 🔧 How to Add Environment Variables

### Method 1: Vercel Dashboard (Recommended)

#### For Backend:

1. **Go to Backend Project:**
   - URL: https://vercel.com/rsairam123s-projects/backend

2. **Navigate to Settings:**
   - Click "Settings" tab at the top

3. **Go to Environment Variables:**
   - Click "Environment Variables" in the left sidebar

4. **Add Each Variable:**
   - Click "Add New" button
   - Enter **Name** (e.g., `TWILIO_ACCOUNT_SID`)
   - Enter **Value** (e.g., your actual Twilio SID)
   - Select **Environment**: Check "Production"
   - Click "Save"

5. **Repeat for All 7 Backend Variables**

6. **Redeploy:**
   - Go to "Deployments" tab
   - Click "..." on latest deployment
   - Click "Redeploy"

#### For Frontend:

1. **Go to Frontend Project:**
   - URL: https://vercel.com/rsairam123s-projects/frontend

2. **Follow Same Steps** to add:
   - `VITE_API_URL` = `https://backend-jade-eight-92.vercel.app/api`

3. **Redeploy Frontend**

---

### Method 2: Vercel CLI (Alternative)

```bash
# For Backend
cd backend
vercel env add VERCEL production
# Enter: 1

vercel env add SECRET_KEY production
# Enter: mahad-manpower-secret-2024-prod

vercel env add JWT_SECRET_KEY production
# Enter: jwt-mahad-secret-2024-prod

vercel env add TWILIO_ACCOUNT_SID production
# Enter: your-actual-sid

vercel env add TWILIO_AUTH_TOKEN production
# Enter: your-actual-token

vercel env add TWILIO_WHATSAPP_FROM production
# Enter: whatsapp:+14155238886

vercel env add TWILIO_WHATSAPP_TO production
# Enter: whatsapp:+916304016994

# Redeploy
vercel --prod

# For Frontend
cd ../frontend
vercel env add VITE_API_URL production
# Enter: https://backend-jade-eight-92.vercel.app/api

# Redeploy
vercel --prod
```

---

## 🔍 How to Get Your Twilio Credentials

1. **Go to Twilio Console:**
   - https://console.twilio.com/

2. **Find Your Credentials:**
   - **Account SID**: On dashboard (starts with "AC")
   - **Auth Token**: Click "Show" next to Auth Token

3. **WhatsApp Sandbox Number:**
   - Go to: Messaging → Try it out → Send a WhatsApp message
   - Your sandbox number: `whatsapp:+14155238886`

---

## ✅ Verification Steps

After adding environment variables and redeploying:

### 1. Test Backend API:
```bash
curl https://backend-jade-eight-92.vercel.app/
```
Should return: `{"message": "Mahad Manpower API", ...}`

### 2. Test Contact Form:
- Go to: https://frontend-rouge-two-73.vercel.app/contact
- Fill in the form
- Click "Send Message"
- Check your WhatsApp (+91 6304016994) for notification

### 3. Check Vercel Logs:
- Go to backend project → "Deployments" → Click latest
- Click "View Function Logs"
- Look for Twilio-related messages

---

## 🐛 Troubleshooting

### WhatsApp Still Not Working?

**Check 1: Environment Variables Set?**
```bash
# In Vercel dashboard, verify all 7 backend variables are present
```

**Check 2: Twilio Sandbox Active?**
- Send "join [your-code]" to +1 415 523 8886 on WhatsApp
- You should get a confirmation message

**Check 3: Correct Phone Number Format?**
- Must be: `whatsapp:+916304016994` (with country code)
- No spaces or dashes

**Check 4: Redeployed After Adding Variables?**
- Environment variables only take effect after redeployment

---

## 📊 Current Status

✅ Frontend deployed: https://frontend-rouge-two-73.vercel.app
✅ Backend deployed: https://backend-jade-eight-92.vercel.app
✅ Mobile responsiveness fixed (2 cards per row)
⏳ **Need to add environment variables for WhatsApp**

---

## 🎯 Quick Action Items

1. [ ] Add 7 environment variables to backend
2. [ ] Add 1 environment variable to frontend
3. [ ] Redeploy both projects
4. [ ] Test contact form
5. [ ] Verify WhatsApp notification received

**Estimated Time: 10 minutes**

---

## 📞 Support

If you need help:
1. Check Vercel deployment logs
2. Check Twilio console for API errors
3. Verify all environment variables are correct
4. Ensure Twilio sandbox is active

---

**After completing these steps, your WhatsApp notifications will work perfectly in production!** 🎉