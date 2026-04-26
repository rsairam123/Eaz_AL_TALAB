"""
Seed script to populate the database with Dubai construction job listings
"""
import sys
from app import app, db
from extensions import bcrypt
from models import Job, User
from datetime import datetime, timedelta

def seed_jobs():
    with app.app_context():
        # Create or get admin user
        admin = User.query.filter_by(email='admin@eazaltalab.com').first()
        if not admin:
            admin = User(
                email='admin@eazaltalab.com',
                full_name='EAZ AL TALAB Admin',
                role='employer'
            )
            admin.password_hash = bcrypt.generate_password_hash('Admin@123').decode('utf-8')
            db.session.add(admin)
            db.session.commit()
            print(f"Created admin user: {admin.email}")
        
        # Dubai construction jobs data - NO SALARY INFORMATION
        construction_jobs = [
            {
                'title': 'Steel Fixer',
                'description': 'Experienced steel fixer required for high-rise construction project in Dubai. Must have expertise in reading blueprints, cutting and bending reinforcement bars, and installing steel reinforcement in concrete structures. Visa sponsorship provided.',
                'requirements': [
                    'Minimum 3 years experience in steel fixing',
                    'Ability to read and interpret construction drawings',
                    'Knowledge of safety procedures and UAE construction standards',
                    'Physical fitness for demanding work',
                    'Valid trade certification preferred'
                ],
                'benefits': 'Visa sponsorship, accommodation, medical insurance, annual leave',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '2-5 years'
            },
            {
                'title': 'AC Repair Technician',
                'description': 'Skilled AC technician needed for installation, maintenance, and repair of air conditioning systems in residential and commercial buildings across Dubai. Must be proficient in diagnosing and fixing AC issues. Full visa sponsorship provided.',
                'requirements': [
                    '2+ years experience in AC installation and repair',
                    'Knowledge of HVAC systems and Dubai climate requirements',
                    'Electrical troubleshooting skills',
                    'Valid driving license preferred',
                    'Technical certification in HVAC'
                ],
                'benefits': 'Visa sponsorship, transportation, accommodation, medical insurance',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '2-5 years'
            },
            {
                'title': 'Construction Foreman',
                'description': 'Experienced construction foreman to supervise and coordinate construction site activities in Dubai. Responsible for managing workers, ensuring quality standards, and maintaining safety protocols on major infrastructure projects.',
                'requirements': [
                    '5+ years experience in construction supervision',
                    'Proven leadership and management skills',
                    'Strong knowledge of construction methods and UAE regulations',
                    'Excellent communication skills in English',
                    'Safety certification required'
                ],
                'benefits': 'Visa sponsorship, accommodation, medical insurance, annual leave, performance bonus',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '5+ years'
            },
            {
                'title': 'General Construction Labour',
                'description': 'General construction laborers needed for various construction projects across Dubai. Duties include material handling, site cleaning, assisting skilled workers, and performing basic construction tasks. Visa sponsorship and accommodation provided.',
                'requirements': [
                    'Physical fitness and stamina',
                    'Willingness to work in outdoor conditions',
                    'Basic understanding of construction safety',
                    'Team player attitude',
                    'Previous construction experience preferred but not required'
                ],
                'benefits': 'Visa sponsorship, accommodation, medical insurance, meals',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '0-2 years'
            },
            {
                'title': 'Construction Helper',
                'description': 'Construction helpers required to assist skilled tradesmen and perform general labor tasks on construction sites in Dubai. Great opportunity for those starting their construction career with full visa sponsorship.',
                'requirements': [
                    'Physical fitness and willingness to work hard',
                    'Willingness to learn and follow instructions',
                    'Basic safety awareness',
                    'Reliable and punctual',
                    'No experience required - training provided'
                ],
                'benefits': 'Visa sponsorship, accommodation, medical insurance, meals, training',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '0-2 years'
            },
            {
                'title': 'Mason / Bricklayer',
                'description': 'Skilled mason required for residential and commercial construction projects in Dubai. Must be proficient in laying bricks, blocks, and stones, and creating quality masonry structures. Visa sponsorship provided.',
                'requirements': [
                    '3+ years experience in masonry work',
                    'Expertise in bricklaying and blockwork',
                    'Ability to read construction plans',
                    'Knowledge of different masonry techniques',
                    'Own tools preferred'
                ],
                'benefits': 'Visa sponsorship, accommodation, medical insurance, annual leave',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '2-5 years'
            },
            {
                'title': 'Electrician',
                'description': 'Licensed electrician needed for installation, maintenance, and repair of electrical systems in construction projects across Dubai. Must ensure all work complies with UAE electrical codes and safety standards.',
                'requirements': [
                    'Valid electrician license or certification',
                    '4+ years experience in electrical work',
                    'Knowledge of UAE electrical codes and regulations',
                    'Ability to read electrical drawings',
                    'Troubleshooting and problem-solving skills'
                ],
                'benefits': 'Visa sponsorship, accommodation, medical insurance, annual leave, tools allowance',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '2-5 years'
            },
            {
                'title': 'Carpenter',
                'description': 'Experienced carpenter required for formwork, finishing carpentry, and custom woodwork in construction projects across Dubai. Must be skilled in using various carpentry tools and equipment.',
                'requirements': [
                    '3+ years carpentry experience',
                    'Proficiency in formwork and finishing',
                    'Ability to read blueprints and technical drawings',
                    'Knowledge of wood materials and joinery',
                    'Own tools required'
                ],
                'benefits': 'Visa sponsorship, accommodation, medical insurance, annual leave',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '2-5 years'
            },
            {
                'title': 'Painter',
                'description': 'Professional painter needed for interior and exterior painting of residential and commercial buildings in Dubai. Must have expertise in surface preparation, paint application, and finishing techniques.',
                'requirements': [
                    '2+ years painting experience',
                    'Knowledge of different paint types and applications',
                    'Surface preparation and finishing skills',
                    'Attention to detail and quality',
                    'Ability to work at heights'
                ],
                'benefits': 'Visa sponsorship, accommodation, medical insurance, annual leave',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '2-5 years'
            },
            {
                'title': 'Plumber',
                'description': 'Licensed plumber required for installation and maintenance of plumbing systems in construction projects across Dubai. Must be skilled in pipe fitting, fixture installation, and system troubleshooting.',
                'requirements': [
                    'Valid plumbing license or certification',
                    '3+ years plumbing experience',
                    'Knowledge of UAE plumbing codes',
                    'Pipe fitting and welding skills',
                    'Problem-solving abilities'
                ],
                'benefits': 'Visa sponsorship, accommodation, medical insurance, annual leave, tools allowance',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '2-5 years'
            },
            {
                'title': 'Welder',
                'description': 'Certified welder needed for structural steel welding in construction projects across Dubai. Must be proficient in various welding techniques and able to work with different metals.',
                'requirements': [
                    'Valid welding certification',
                    '3+ years welding experience',
                    'Proficiency in MIG, TIG, and arc welding',
                    'Ability to read welding symbols and blueprints',
                    'Safety conscious and detail-oriented'
                ],
                'benefits': 'Visa sponsorship, accommodation, medical insurance, annual leave, safety equipment',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '2-5 years'
            },
            {
                'title': 'Tile Setter / Tiler',
                'description': 'Skilled tile setter required for installation of ceramic, porcelain, and stone tiles in residential and commercial projects in Dubai. Must ensure precise alignment and professional finish.',
                'requirements': [
                    '2+ years tile setting experience',
                    'Knowledge of different tile materials and installation methods',
                    'Precision and attention to detail',
                    'Ability to work with tile cutting tools',
                    'Understanding of waterproofing techniques'
                ],
                'benefits': 'Visa sponsorship, accommodation, medical insurance, annual leave',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '2-5 years'
            },
            {
                'title': 'Gypsum Carpenter / Drywall Installer',
                'description': 'Experienced gypsum carpenter needed for installation of drywall, false ceilings, and partition walls in Dubai construction projects. Must be skilled in measuring, cutting, and installing gypsum boards.',
                'requirements': [
                    '2+ years gypsum work experience',
                    'Knowledge of false ceiling systems',
                    'Ability to read architectural drawings',
                    'Precision in measurements and cutting',
                    'Finishing and taping skills'
                ],
                'benefits': 'Visa sponsorship, accommodation, medical insurance, annual leave',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '2-5 years'
            },
            {
                'title': 'Heavy Equipment Operator',
                'description': 'Licensed heavy equipment operator required to operate excavators, bulldozers, and other construction machinery on major Dubai projects. Must ensure safe and efficient operation of equipment.',
                'requirements': [
                    'Valid heavy equipment operator license',
                    '4+ years operating experience',
                    'Knowledge of equipment maintenance',
                    'UAE safety certification',
                    'Ability to work in various weather conditions'
                ],
                'benefits': 'Visa sponsorship, accommodation, medical insurance, annual leave, performance bonus',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '5+ years'
            },
            {
                'title': 'Scaffolder',
                'description': 'Experienced scaffolder needed to erect, modify, and dismantle scaffolding structures for construction projects in Dubai. Must ensure all scaffolding meets UAE safety standards.',
                'requirements': [
                    '2+ years scaffolding experience',
                    'Knowledge of scaffolding systems and UAE regulations',
                    'Safety certification required',
                    'Ability to work at heights',
                    'Physical fitness and strength'
                ],
                'benefits': 'Visa sponsorship, accommodation, medical insurance, annual leave, safety equipment',
                'industry': 'Construction',
                'job_type': 'Full-time',
                'experience_level': '2-5 years'
            }
        ]
        
        # Add jobs to database - ALL JOBS IN DUBAI, UAE
        jobs_added = 0
        for job_data in construction_jobs:
            # Check if job already exists
            existing_job = Job.query.filter_by(
                title=job_data['title'],
                employer_id=admin.id
            ).first()
            
            if not existing_job:
                # Convert requirements list to text
                requirements_text = '\n'.join([f"• {req}" for req in job_data['requirements']])
                
                job = Job(
                    title=job_data['title'],
                    company='EAZ AL TALAB',
                    location='Dubai',  # All jobs in Dubai
                    country='UAE',  # All jobs in UAE
                    industry=job_data['industry'],
                    job_type=job_data['job_type'],
                    experience_required=job_data['experience_level'],
                    salary_range=None,  # NO SALARY INFORMATION
                    description=job_data['description'],
                    requirements=requirements_text,
                    benefits=job_data['benefits'],
                    employer_id=admin.id,
                    is_active=True,
                    deadline=datetime.utcnow() + timedelta(days=90)
                )
                db.session.add(job)
                jobs_added += 1
        
        db.session.commit()
        print(f"\n✅ Successfully added {jobs_added} Dubai construction jobs to the database!")
        print(f"Total jobs in database: {Job.query.count()}")
        print("\nAdmin credentials:")
        print("Email: admin@eazaltalab.com")
        print("Password: Admin@123")
        print("\nAll jobs are located in Dubai, UAE with visa sponsorship")

if __name__ == '__main__':
    try:
        seed_jobs()
    except Exception as e:
        print(f"❌ Error seeding jobs: {str(e)}")
        sys.exit(1)

# Made with Bob
