# Save My Notes

This is a System designed for Students to keep track of their learning progress.

## Features
- Add new topics
- Add new entries for each topic
- View and modify entries

## Installation
Follow the steps below to install and run the project locally.

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
   ```
   python manage.py migrate
   ```
6. Run the development server:
   ```
   python manage.py runserver
   ```
7. Access the application at http://localhost:8000

## Usage
- Register as a Student
- Log in with your credentials
- Explore the available features and functionalities
- Add a new topic
- Add a single or multiple entries under each topic

## Contributing
Contributions are welcome! To contribute to the project, follow these steps:
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License
This project is licensed under the MIT License LICENSE.
```