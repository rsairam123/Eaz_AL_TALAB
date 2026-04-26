"""
Applications routes - Job application management
"""

from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from extensions import db
from models import Application, Job, User
import logging

logger = logging.getLogger(__name__)

applications_bp = Blueprint('applications', __name__)

@applications_bp.route('/', methods=['POST'])
@jwt_required()
def create_application():
    """Create a new job application"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if user.role != 'candidate':
            return jsonify({'error': 'Only candidates can apply for jobs'}), 403
        
        data = request.get_json()
        
        # Validate required fields
        if not data.get('job_id'):
            return jsonify({'error': 'job_id is required'}), 400
        
        job_id = data['job_id']
        
        # Check if job exists
        job = Job.query.get(job_id)
        if not job:
            return jsonify({'error': 'Job not found'}), 404
        
        if not job.is_active:
            return jsonify({'error': 'This job is no longer active'}), 400
        
        # Check if user already applied
        existing_application = Application.query.filter_by(
            user_id=current_user_id,
            job_id=job_id
        ).first()
        
        if existing_application:
            return jsonify({'error': 'You have already applied for this job'}), 409
        
        # Create new application
        new_application = Application(
            user_id=current_user_id,
            job_id=job_id,
            cover_letter=data.get('cover_letter', ''),
            resume_url=data.get('resume_url', ''),
            additional_info=data.get('additional_info', {})
        )
        
        db.session.add(new_application)
        
        # Increment job applications count
        job.applications_count += 1
        
        db.session.commit()
        
        logger.info(f'New application: User {user.email} applied for job {job.title}')
        
        return jsonify({
            'message': 'Application submitted successfully',
            'application': new_application.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        logger.error(f'Create application error: {str(e)}')
        return jsonify({'error': 'Failed to submit application', 'message': str(e)}), 500

@applications_bp.route('/my-applications', methods=['GET'])
@jwt_required()
def get_my_applications():
    """Get applications submitted by current user"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        status = request.args.get('status')
        
        query = Application.query.filter_by(user_id=current_user_id)
        
        if status:
            query = query.filter_by(status=status)
        
        pagination = query.order_by(Application.created_at.desc())\
            .paginate(page=page, per_page=per_page, error_out=False)
        
        applications = []
        for app in pagination.items:
            app_dict = app.to_dict()
            # Include job details
            job = Job.query.get(app.job_id)
            if job:
                app_dict['job'] = job.to_dict()
            applications.append(app_dict)
        
        return jsonify({
            'applications': applications,
            'total': pagination.total,
            'pages': pagination.pages,
            'current_page': page
        }), 200
        
    except Exception as e:
        logger.error(f'Get my applications error: {str(e)}')
        return jsonify({'error': 'Failed to get applications', 'message': str(e)}), 500

@applications_bp.route('/job/<int:job_id>', methods=['GET'])
@jwt_required()
def get_job_applications(job_id):
    """Get all applications for a specific job (employer only)"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        job = Job.query.get(job_id)
        
        if not job:
            return jsonify({'error': 'Job not found'}), 404
        
        # Check if user owns this job or is admin
        if job.employer_id != current_user_id and user.role != 'admin':
            return jsonify({'error': 'Unauthorized to view applications for this job'}), 403
        
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        status = request.args.get('status')
        
        query = Application.query.filter_by(job_id=job_id)
        
        if status:
            query = query.filter_by(status=status)
        
        pagination = query.order_by(Application.created_at.desc())\
            .paginate(page=page, per_page=per_page, error_out=False)
        
        applications = []
        for app in pagination.items:
            app_dict = app.to_dict()
            # Include candidate details
            candidate = User.query.get(app.user_id)
            if candidate:
                app_dict['candidate'] = {
                    'id': candidate.id,
                    'full_name': candidate.full_name,
                    'email': candidate.email,
                    'phone': candidate.phone
                }
            applications.append(app_dict)
        
        return jsonify({
            'applications': applications,
            'total': pagination.total,
            'pages': pagination.pages,
            'current_page': page
        }), 200
        
    except Exception as e:
        logger.error(f'Get job applications error: {str(e)}')
        return jsonify({'error': 'Failed to get applications', 'message': str(e)}), 500

@applications_bp.route('/<int:application_id>', methods=['GET'])
@jwt_required()
def get_application(application_id):
    """Get a specific application"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        application = Application.query.get(application_id)
        
        if not application:
            return jsonify({'error': 'Application not found'}), 404
        
        # Check authorization
        job = Job.query.get(application.job_id)
        if application.user_id != current_user_id and job.employer_id != current_user_id and user.role != 'admin':
            return jsonify({'error': 'Unauthorized to view this application'}), 403
        
        app_dict = application.to_dict()
        
        # Include job and candidate details
        if job:
            app_dict['job'] = job.to_dict()
        
        candidate = User.query.get(application.user_id)
        if candidate:
            app_dict['candidate'] = {
                'id': candidate.id,
                'full_name': candidate.full_name,
                'email': candidate.email,
                'phone': candidate.phone
            }
        
        return jsonify({
            'application': app_dict
        }), 200
        
    except Exception as e:
        logger.error(f'Get application error: {str(e)}')
        return jsonify({'error': 'Failed to get application', 'message': str(e)}), 500

@applications_bp.route('/<int:application_id>/status', methods=['PUT'])
@jwt_required()
def update_application_status(application_id):
    """Update application status (employer only)"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        application = Application.query.get(application_id)
        
        if not application:
            return jsonify({'error': 'Application not found'}), 404
        
        job = Job.query.get(application.job_id)
        
        # Check if user owns this job or is admin
        if job.employer_id != current_user_id and user.role != 'admin':
            return jsonify({'error': 'Unauthorized to update this application'}), 403
        
        data = request.get_json()
        
        if not data.get('status'):
            return jsonify({'error': 'status is required'}), 400
        
        # Validate status
        valid_statuses = ['pending', 'reviewed', 'shortlisted', 'rejected', 'hired']
        if data['status'] not in valid_statuses:
            return jsonify({'error': f'Invalid status. Must be one of: {", ".join(valid_statuses)}'}), 400
        
        application.status = data['status']
        db.session.commit()
        
        logger.info(f'Application {application_id} status updated to {data["status"]} by user {user.email}')
        
        return jsonify({
            'message': 'Application status updated successfully',
            'application': application.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        logger.error(f'Update application status error: {str(e)}')
        return jsonify({'error': 'Failed to update application status', 'message': str(e)}), 500

@applications_bp.route('/<int:application_id>', methods=['DELETE'])
@jwt_required()
def delete_application(application_id):
    """Delete an application (candidate only, own applications)"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        application = Application.query.get(application_id)
        
        if not application:
            return jsonify({'error': 'Application not found'}), 404
        
        # Check if user owns this application
        if application.user_id != current_user_id:
            return jsonify({'error': 'Unauthorized to delete this application'}), 403
        
        # Decrement job applications count
        job = Job.query.get(application.job_id)
        if job and job.applications_count > 0:
            job.applications_count -= 1
        
        db.session.delete(application)
        db.session.commit()
        
        logger.info(f'Application {application_id} deleted by user {user.email}')
        
        return jsonify({
            'message': 'Application deleted successfully'
        }), 200
        
    except Exception as e:
        db.session.rollback()
        logger.error(f'Delete application error: {str(e)}')
        return jsonify({'error': 'Failed to delete application', 'message': str(e)}), 500

# Made with Bob
