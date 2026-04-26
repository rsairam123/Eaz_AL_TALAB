"""
API Routes initialization
"""

from .auth import auth_bp
from .jobs import jobs_bp
from .applications import applications_bp
from .contact import contact_bp
from .services import services_bp

__all__ = ['auth_bp', 'jobs_bp', 'applications_bp', 'contact_bp', 'services_bp']

# Made with Bob
