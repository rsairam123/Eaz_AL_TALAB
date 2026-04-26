# Contact Form Submissions

## Where Contact Data is Stored

When users submit the contact form on your website, their information is automatically saved to the database in the `contacts` table.

### Database Table: `contacts`

Each submission includes:
- **id**: Unique identifier
- **name**: User's full name
- **email**: User's email address
- **phone**: User's phone number
- **subject**: Subject of the inquiry
- **message**: Detailed message from the user
- **status**: Status of the inquiry (pending, contacted, resolved)
- **created_at**: Timestamp when the submission was received
- **updated_at**: Last update timestamp

## Viewing Contact Submissions

### Option 1: Direct Database Access

You can view all contact submissions by accessing the SQLite database directly:

```bash
cd backend
sqlite3 instance/mahad_manpower.db
```

Then run SQL queries:
```sql
-- View all contacts
SELECT * FROM contacts ORDER BY created_at DESC;

-- View pending contacts
SELECT * FROM contacts WHERE status = 'pending';

-- Count total submissions
SELECT COUNT(*) FROM contacts;
```

### Option 2: API Endpoint (Admin Only)

The backend provides an API endpoint to fetch contact submissions:

**Endpoint**: `GET /api/contact`

**Authentication**: Requires JWT token with admin role

**Example Response**:
```json
{
  "contacts": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+91 1234567890",
      "subject": "Job Inquiry",
      "message": "I am interested in construction jobs...",
      "status": "pending",
      "created_at": "2024-01-15T10:30:00"
    }
  ],
  "total": 1,
  "page": 1,
  "per_page": 20
}
```

### Option 3: Python Script

You can create a simple Python script to view contacts:

```python
from app import app, db
from models import Contact

with app.app_context():
    contacts = Contact.query.order_by(Contact.created_at.desc()).all()
    
    print(f"\nTotal Contact Submissions: {len(contacts)}\n")
    print("-" * 80)
    
    for contact in contacts:
        print(f"ID: {contact.id}")
        print(f"Name: {contact.name}")
        print(f"Email: {contact.email}")
        print(f"Phone: {contact.phone}")
        print(f"Subject: {contact.subject}")
        print(f"Message: {contact.message}")
        print(f"Status: {contact.status}")
        print(f"Received: {contact.created_at}")
        print("-" * 80)
```

Save this as `view_contacts.py` in the backend folder and run:
```bash
python view_contacts.py
```

## Email Notifications (Optional)

To receive email notifications when someone submits the contact form, you can configure email settings in the backend:

1. Update `.env` file with SMTP settings:
```env
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USE_TLS=True
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_DEFAULT_SENDER=your-email@gmail.com
NOTIFICATION_EMAIL=sairam280403@gmail.com
```

2. The backend will automatically send email notifications to `NOTIFICATION_EMAIL` when a new contact form is submitted.

## Managing Contact Status

You can update the status of contact submissions through the API:

**Endpoint**: `PUT /api/contact/{contact_id}`

**Body**:
```json
{
  "status": "contacted"
}
```

**Status Options**:
- `pending`: New submission (default)
- `contacted`: You have reached out to the person
- `resolved`: Issue/inquiry has been resolved

## Export Contacts

To export all contacts to a CSV file:

```python
import csv
from app import app, db
from models import Contact

with app.app_context():
    contacts = Contact.query.all()
    
    with open('contacts_export.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['ID', 'Name', 'Email', 'Phone', 'Subject', 'Message', 'Status', 'Date'])
        
        for contact in contacts:
            writer.writerow([
                contact.id,
                contact.name,
                contact.email,
                contact.phone,
                contact.subject,
                contact.message,
                contact.status,
                contact.created_at
            ])
    
    print(f"Exported {len(contacts)} contacts to contacts_export.csv")
```

## Important Notes

- All contact submissions are stored securely in the database
- No data is lost - all submissions are permanently saved
- You can access this data anytime through the database or API
- Consider setting up email notifications for real-time alerts
- Regularly backup your database to prevent data loss