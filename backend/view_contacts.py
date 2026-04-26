"""
Simple script to view all contact form submissions
"""
from app import app, db
from models import Contact

def view_contacts():
    with app.app_context():
        contacts = Contact.query.order_by(Contact.created_at.desc()).all()
        
        print("\n" + "="*80)
        print(f"CONTACT FORM SUBMISSIONS - Total: {len(contacts)}")
        print("="*80 + "\n")
        
        if not contacts:
            print("No contact submissions yet.\n")
            return
        
        for i, contact in enumerate(contacts, 1):
            print(f"#{i} - Submission ID: {contact.id}")
            print(f"Name: {contact.name}")
            print(f"Email: {contact.email}")
            print(f"Phone: {contact.phone}")
            print(f"Subject: {contact.subject}")
            print(f"Message: {contact.message}")
            print(f"Status: {contact.status}")
            print(f"Received: {contact.created_at}")
            print("-" * 80)
        
        # Summary by status
        pending = Contact.query.filter_by(status='pending').count()
        contacted = Contact.query.filter_by(status='contacted').count()
        resolved = Contact.query.filter_by(status='resolved').count()
        
        print("\nSUMMARY:")
        print(f"Pending: {pending}")
        print(f"Contacted: {contacted}")
        print(f"Resolved: {resolved}")
        print(f"Total: {len(contacts)}\n")

if __name__ == '__main__':
    view_contacts()

# Made with Bob
