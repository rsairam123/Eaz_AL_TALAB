# How to View Contact Form Submissions

## Quick Method (Recommended)

Every time someone submits the contact form, you can view all submissions by running this simple command:

```bash
cd backend
python view_contacts.py
```

This will show you:
- All contact submissions with full details
- Name, Email, Phone, Subject, Message
- When each submission was received
- Total count of submissions

## Example Output

```
================================================================================
CONTACT FORM SUBMISSIONS - Total: 1
================================================================================

#1 - Submission ID: 1
Name: RANGAMPETA SAIRAM
Email: sairam280403@gmail.com
Phone: 6304016994
Subject: We need Manpower
Message: aaaaaaaaaa
Status: new
Received: 2026-04-26 17:38:39
--------------------------------------------------------------------------------

SUMMARY:
Pending: 0
Contacted: 0
Resolved: 0
Total: 1
```

## Alternative Methods

### Method 1: Direct Database Query

```bash
cd backend
sqlite3 instance/mahad_manpower.db "SELECT * FROM contacts ORDER BY created_at DESC;"
```

### Method 2: Export to CSV

Create a file `export_contacts.py` in the backend folder:

```python
import csv
from app import app, db
from models import Contact

with app.app_context():
    contacts = Contact.query.all()
    
    with open('contacts_export.csv', 'w', newline='', encoding='utf-8') as file:
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
    
    print(f"✓ Exported {len(contacts)} contacts to contacts_export.csv")
```

Then run:
```bash
cd backend
python export_contacts.py
```

This creates a CSV file you can open in Excel or Google Sheets.

## Important Notes

✓ All contact submissions are automatically saved to the database
✓ No data is ever lost - everything is permanently stored
✓ You can run `python view_contacts.py` anytime to see all submissions
✓ The database file is located at: `backend/instance/mahad_manpower.db`

## Need Help?

If you need to:
- Set up email notifications for new submissions
- Create an admin dashboard to view contacts
- Export data in different formats

Just let me know!