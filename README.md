# Todo_List

A simple To-Do List web application that allows users to add, edit, delete, and mark tasks as complete. This project includes both the front-end (HTML, CSS, JavaScript) and back-end (Node.js with MongoDB).

**Features**
Add new tasks.
Edit tasks in a modal.
Mark tasks as completed or uncompleted.
Delete tasks.
Persistent data with MongoDB (tasks are saved even after page reloads).

**Project Structure**

Frontend: HTML, CSS, JavaScript for the UI.
Backend: Node.js with Express for handling API requests, MongoDB for persistent storage.

**Tech Stack**

Frontend:
HTML
CSS
JavaScript (for dynamic UI)
Backend:
Node.js
Express
MongoDB (for storing tasks)

**Prerequisites**

Before running this project, make sure you have the following installed:

Node.js
MongoDB (or use MongoDB Atlas for a cloud solution)


**Installation**

**Clone the repository:**

git clone https://github.com/your-username/todo-list.git
cd todo-list

**Install dependencies:** For both frontend and backend dependencies:
npm install

**Set up MongoDB:**

If you're running MongoDB locally, ensure your MongoDB server is running.
If you're using MongoDB Atlas, create a cluster and replace the connection string in the .env file (create it if necessary).

**Run the application:**

Start the backend server: 
npm start

The backend will run on http://localhost:5000.

Open index.html (the front-end file) in a browser or use a local server to view the project.

**Backend API Routes:**

POST /tasks: Create a new task.
PUT /tasks/:id: Update an existing task.
DELETE /tasks/:id: Delete a task.
GET /tasks: Retrieve all tasks.

**Usage**

Add a new task: Type in the input field and click the "Add" button to create a new task.

Edit a task: Click the "Edit" button next to a task to open the modal and change the task description.

Mark a task as complete: Click the "Mark Complete" button to mark a task as completed. The task will have a strikethrough, and you can "Unmark" it later.

Delete a task: Click the "×" button next to a task to delete it.

**Contributing**

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. We welcome contributions in the form of bug fixes, features, and improvements.

**Acknowledgements**

Node.js for the backend runtime.
MongoDB for the database.
Express for the backend framework.
Font Awesome for some icons (e.g., edit, close buttons).








