# Book-Binder

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Overview

Book-Binder is a web-based platform designed to cater to the diverse needs and interests of book enthusiasts. It offers a digital space for users to create accounts, log in, and keep track of their favorite books. Beyond being a website, it's a thriving community for bookworms to unite and explore the captivating world of literature.
## Table of Contents

- [Description](#description)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Links](#links)
- [Credits](#credits)
- [Report Issue](#report-issue)
- [License](#license)

## Description
Book-Binder is not just a website; it's a thriving community where bookworms unite to explore and celebrate the captivating world of literature. Whether you're an avid reader, aspiring author, or simply someone with a passion for books, Book-Binder offers a digital haven for all things literary.

**Key Features:**

1. **User Registration and Authentication:** Sign up effortlessly, with robust email validation and password security.

2. **Book Profiles:** Create your personal reading space with customizable profiles for each book and to upload book cover pictures.

3. **Centralized Homepage:** Customize the central feed to be filled with your favorite books, currently reading books, and a record of your past books.

4. **Post Management:** Edit your posts and update your book pictures to tailor your Book-Binder experience.

5. **File Uploads:** Enhance your posts and projects with images, including book covers and related visuals.

6. **Authentication and Security:** Feel secure with user authentication ensuring access control, and passwords securely hashed using bcrypt.

7. **Intuitive Navigation:** Easily explore different sections of the platform with the user-friendly header menu.
## Technology Stack

Book-Binder is built using a tech stack that includes:

- **Node.js:** Node.js is a runtime environment that allows you to run JavaScript on the server-side. It's the backbone of our application, handling server logic and communication.

- **Express.js:** Express.js is a popular web application framework for Node.js. It simplifies the process of building robust and scalable web applications by providing a set of powerful features and tools.

- **MySQL Database:** MySQL is a relational database management system used for storing user data, book information, and more. It provides a structured and efficient way to manage data.

- **Sequelize:** Sequelize is an Object-Relational Mapping (ORM) library for Node.js. It simplifies database operations by allowing you to interact with the database using JavaScript objects, making it easier to work with complex data.

- **Multer:** Multer is a middleware for handling file uploads. In Book-Binder, it's essential for users to add book cover images and other visuals to their content.

- **bcrypt:** Bcrypt is a library used for securely hashing and storing passwords. It ensures that user passwords are protected against unauthorized access.

- **dotenv:** Dotenv is a package used for managing environment variables. It helps keep sensitive information like database credentials secure and separate from the codebase.

- **Handlebars.js:** Handlebars.js is a templating engine for rendering dynamic HTML. It allows us to create dynamic web pages by inserting data into predefined templates.
## Installation

To use this web application, users need to have several dependencies, packages, and technologies installed and available. Here's a list of what users need:

1. **Internet Connection:** Users need an active internet connection to access the application if it's hosted on a remote server.

2. **Web Browser:** Users need a web browser to access and interact with the web application.

3. **Image Processing Software:** Users may need image processing software to prepare and upload images when creating or editing book-related content (e.g., book covers).

**To install project-specific dependencies, follow these steps:**

1. Navigate to the project directory using the terminal or command prompt.

2. Run the following command to install the required dependencies specified in the package.json file:

   ```zsh
   npm install
   ```

Once the dependencies is installed, the web application is ready to be used.

## Usage

### Setting Up the Application

To use this web application, follow these steps to set it up:

1. **Clone the Repository**

   - Clone the project repository to your local machine using Git:

     ```sh
     git clone https://github.com/notUnEeVeN/Book-Binder.git
     ```

2. **Set Up Environment Variables**

   - Ensure that you've set up your environment variables.
   - Create a `.env` file in the project root and define the necessary variables, such as the database credentials and any other configuration settings.

3. **Install Dependencies**

   - Navigate to the project directory using the terminal or command prompt and run the following command to install the required dependencies specified in the `package.json` file:

     ```sh
     npm install
     ```

4. **Set Up the Database**

   - Make sure to have a MySQL database set up.
   - Configure the database connection in the `.env` file using the specified environment variables.

### Starting the Application

Once the setup is complete, you can start using the web application:

1. **Start the Server**

   - Launch the web application by running the following command:

     ```sh
     npm start
     ```

   The application will start and be accessible through the web browser.

### Navigating the Interface

As a user, you'll find the following interface elements:

- **Landing Page:** Register for a new account or log in.
- **Header Menu:** Easily navigate to different sections of the platform.
- **User Profile:** Customize your profile, including uploading a profile picture.
- **Central Feed:** Discover and interact with book-related content.

### Interacting with Book-Binder

Explore and utilize the various features of the application, including:

- **Creating Content:** Share book-related content, including reviews and recommendations.
- **Managing Posts:** Edit your posts and update book cover images.
- **Keeping Track:** Maintain records of your favorite books and those you're currently reading.

### Logging Out

To log out of the application, simply click the "Logout" button in the navigation menu.

Users can follow these steps to get started and navigate the application effectively.

## Testing

To test this web application, users can follow these general instructions or commands:

1. **Installation and Setup:**
   - Follow the installation and setup instructions mentioned above to ensure the application is installed and running locally.

2. **API Testing (Optional):**
   - To test the API endpoints, use tools like Postman, Insomnia, or cURL for API testing.
   - Refer to the project's API documentation or README file for information about available API endpoints and how to use them.

3. **User Interface Testing:**
   - Open a web browser and navigate to
     ```url
     http://localhost:3001
     ```
     to access the application's user interface.

4. **Register or Log In:**
   - A new user:
     - Click the "Sign Up" link to register for an account.
     - Provide name, email, and password.
   - Already have an account:
     - Click the "Login" link.
     - Provide email and password.

5. **Exploring the Application:**
   - Test the application's various features:
     - Creating book-related content.
     - Viewing your profile.
     - Keeping a record of favorite or currently reading books.

6. **Interaction and Data Testing:**
   - Perform actions like:
     - Creating posts.
     - Commenting on posts.
     - Updating profile information.

7. **Error Handling Testing:**
   - Try intentionally entering incorrect information or triggering invalid actions to test how the application handles errors.
   - Ensure that error messages are clear and informative.

8. **Log Out:**
   - To test the logout functionality, click the "Logout" button if available.

9. **Cross-Browser Testing:**
   - For thorough testing, consider using different web browsers to ensure that the application functions correctly and looks good across different browsers.
     - Chrome.
     - Firefox.
     - Safari.
     - Brave.

10. **Mobile and Responsive Testing:**
    - Test the application's responsiveness by accessing it from various devices to ensure that the user interface adapts correctly.
      - Desktop.
      - Tablet.
      - Mobile.

11. **Report Issues:**
    - If you encounter any bugs, issues, or unexpected behavior during testing, please document them with steps to reproduce and report them to the project's development team, if applicable.

Please note that the specific testing scenarios and procedures can vary based on the project's functionality and features.
## Credits

Thanks to everyone who worked on this project:

- [Tybalt Mallet](https://github.com/notUnEeVeN)
- [Tiffany Perez](https://github.com/pereztb02)
- [Clarice Kwong](https://github.com/Clkwong3)

## Links

Here are the deployment links for this project:

- Deployment via [Heroku](https://example.com)

- Deployment via [Github](https://notuneeven.github.io/Book-Binder/)

## Report Issue

If you encounter any issues, please report them on the project's [issue](https://github.com/notUnEeVeN/Book-Binder/issues) page.

## License

All rights reserved. Licensed under the MIT license.
