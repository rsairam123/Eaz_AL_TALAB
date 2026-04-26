# WhatsApp Notifications for Contact Form

## Overview

When someone submits the contact form on your website, a WhatsApp notification is automatically prepared and logged. The notification includes all the contact details.

## Current Setup

**WhatsApp Number:** +91 6304016996

When a contact form is submitted, the system:
1. ✓ Saves the data to the database
2. ✓ Prepares a formatted WhatsApp message
3. ✓ Logs the notification details

## Notification Format

When someone submits the form, you'll receive a notification like this:

```
🔔 *New Contact Form Submission*

👤 *Name:* [Customer Name]
📧 *Email:* [Customer Email]
📱 *Phone:* [Customer Phone]
📋 *Subject:* [Subject]

💬 *Message:*
[Customer Message]

⏰ *Time:* [Submission Time]
```

## How to Receive Notifications

### Option 1: Manual Check (Current)
Run this command to see all submissions:
```bash
cd backend
python view_contacts.py
```

### Option 2: Automatic WhatsApp (Requires Setup)

To receive automatic WhatsApp messages, you need to integrate with a WhatsApp Business API service:

#### Recommended Services:

1. **Twilio WhatsApp API** (Most Popular)
   - Sign up at: https://www.twilio.com/whatsapp
   - Get API credentials
   - Add to `.env`:
     ```
     TWILIO_ACCOUNT_SID=your_account_sid
     TWILIO_AUTH_TOKEN=your_auth_token
     TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
     ```

2. **WhatsApp Business API**
   - Official WhatsApp Business API
   - Requires business verification
   - More features but complex setup

3. **Other Services:**
   - MessageBird
   - Vonage (Nexmo)
   - 360Dialog

## Testing the Notification

1. Go to your website's contact page
2. Fill out the form with test data
3. Submit the form
4. Check the backend logs:
   ```bash
   cd backend
   tail -f logs/mahad_manpower.log
   ```

You should see:
```
INFO - New contact submission from: [email]
INFO - WhatsApp notification prepared for: [name]
```

## Contact Details on Website

The Jobs page now displays:

📞 **Phone Numbers:**
- +91 6304016996
- +91 7075018407

💬 **WhatsApp:**
- Click to chat: +91 6304016996

📧 **Email:**
- Contact form available

## Next Steps (Optional)

If you want automatic WhatsApp notifications:

1. Choose a WhatsApp API service (Twilio recommended)
2. Sign up and get API credentials
3. Update the backend code with API integration
4. Test the integration

Let me know if you need help setting up automatic WhatsApp notifications!