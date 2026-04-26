"""
Jobs routes - CRUD operations for job postings
"""

from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from extensions import db
from models import Job, User, Application
from sqlalchemy import or_, and_
import logging

logger = logging.getLogger(__name__)

jobs_bp = Blueprint('jobs', __name__)

@jobs_bp.route('/', methods=['GET'])
def get_jobs():
    """Get all jobs with filtering and pagination"""
    try:
        # Get query parameters
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        country = request.args.get('country')
        industry = request.args.get('industry')
        job_type = request.args.get('job_type')
        search = request.args.get('search')
        
        # Build query
        query = Job.query.filter_by(is_active=True)
        
        # Apply filters
        if country:
            query = query.filter_by(country=country)
        if industry:
            query = query.filter_by(industry=industry)
        if job_type:
            query = query.filter_by(job_type=job_type)
        if search:
            search_term = f'%{search}%'
            query = query.filter(
                or_(
                    Job.title.ilike(search_term),
                    Job.company.ilike(search_term),
                    Job.description.ilike(search_term)
                )
            )
        
        # Order by creation date (newest first)
        query = query.order_by(Job.created_at.desc())
        
        # Paginate
        pagination = query.paginate(page=page, per_page=per_page, error_out=False)
        
        jobs = [job.to_dict() for job in pagination.items]
        
        return jsonify({
            'jobs': jobs,
            'total': pagination.total,
            'pages': pagination.pages,
            'current_page': page,
            'per_page': per_page
        }), 200
        
    except Exception as e:
        logger.error(f'Get jobs error: {str(e)}')
        return jsonify({'error': 'Failed to get jobs', 'message': str(e)}), 500

@jobs_bp.route('/<int:job_id>', methods=['GET'])
def get_job(job_id):
    """Get a single job by ID"""
    try:
        job = Job.query.get(job_id)
        
        if not job:
            return jsonify({'error': 'Job not found'}), 404
        
        # Increment view count
        job.views_count += 1
        db.session.commit()
        
        return jsonify({
            'job': job.to_dict()
        }), 200
        
    except Exception as e:
        logger.error(f'Get job error: {str(e)}')
        return jsonify({'error': 'Failed to get job', 'message': str(e)}), 500

@jobs_bp.route('/', methods=['POST'])
@jwt_required()
def create_job():
    """Create a new job posting (employer only)"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if user.role not in ['employer', 'admin']:
            return jsonify({'error': 'Only employers can post jobs'}), 403
        
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['title', 'company', 'location', 'country', 'description']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        # Create new job
        new_job = Job(
            title=data['title'].strip(),
            company=data['company'].strip(),
            location=data['location'].strip(),
            country=data['country'].strip(),
            industry=data.get('industry', '').strip(),
            job_type=data.get('job_type', 'Full-time'),
            experience_required=data.get('experience_required', ''),
            salary_range=data.get('salary_range', ''),
            description=data['description'].strip(),
            requirements=data.get('requirements', ''),
            benefits=data.get('benefits', ''),
            skills=data.get('skills', []),
            employer_id=current_user_id,
            deadline=data.get('deadline')
        )
        
        db.session.add(new_job)
        db.session.commit()
        
        logger.info(f'New job created: {new_job.title} by user {user.email}')
        
        return jsonify({
            'message': 'Job created successfully',
            'job': new_job.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        logger.error(f'Create job error: {str(e)}')
        return jsonify({'error': 'Failed to create job', 'message': str(e)}), 500

@jobs_bp.route('/<int:job_id>', methods=['PUT'])
@jwt_required()
def update_job(job_id):
    """Update a job posting (employer only, own jobs)"""
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
            return jsonify({'error': 'Unauthorized to update this job'}), 403
        
        data = request.get_json()
        
        # Update fields
        if 'title' in data:
            job.title = data['title'].strip()
        if 'company' in data:
            job.company = data['company'].strip()
        if 'location' in data:
            job.location = data['location'].strip()
        if 'country' in data:
            job.country = data['country'].strip()
        if 'industry' in data:
            job.industry = data['industry'].strip()
        if 'job_type' in data:
            job.job_type = data['job_type']
        if 'experience_required' in data:
            job.experience_required = data['experience_required']
        if 'salary_range' in data:
            job.salary_range = data['salary_range']
        if 'description' in data:
            job.description = data['description'].strip()
        if 'requirements' in data:
            job.requirements = data['requirements']
        if 'benefits' in data:
            job.benefits = data['benefits']
        if 'skills' in data:
            job.skills = data['skills']
        if 'is_active' in data:
            job.is_active = data['is_active']
        if 'deadline' in data:
            job.deadline = data['deadline']
        
        db.session.commit()
        
        logger.info(f'Job updated: {job.title} by user {user.email}')
        
        return jsonify({
            'message': 'Job updated successfully',
            'job': job.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        logger.error(f'Update job error: {str(e)}')
        return jsonify({'error': 'Failed to update job', 'message': str(e)}), 500

@jobs_bp.route('/<int:job_id>', methods=['DELETE'])
@jwt_required()
def delete_job(job_id):
    """Delete a job posting (employer only, own jobs)"""
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
            return jsonify({'error': 'Unauthorized to delete this job'}), 403
        
        db.session.delete(job)
        db.session.commit()
        
        logger.info(f'Job deleted: {job.title} by user {user.email}')
        
        return jsonify({
            'message': 'Job deleted successfully'
        }), 200
        
    except Exception as e:
        db.session.rollback()
        logger.error(f'Delete job error: {str(e)}')
        return jsonify({'error': 'Failed to delete job', 'message': str(e)}), 500

@jobs_bp.route('/my-jobs', methods=['GET'])
@jwt_required()
def get_my_jobs():
    """Get jobs posted by current employer"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if user.role not in ['employer', 'admin']:
            return jsonify({'error': 'Only employers can view their jobs'}), 403
        
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        
        pagination = Job.query.filter_by(employer_id=current_user_id)\
            .order_by(Job.created_at.desc())\
            .paginate(page=page, per_page=per_page, error_out=False)
        
        jobs = [job.to_dict() for job in pagination.items]
        
        return jsonify({
            'jobs': jobs,
            'total': pagination.total,
            'pages': pagination.pages,
            'current_page': page
        }), 200
        
    except Exception as e:
        logger.error(f'Get my jobs error: {str(e)}')
        return jsonify({'error': 'Failed to get jobs', 'message': str(e)}), 500

@jobs_bp.route('/countries', methods=['GET'])
def get_countries():
    """Get list of countries with job postings"""
    try:
        countries = db.session.query(Job.country, db.func.count(Job.id))\
            .filter_by(is_active=True)\
            .group_by(Job.country)\
            .all()
        
        result = [{'country': country, 'count': count} for country, count in countries]
        
        return jsonify({
            'countries': result
        }), 200
        
    except Exception as e:
        logger.error(f'Get countries error: {str(e)}')
        return jsonify({'error': 'Failed to get countries', 'message': str(e)}), 500

@jobs_bp.route('/industries', methods=['GET'])
def get_industries():
    """Get list of industries with job postings"""
    try:
        industries = db.session.query(Job.industry, db.func.count(Job.id))\
            .filter(and_(Job.is_active == True, Job.industry != None, Job.industry != ''))\
            .group_by(Job.industry)\
            .all()
        
        result = [{'industry': industry, 'count': count} for industry, count in industries]
        
        return jsonify({
            'industries': result
        }), 200
        
    except Exception as e:
        logger.error(f'Get industries error: {str(e)}')
        return jsonify({'error': 'Failed to get industries', 'message': str(e)}), 500

# Made with Bob
