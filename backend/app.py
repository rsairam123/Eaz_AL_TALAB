"""
Mahad Manpower - Backend API
Flask application with JWT authentication, RESTful endpoints, and PostgreSQL database
"""

from flask import Flask, jsonify
from datetime import timedelta
import logging
from logging.handlers import RotatingFileHandler
import os
from dotenv import load_dotenv
from extensions import db, bcrypt, jwt, migrate, cors

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
app.url_map.strict_slashes = False

# Configuration
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-secret-key-change-in-production')

# Use /tmp directory for SQLite on Vercel serverless
if os.getenv('VERCEL'):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/mahad_manpower.db'
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///mahad_manpower.db')

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'jwt-secret-key-change-in-production')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=24)

# Initialize extensions with app
db.init_app(app)
bcrypt.init_app(app)
jwt.init_app(app)
migrate.init_app(app, db)

# CORS configuration
cors.init_app(app, resources={
    r"/api/*": {
        "origins": [
            "http://localhost:3000",
            "http://localhost:3001",
            "http://localhost:5173",
            "https://frontend-rouge-two-73.vercel.app",
            "https://*.vercel.app"
        ],
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True
    }
})

# Logging configuration - Skip file logging on Vercel
if not os.getenv('VERCEL'):
    if not os.path.exists('logs'):
        os.mkdir('logs')
    
    file_handler = RotatingFileHandler('logs/mahad_manpower.log', maxBytes=10240000, backupCount=10)
    file_handler.setFormatter(logging.Formatter(
        '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'
    ))
    file_handler.setLevel(logging.INFO)
    app.logger.addHandler(file_handler)

app.logger.setLevel(logging.INFO)
app.logger.info('Mahad Manpower API startup')

# Register blueprints (import here to avoid circular imports)
from routes import auth_bp, jobs_bp, applications_bp, contact_bp, services_bp

app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(jobs_bp, url_prefix='/api/jobs')
app.register_blueprint(applications_bp, url_prefix='/api/applications')
app.register_blueprint(contact_bp, url_prefix='/api/contact')
app.register_blueprint(services_bp, url_prefix='/api/services')

# Error handlers
@app.errorhandler(400)
def bad_request(error):
    app.logger.error(f'Bad request: {error}')
    return jsonify({'error': 'Bad request', 'message': str(error)}), 400

@app.errorhandler(401)
def unauthorized(error):
    app.logger.error(f'Unauthorized: {error}')
    return jsonify({'error': 'Unauthorized', 'message': 'Authentication required'}), 401

@app.errorhandler(404)
def not_found(error):
    app.logger.error(f'Not found: {error}')
    return jsonify({'error': 'Not found', 'message': 'Resource not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    app.logger.error(f'Internal error: {error}')
    db.session.rollback()
    return jsonify({'error': 'Internal server error', 'message': 'An unexpected error occurred'}), 500

# Health check endpoint
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'message': 'Mahad Manpower API is running'
    }), 200

# Root endpoint
@app.route('/')
def index():
    return jsonify({
        'message': 'Mahad Manpower API',
        'version': '1.0.0',
        'endpoints': {
            'auth': '/api/auth',
            'jobs': '/api/jobs',
            'applications': '/api/applications',
            'contact': '/api/contact',
            'services': '/api/services'
        }
    }), 200

# Initialize database tables (for Vercel serverless)
with app.app_context():
    import models
    try:
        db.create_all()
        app.logger.info('Database tables created successfully')
    except Exception as e:
        app.logger.error(f'Error creating database tables: {e}')

if __name__ == '__main__':
    app.run(
        host=os.getenv('HOST', '0.0.0.0'),
        port=int(os.getenv('PORT', 5000)),
        debug=os.getenv('FLASK_ENV') == 'development'
    )

# Made with Bob
