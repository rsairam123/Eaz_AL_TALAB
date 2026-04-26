"""
Contact routes - Contact form submissions
"""

from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from extensions import db
from models import Contact, User
import re
import logging
import os
from twilio.rest import Client
from datetime import datetime

logger = logging.getLogger(__name__)

def send_whatsapp_notification(contact_data):
    """Send automatic WhatsApp notification using Twilio when contact form is submitted"""
    try:
        # Get Twilio credentials from environment variables
        account_sid = os.getenv('TWILIO_ACCOUNT_SID')
        auth_token = os.getenv('TWILIO_AUTH_TOKEN')
        whatsapp_from = os.getenv('TWILIO_WHATSAPP_FROM', 'whatsapp:+14155238886')
        whatsapp_to = os.getenv('TWILIO_WHATSAPP_TO', 'whatsapp:+916304016994')
        
        # Check if Twilio credentials are configured
        if not account_sid or not auth_token:
            logger.warning("Twilio credentials not configured. Skipping WhatsApp notification.")
            return False
        
        # Check if using placeholder credentials
        if account_sid == 'your_twilio_account_sid_here' or auth_token == 'your_twilio_auth_token_here':
            logger.warning("Twilio credentials are placeholder values. Please update backend/.env with real credentials.")
            return False
        
        # Format the message
        message_body = f"""🔔 New Contact Form Submission

👤 Name: {contact_data['name']}
📧 Email: {contact_data.get('email', 'Not provided')}
📱 Phone: {contact_data.get('phone', 'Not provided')}
📋 Subject: {contact_data.get('subject', 'Not provided')}

💬 Message:
{contact_data.get('message', 'No message provided')}

⏰ Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

---
Reply to customer at: {contact_data.get('phone', 'N/A')}"""
        
        # Initialize Twilio client
        client = Client(account_sid, auth_token)
        
        # Send WhatsApp message
        message = client.messages.create(
            from_=whatsapp_from,
            body=message_body,
            to=whatsapp_to
        )
        
        logger.info(f"=" * 80)
        logger.info(f"✅ WHATSAPP MESSAGE SENT SUCCESSFULLY")
        logger.info(f"=" * 80)
        logger.info(f"Message SID: {message.sid}")
        logger.info(f"Status: {message.status}")
        logger.info(f"To: {whatsapp_to}")
        logger.info(f"From: {whatsapp_from}")
        logger.info(f"=" * 80)
        logger.info(f"📱 NEW CONTACT FORM SUBMISSION")
        logger.info(f"=" * 80)
        logger.info(f"Name: {contact_data['name']}")
        logger.info(f"Phone: {contact_data.get('phone', 'Not provided')}")
        logger.info(f"Email: {contact_data.get('email', 'Not provided')}")
        logger.info(f"Subject: {contact_data.get('subject', 'Not provided')}")
        logger.info(f"Message: {contact_data.get('message', 'No message')}")
        logger.info(f"=" * 80)
        
        return True
        
    except Exception as e:
        logger.error(f"=" * 80)
        logger.error(f"❌ WHATSAPP NOTIFICATION ERROR")
        logger.error(f"=" * 80)
        logger.error(f"Error: {str(e)}")
        logger.error(f"=" * 80)
        logger.info(f"Contact form data was still saved to database.")
        logger.info(f"IMPORTANT: You need to join the Twilio WhatsApp Sandbox first!")
        logger.info(f"Steps:")
        logger.info(f"1. Open WhatsApp on your phone (+91 6304016994)")
        logger.info(f"2. Send a message to: +1 415 523 8886")
        logger.info(f"3. Message text: join <your-sandbox-code>")
        logger.info(f"4. Get your sandbox code from: https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn")
        logger.info(f"=" * 80)
        return False

contact_bp = Blueprint('contact', __name__)

def validate_email(email):
    """Validate email format"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

@contact_bp.route('/', methods=['POST'])
def create_contact():
    """Submit a contact form"""
    try:
        data = request.get_json()
        
        # Validate required fields - only name and phone are mandatory
        required_fields = ['name', 'phone']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        name = data['name'].strip()
        phone = data['phone'].strip()
        email = data.get('email', '').strip().lower() if data.get('email') else ''
        message = data.get('message', '').strip() if data.get('message') else ''
        
        # Validate email only if provided
        if email and not validate_email(email):
            return jsonify({'error': 'Invalid email format'}), 400
        
        # Validate phone number
        if len(phone) < 10:
            return jsonify({'error': 'Phone number must be at least 10 digits'}), 400
        
        # Create new contact submission
        new_contact = Contact(
            name=name,
            email=email,
            phone=data.get('phone', '').strip(),
            subject=data.get('subject', '').strip(),
            message=message
        )
        
        db.session.add(new_contact)
        db.session.commit()
        
        logger.info(f'New contact submission from: {email}')
        
        # Send WhatsApp notification
        contact_dict = new_contact.to_dict()
        send_whatsapp_notification(contact_dict)
        
        return jsonify({
            'message': 'Contact form submitted successfully. We will get back to you soon.',
            'contact': contact_dict
        }), 201
        
    except Exception as e:
        db.session.rollback()
        logger.error(f'Create contact error: {str(e)}')
        return jsonify({'error': 'Failed to submit contact form', 'message': str(e)}), 500

@contact_bp.route('/', methods=['GET'])
@jwt_required()
def get_contacts():
    """Get all contact submissions (admin only)"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if user.role != 'admin':
            return jsonify({'error': 'Only admins can view contact submissions'}), 403
        
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        status = request.args.get('status')
        
        query = Contact.query
        
        if status:
            query = query.filter_by(status=status)
        
        pagination = query.order_by(Contact.created_at.desc())\
            .paginate(page=page, per_page=per_page, error_out=False)
        
        contacts = [contact.to_dict() for contact in pagination.items]
        
        return jsonify({
            'contacts': contacts,
            'total': pagination.total,
            'pages': pagination.pages,
            'current_page': page
        }), 200
        
    except Exception as e:
        logger.error(f'Get contacts error: {str(e)}')
        return jsonify({'error': 'Failed to get contacts', 'message': str(e)}), 500

@contact_bp.route('/<int:contact_id>', methods=['GET'])
@jwt_required()
def get_contact(contact_id):
    """Get a specific contact submission (admin only)"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if user.role != 'admin':
            return jsonify({'error': 'Only admins can view contact submissions'}), 403
        
        contact = Contact.query.get(contact_id)
        
        if not contact:
            return jsonify({'error': 'Contact not found'}), 404
        
        return jsonify({
            'contact': contact.to_dict()
        }), 200
        
    except Exception as e:
        logger.error(f'Get contact error: {str(e)}')
        return jsonify({'error': 'Failed to get contact', 'message': str(e)}), 500

@contact_bp.route('/<int:contact_id>/status', methods=['PUT'])
@jwt_required()
def update_contact_status(contact_id):
    """Update contact submission status (admin only)"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if user.role != 'admin':
            return jsonify({'error': 'Only admins can update contact status'}), 403
        
        contact = Contact.query.get(contact_id)
        
        if not contact:
            return jsonify({'error': 'Contact not found'}), 404
        
        data = request.get_json()
        
        if not data.get('status'):
            return jsonify({'error': 'status is required'}), 400
        
        # Validate status
        valid_statuses = ['new', 'in_progress', 'resolved']
        if data['status'] not in valid_statuses:
            return jsonify({'error': f'Invalid status. Must be one of: {", ".join(valid_statuses)}'}), 400
        
        contact.status = data['status']
        db.session.commit()
        
        logger.info(f'Contact {contact_id} status updated to {data["status"]} by user {user.email}')
        
        return jsonify({
            'message': 'Contact status updated successfully',
            'contact': contact.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        logger.error(f'Update contact status error: {str(e)}')
        return jsonify({'error': 'Failed to update contact status', 'message': str(e)}), 500

@contact_bp.route('/<int:contact_id>', methods=['DELETE'])
@jwt_required()
def delete_contact(contact_id):
    """Delete a contact submission (admin only)"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if user.role != 'admin':
            return jsonify({'error': 'Only admins can delete contact submissions'}), 403
        
        contact = Contact.query.get(contact_id)
        
        if not contact:
            return jsonify({'error': 'Contact not found'}), 404
        
        db.session.delete(contact)
        db.session.commit()
        
        logger.info(f'Contact {contact_id} deleted by user {user.email}')
        
        return jsonify({
            'message': 'Contact deleted successfully'
        }), 200
        
    except Exception as e:
        db.session.rollback()
        logger.error(f'Delete contact error: {str(e)}')
        return jsonify({'error': 'Failed to delete contact', 'message': str(e)}), 500

# Made with Bob
