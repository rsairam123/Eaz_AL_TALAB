# Contact Form Submission Guide

## ✅ What's Been Updated

### 1. Form Fields
**Mandatory Fields (Required):**
- ✓ Name *
- ✓ Phone Number *

**Optional Fields:**
- Email Address (optional)
- Subject (optional)
- Message (optional)

### 2. Contact Information
**Phone Numbers Added:**
- Primary: +91 6304016996
- Secondary: +91 7075018407

Both numbers are displayed on:
- Contact page
- Jobs page
- All contact sections

### 3. WhatsApp Integration
- WhatsApp button links to: +91 6304016996
- Contact form submissions trigger notifications

## 📱 How to View Contact Submissions

### Method 1: View All Submissions (Recommended)
Run this command anytime to see all contact form submissions:

```bash
cd backend
python view_contacts.py
```

**Example Output:**
```
================================================================================
CONTACT FORM SUBMISSIONS - Total: 3
================================================================================

#1 - Submission ID: 1
Name: RANGAMPETA SAIRAM
Email: sairam280403@gmail.com
Phone: 6304016996
Subject: We need Manpower
Message: aaaaaaaaaa
Status: new
Received: 2026-04-26 17:38:39
--------------------------------------------------------------------------------

#2 - Submission ID: 2
Name: John Doe
Email: 
Phone: 9876543210
Subject: 
Message: 
Status: new
Received: 2026-04-26 18:00:00
--------------------------------------------------------------------------------

SUMMARY:
Pending: 0
Contacted: 0
Resolved: 0
Total: 3
```

### Method 2: Check Backend Logs
When someone submits the form, detailed information is logged:

```bash
cd backend
tail -f logs/mahad_manpower.log
```

You'll see:
```
================================================================================
📱 NEW CONTACT FORM SUBMISSION
================================================================================
Name: Customer Name
Phone: 1234567890
Email: customer@email.com
Subject: Job Inquiry
Message: I'm interested in construction jobs
================================================================================
WhatsApp Notification URL: https://wa.me/916304016996?text=...
================================================================================
```

### Method 3: Direct Database Query
```bash
cd backend
sqlite3 instance/mahad_manpower.db "SELECT * FROM contacts ORDER BY created_at DESC LIMIT 10;"
```

## 🔔 WhatsApp Notifications

### Current Setup
When someone submits the contact form:

1. ✅ Data is saved to database
2. ✅ Detailed log entry is created
3. ✅ WhatsApp notification details are prepared
4. ✅ Notification includes: Name, Phone, Email, Subject, Message, Time

### Notification Format
```
🔔 *New Contact Form Submission*

👤 *Name:* [Customer Name]
📧 *Email:* [Customer Email or "Not provided"]
📱 *Phone:* [Customer Phone]
📋 *Subject:* [Subject or "Not provided"]

💬 *Message:*
[Customer Message or "No message provided"]

⏰ *Time:* [Submission Time]

---
Reply to this customer at: [Customer Phone]
```

### How to Get Notifications

**Option A: Manual Check (Current)**
- Run `python view_contacts.py` to see all submissions
- Check backend logs for real-time notifications

**Option B: Automatic WhatsApp (Requires Setup)**
To receive automatic WhatsApp messages, integrate with:

1. **Twilio WhatsApp API** (Recommended)
   - Sign up: https://www.twilio.com/whatsapp
   - Get API credentials
   - Add to `.env`:
     ```
     TWILIO_ACCOUNT_SID=your_sid
     TWILIO_AUTH_TOKEN=your_token
     TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
     ```

2. **WhatsApp Business API**
   - Official API
   - Requires business verification

## 📊 Testing the System

### Test Submission
1. Go to: http://localhost:3001/contact
2. Fill in:
   - Name: Test User (required)
   - Phone: 1234567890 (required)
   - Email: (optional)
   - Subject: (optional)
   - Message: (optional)
3. Click "Send Message"

### Verify Submission
```bash
cd backend
python view_contacts.py
```

You should see your test submission with all details.

### Check Logs
```bash
cd backend
tail -20 logs/mahad_manpower.log
```

Look for the notification details.

## 📞 Contact Details Summary

**Displayed Everywhere:**
- Phone 1: +91 6304016996
- Phone 2: +91 7075018407
- WhatsApp: +91 6304016996
- Email: sairam280403@gmail.com

**Locations:**
- Contact page (sidebar)
- Jobs page (contact section)
- Footer (if applicable)

## 🔧 Troubleshooting

### Not Seeing Submissions?
```bash
# Check if database exists
ls -la backend/instance/mahad_manpower.db

# View all contacts
cd backend && python view_contacts.py
```

### Backend Not Running?
```bash
# Check if backend is running
curl http://localhost:5002/api/health

# Restart backend
cd backend
python -c "from app import app; app.run(host='0.0.0.0', port=5002, debug=True)"
```

### Form Not Submitting?
- Check browser console for errors
- Verify backend is running on port 5002
- Check network tab in browser dev tools

## 📝 Important Notes

✓ All submissions are permanently saved to database
✓ No data is lost - everything is stored
✓ You can view submissions anytime with `python view_contacts.py`
✓ Only Name and Phone are required fields
✓ Email, Subject, and Message are optional
✓ Both phone numbers (6304016996 and 7075018407) are displayed everywhere

## 🚀 Next Steps (Optional)

If you want automatic WhatsApp notifications:
1. Choose a WhatsApp API service (Twilio recommended)
2. Sign up and get credentials
3. Update backend code with API integration
4. Test the integration

Need help? Just ask!