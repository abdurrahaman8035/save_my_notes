# Installation Guide

Follow the steps below to install and run the Save My Notes Application locally on your machine.

## Prerequisites
- Python (version 3.7 or higher)
- Django (version 3.2 or higher)
- PostgreSQL (or any other compatible database)

## Installation Steps
1. Clone the repository:
   ```
   git clone https://github.com/abdurrahaman8035/save_my_notes.git
   ```
2. Create a virtual environment:
   ```
   python -m venv env
   ```
3. Activate the virtual environment:
   - For Windows:
     ```
     .\env\Scripts\activate
     ```
   - For macOS/Linux:
     ```
     source env/bin/activate
     ```
4. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
5. Set up the database:
   - Create a new PostgreSQL database
   - Update the database configuration in the settings.py file
   ```
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': 'your_database_name',
           'USER': 'your_database_user',
           'PASSWORD': 'your_database_password',
           'HOST': 'localhost',
           'PORT': '5432',
       }
   }
   ```
6. Apply database migrations:
   ```
   python manage.py migrate
   ```
7. Run the development server:
   ```
   python manage.py runserver
   ```
8. Access the application at http://localhost:8000


## Troubleshooting
- If you encounter any issues during the installation process, please refer to the project's issue tracker on GitHub or seek help from the community.
```