"""
Services routes - Services offered by Mahad Manpower
"""

from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from extensions import db
from models import Service, User
import logging

logger = logging.getLogger(__name__)

services_bp = Blueprint('services', __name__)

@services_bp.route('/', methods=['GET'])
def get_services():
    """Get all active services"""
    try:
        services = Service.query.filter_by(is_active=True)\
            .order_by(Service.order.asc())\
            .all()
        
        return jsonify({
            'services': [service.to_dict() for service in services]
        }), 200
        
    except Exception as e:
        logger.error(f'Get services error: {str(e)}')
        return jsonify({'error': 'Failed to get services', 'message': str(e)}), 500

@services_bp.route('/<slug>', methods=['GET'])
def get_service_by_slug(slug):
    """Get a service by slug"""
    try:
        service = Service.query.filter_by(slug=slug, is_active=True).first()
        
        if not service:
            return jsonify({'error': 'Service not found'}), 404
        
        return jsonify({
            'service': service.to_dict()
        }), 200
        
    except Exception as e:
        logger.error(f'Get service error: {str(e)}')
        return jsonify({'error': 'Failed to get service', 'message': str(e)}), 500

@services_bp.route('/', methods=['POST'])
@jwt_required()
def create_service():
    """Create a new service (admin only)"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if user.role != 'admin':
            return jsonify({'error': 'Only admins can create services'}), 403
        
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'slug']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        # Check if slug already exists
        if Service.query.filter_by(slug=data['slug']).first():
            return jsonify({'error': 'Service with this slug already exists'}), 409
        
        # Create new service
        new_service = Service(
            name=data['name'].strip(),
            slug=data['slug'].strip(),
            description=data.get('description', ''),
            icon=data.get('icon', ''),
            features=data.get('features', []),
            order=data.get('order', 0)
        )
        
        db.session.add(new_service)
        db.session.commit()
        
        logger.info(f'New service created: {new_service.name} by user {user.email}')
        
        return jsonify({
            'message': 'Service created successfully',
            'service': new_service.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        logger.error(f'Create service error: {str(e)}')
        return jsonify({'error': 'Failed to create service', 'message': str(e)}), 500

@services_bp.route('/<int:service_id>', methods=['PUT'])
@jwt_required()
def update_service(service_id):
    """Update a service (admin only)"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if user.role != 'admin':
            return jsonify({'error': 'Only admins can update services'}), 403
        
        service = Service.query.get(service_id)
        
        if not service:
            return jsonify({'error': 'Service not found'}), 404
        
        data = request.get_json()
        
        # Update fields
        if 'name' in data:
            service.name = data['name'].strip()
        if 'slug' in data:
            # Check if new slug conflicts with existing service
            existing = Service.query.filter_by(slug=data['slug']).first()
            if existing and existing.id != service_id:
                return jsonify({'error': 'Service with this slug already exists'}), 409
            service.slug = data['slug'].strip()
        if 'description' in data:
            service.description = data['description']
        if 'icon' in data:
            service.icon = data['icon']
        if 'features' in data:
            service.features = data['features']
        if 'is_active' in data:
            service.is_active = data['is_active']
        if 'order' in data:
            service.order = data['order']
        
        db.session.commit()
        
        logger.info(f'Service updated: {service.name} by user {user.email}')
        
        return jsonify({
            'message': 'Service updated successfully',
            'service': service.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        logger.error(f'Update service error: {str(e)}')
        return jsonify({'error': 'Failed to update service', 'message': str(e)}), 500

@services_bp.route('/<int:service_id>', methods=['DELETE'])
@jwt_required()
def delete_service(service_id):
    """Delete a service (admin only)"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if user.role != 'admin':
            return jsonify({'error': 'Only admins can delete services'}), 403
        
        service = Service.query.get(service_id)
        
        if not service:
            return jsonify({'error': 'Service not found'}), 404
        
        db.session.delete(service)
        db.session.commit()
        
        logger.info(f'Service deleted: {service.name} by user {user.email}')
        
        return jsonify({
            'message': 'Service deleted successfully'
        }), 200
        
    except Exception as e:
        db.session.rollback()
        logger.error(f'Delete service error: {str(e)}')
        return jsonify({'error': 'Failed to delete service', 'message': str(e)}), 500

# Made with Bob
