# Save My Notes - Django App

Save My Notes is a Django app designed to help students keep track of their learning journey. It allows users to register, create topics, and add entries under each topic to organize their study notes effectively.

## Features

- User Registration: Users can create an account to access the app and save their notes.
- Topic Creation: Users can create different topics to categorize their study notes.
- Note Entries: Users can add entries under each topic to document their learning progress.
- Note Management: Users can view, edit, and delete their notes.
- User Authentication: The app provides secure user authentication and authorization.

## Installation

Follow these steps to set up Save My Notes on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/save-my-notes.git
   ```

2. Navigate to the project directory:

   ```bash
   cd save-my-notes
   ```

3. Create and activate a virtual environment:

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```

4. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. Perform database migrations:

   ```bash
   python manage.py migrate
   ```

6. Create a superuser account:

   ```bash
   python manage.py createsuperuser
   ```

7. Start the development server:

   ```bash
   python manage.py runserver
   ```

8. Open your web browser and access the app at `http://localhost:8000`.

## Usage

1. Register a new user account by clicking on the "Register" link on the login page.

2. Log in using your credentials.

3. After logging in, you will be redirected to the home page where you can create new topics.

4. Click on the "Add Topic" button and enter the details of the topic.

5. Once a topic is created, you can click on it to view, add, edit, and delete entries under that topic.

6. To add a new entry, click on the "Add Entry" button, provide a title and content for the entry, and click "Save".

7. To edit or delete an entry, click on the corresponding options next to each entry.

8. You can also edit or delete topics using the options available on the topic list page.

## Contributing

Contributions to Save My Notes are welcome and encouraged. Here's how you can contribute:

1. Fork the repository on GitHub.

2. Create a new branch for your feature or bug fix.

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them with descriptive commit messages.

4. Push your changes to your branch.

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request on the original repository.

Please ensure that your code follows the project's coding conventions and includes necessary tests.

## License

The Save My Notes app is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).

